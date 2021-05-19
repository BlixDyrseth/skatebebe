const url = "https://ingridblixdyrseth.no/blog/wp-json/wp/v2/posts?per_page=12&?_embed";

const carouselContainer = document.querySelector(".carousel-container");

const nextButton = document.querySelector(".carousel-button--right");
const prevButton = document.querySelector(".carousel-button--left");

async function getLastPosts() {
    try {
        const response = await fetch(url);
        const latest = await response.json();

        carouselContainer.innerHTML = "";

        for(let i = 0; i <= 8; i++ ) {

            const lastPost = latest[i];

            const image = lastPost.featured_media_src_url;

            
            carouselContainer.innerHTML +=`<section class="carousel-slide">
            <a href="post.html?id=${lastPost.id}">
            <section class="carousel-slide"><img class="carousel-img" src="${image}"/>
            <div class="carousel-text-bg">
             <p class="carousel-text">${lastPost.title.rendered}</p>
             </div>
             </a>
             </section>`

        }
 

   }
    catch(error) {
        console.log(error);
        carouselContainer.innerHTML = "error";
    }
}


getLastPosts();

const track = document.querySelector(".carousel");
const slide = document.getElementsByClassName("carousel-track");


const slideWidth = track.getBoundingClientRect().width + 8;

console.log(slideWidth);

let index = 0;


function checkLenghtOfLargeScreen(largeWindow) {

    if (largeWindow.matches) {
nextButton.addEventListener("click", () => {
    
    console.log("Hello");

    index = (index < 1) ? index + 1 : 0;
    carouselContainer.style.transform = "translate(" + (index) * -1240 + "px)";
  
    console.log(index);

    });

prevButton.addEventListener("click", () => {

    const track = document.querySelector(".carousel");
    const slideWidth = track.getBoundingClientRect().width + 8;
    
    console.log("Howdy");
    index = (index < 0) ? index - 1 : 0;
    carouselContainer.style.transform = "translate(" + (index) * -1240 + "px)";

    console.log(index);
});
    }
}

const largeWindow = window.matchMedia("(min-width: 1350px)");
checkLenghtOfLargeScreen(largeWindow);
largeWindow.addEventListener(checkLenghtOfLargeScreen);


function checkLenghtOfScreen(middelWindow) {

    if (middelWindow.matches) {
nextButton.addEventListener("click", () => {
    
    console.log("Hello");

    index = (index < 3) ? index + 1 : 0;
    carouselContainer.style.transform = "translate(" + (index) * -828 + "px)";
  
    console.log(index);

    });

prevButton.addEventListener("click", () => {

     slideWidth = track.getBoundingClientRect().width + 8;
    
    console.log("Howdy");
    index = (index < 0) ? index - 1 : 0;
    carouselContainer.style.transform = "translate(" + (index) * -828 + "px)";

    console.log(index);
});
    }
}


const middelWindow = window.matchMedia("(min-width: 950px)");
checkLenghtOfScreen(middelWindow);
middelWindow.addEventListener(checkLenghtOfScreen);