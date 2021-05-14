const postContainer = document.querySelector("#postContainer");

const titleDetails = document.querySelector("#titledetails");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const postUrl = "https://ingridblixdyrseth.no/blog/wp-json/wp/v2/posts/" + id;

console.log(postUrl);

async function getOnePost() {
    try{
        const response = await fetch(postUrl);
        const detail = await response.json();

        console.log(detail);

        postContainer.innerHTML = "";

        createHtml(detail);

    }
    catch(error) {
        console.log(error);
        postContainer.innerHTML = "error";
    }
}

getOnePost();

function createHtml(detail) {
    postContainer.innerHTML += `<h1>${detail.title.rendered}</h1>
    <div class="detail-text">
    <p>${detail.content.rendered}</p>
    </div>`
}


