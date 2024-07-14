import { detailsPage } from "./postsDetails.js";
let homeDiv = document.querySelector(`.container`)
// let homeDivInnerHtml = homeDiv.innerHTML;
let topicContainer = document.querySelector("body > div > main > div.topic-title");
let homePageNewTopic = document.querySelector("body > div > main > div.new-topic-border");
let url = "http://localhost:3030/jsonstore/collections/myboard/posts"

export async function loadAllPosts(){
    // homeDiv.style.display = `block`;
    homePageNewTopic.style.display = `block`;
    try {
        let reponse = await fetch(url);
        let data = await reponse.json();
        let dateAsValue = Object.values(data);
        topicContainer.innerHTML = ``;
        dateAsValue.forEach(item => createItems(item))
        let arrOfBtns = Array.from(document.querySelectorAll(`a.normal`));
        arrOfBtns.forEach(btn => btn.addEventListener(`click`,detailsPage))
    } catch (error) {
        alert(error.message);
        return;
    }
}   

function createItems(el){
    topicContainer.innerHTML +=
    `<div class="topic-container">
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <a href="#" class="normal" data-id = ${el._id}>
                <h2>${el.title}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${el.date}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${el.username}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
}