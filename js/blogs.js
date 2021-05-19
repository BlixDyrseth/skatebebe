
let index = 10;

const text = "per_page=";

let perPage = text + index;

let url = "https://ingridblixdyrseth.no/blog/wp-json/wp/v2/posts?";

const loadMoreBtn = document.querySelector("#loadMoreBtn");

const blogContainer = document.querySelector(".blog-container");

async function getPosts() {
    try {
        const response = await fetch(url + `per_page=${index}`);
        const posts = await response.json();
        

        blogContainer.innerHTML = "";

        for(let i = 0; i < posts.length; i++) {
   
            console.log(posts[i]);
            const post = posts[i];
    
            blogContainer.innerHTML += `<div class="post-block">
            <a href="post.html?id=${post.id}">
            <h2>${post.title.rendered}</h2>
            </a>
            <img class="featured-img" src="${post.featured_media_src_url}"/>
            <div class="text-block"
            <p>${post.excerpt.rendered}</p>
            <a href="post.html?id=${post.id}"><div class="button">Read more</div>
            </a>
            </div>
            </div>`
        }

        loadMoreBtn.addEventListener("click", (e) => {
            index = index + 10;
            console.log("Hello");   
            console.log(index);
            });

   }
    catch(error) {
        console.log(error);
        blogContainer.innerHTML = "error";
    }
}



getPosts();






