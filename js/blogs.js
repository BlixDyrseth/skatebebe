const url = "https://ingridblixdyrseth.no/blog/wp-json/wp/v2/posts?per_page=12&?_embed";

let perPage = "?per_page="

const blogContainer = document.querySelector(".blog-container");

async function getPosts() {
    try {
        const response = await fetch(url);
        const posts = await response.json();


        blogContainer.innerHTML = "";


        for(let i = 0; i < posts.length; i++) {
   
            console.log(posts[i]);
            const post = posts[i];

            blogContainer.innerHTML += `<a href="post.html?id=${post.id}">
            <div class="post-block">
            <h2>${post.title.rendered}</h2>
            </a>
            <img class="featured-pic" src="${post.featured_media}"/>
            <p>${post.excerpt.rendered}</p>
            <a href="post.html?id=${post.id}"><div class="button">Read more</div></a>`


        } 

   }
    catch(error) {
        console.log(error);
        blogContainer.innerHTML = "error";
    }
}

getPosts();