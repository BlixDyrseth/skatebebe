const url = "https://ingridblixdyrseth.no/blog/wp-json/wp/v2/posts?per_page=12&?_embed";

const carouselContainer = document.querySelector(".carousel-container");

async function getLastPosts() {
    try {
        const response = await fetch(url);
        const latest = await response.json();

        console.log(latest)

        carouselContainer.innerHTML = "";

   }
    catch(error) {
        console.log(error);
        carouselContainer.innerHTML = "error";
    }
}

getLastPosts();