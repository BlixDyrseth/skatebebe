const url = "https://ingridblixdyrseth.no/blog/wp-json/wp/v2/pages/";

const contactContainer = document.querySelector("#contactContainer");

async function getContactInfo() {
    try {
        const response = await fetch(url);
        const contact = await response.json();

        console.log(contact);

        contactContainer.innerHTML = "";

    

        contact.forEach(function(post) {
        contactContainer.innerHTML += `<h1>${contact.title.rendered}</h1> 
        <div class="contactSheet">${contact.content.rendered}</div>`
    });

   }
    catch(error) {
        console.log(error);
        contactContainer.innerHTML = "error";
    }
}

getContactInfo();