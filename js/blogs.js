
let index = 10;

const text = "?per_page=";

let perPage = text + index;

const url = "https://ingridblixdyrseth.no/blog/wp-json/wp/v2/posts?_embed";

const loadMoreBtn = document.querySelector("#loadMoreBtn");

const blogContainer = document.querySelector(".blog-container");

async function getPosts() {
    try {
        const response = await fetch(url + `&per_page=${index}`);
        const posts = await response.json();
        
        console.log(response);

        blogContainer.innerHTML = "";


        loadMoreBtn.addEventListener("click", loadMore);

        for(let i = 0; i < posts.length; i++) {
         
            console.log(posts[i]);
            const post = posts[i];

            console.log(post._embedded["wp:featuredmedia"][0].alt_text)

    
            blogContainer.innerHTML += `<div class="post-block">
            <a href="post.html?id=${post.id}">
            <h2>${post.title.rendered}</h2>
            <img class="featured-img" src="${post.featured_media_src_url}" alt="${post._embedded["wp:featuredmedia"][0].alt_text}"/>
            </a>
            <div class="text-block"
            <p>${post.excerpt.rendered}</p>
            <a href="post.html?id=${post.id}">
            <div class="button">Read more</div>
            </a>
            </div>
            </div>`; }

   }
    catch(error) {
        console.log(error);
        blogContainer.innerHTML = "error";
    }
}

function loadMore() {
    index = index * 2;
    if(index <= 20) {
     loadMoreBtn.style.display = "none";
    }
    getPosts();
    console.log("Hello");   
    console.log(index);
}




getPosts(url);






