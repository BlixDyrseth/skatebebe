const url = "https://ingridblixdyrseth.no/blog/wp-json/wp/v2/posts?_embed";

const blogContainer = document.querySelector(".blog-container");

async function getPosts() {
    try {
        const response = await fetch(url);
        const posts = await response.json();

        console.log(posts);

        blogContainer.innerHTML = "";

    

    posts.forEach(function(post) {
        blogContainer.innerHTML += `<a href="post.html?id=${post.id}">
        <div class="post-block">
        <h2>${post.title.rendered}</h2>
        </a>
        <img class="featured-pic" src=${post.featured_media}"/>
        <p>${post.excerpt.rendered}</p>
        <a href="post.html?id=${post.id}"><div class="button">Read more</div></a>`
    });

   }
    catch(error) {
        console.log(error);
        blogContainer.innerHTML = "error";
    }
}

getPosts();