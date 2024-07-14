let homeDiv = document.querySelector(`.container`)
let homePageNewTopic = document.querySelector("body > div > main > div.new-topic-border");
let topicContainer = document.querySelector("body > div > main > div.topic-title");
let topicComment = document.querySelector("body > div > main > div.topic-title > div");
import { getDate } from "./date.js";
let url = "http://localhost:3030/jsonstore/collections/myboard/posts/"
import { loadAllPosts } from "./home.js";
export async function detailsPage(e){
    topicContainer.style.display = `block`;
    homePageNewTopic.style.display = `none`;
    let postId = 0;
    if(typeof(e) != `object`){
    postId = e;
    } else {
    postId = e.target.parentNode.dataset.id;
    }
    
    try {
        let response = await fetch(url + postId);
        let data = await response.json();
        topicContainer.innerHTML = ``;
        await createPage(data);
    } catch (error) {
        alert(error.message);
        loadAllPosts()
    }
}

async function createPage(data){
    createHeader(data);
    createPost(data);
    await getComments(data);
    createButton(data);
    document.querySelector("body > div > main > div.topic-title > div.answer-comment > div > form").addEventListener(`submit`,addNewComment);
}

function createHeader(data){
    topicContainer.innerHTML +=
    `<div class="theme-title">
    <div class="theme-name-wrapper">
        <div class="theme-name">
            <h2>${data.title}</h2>
        </div>
    </div>
</div>`
}
function createPost(data){
    topicContainer.innerHTML +=
    `<div class="comment"> 
    <div class="header">
        <img src="./static/profile.png" alt="avatar">
        <p><span>${data.username}</span> posted on <time>${data.date}</time></p>
    
        <p class="post-content">${data.post}</p>
    </div>`
}
function createComments(data){
    topicContainer.innerHTML += ` <div id="user-comment">
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <p><strong>${data.username}</strong> commented on <time>${data.date}</time></p>
            <div class="post-content">
                <p>${data.post}</p>
            </div>
        </div>
    </div>
    </div>
    </div>`
    //{postText,username,postId,date}
}
function createButton(data){
    topicContainer.innerHTML +=
    `<div class="answer-comment">
    <p><span>currentUser</span> comment:</p>
    <div class="answer">
        <form data-id = ${data._id}>
            <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
            <div>
                <label for="username">Username <span class="red">*</span></label>
                <input type="text" name="username" id="username">
            </div>
            <button>Post</button>
        </form>
    </div>
</div>`
}

async function addNewComment(e){
    e.preventDefault();
    let postId = e.target.dataset.id;
    let urlForComments = "http://localhost:3030/jsonstore/collections/myboard/comments"
    let form = e.target;
    let date = getDate();
    let formData = new FormData(form);
    let post = formData.get(`postText`).trim()
    let username = formData.get(`username`).trim();

    if(post == `` || username == ``){
        alert(`Please fill all fields`);
        form.reset();
        return
    }
    try {
        let response = await fetch(urlForComments,{
            method: `Post`,
            headers: {"Content-Type": `application/json`},
            body: JSON.stringify({post,username,postId,date})
        })
        if (!response.ok){
            let err = await response.json();
            alert (err.message);
            return;
        }
        form.reset();
        detailsPage(postId);
        return;
    } catch (error) {
        return alert(error.message)
    }
}
async function getComments(data){
    let ourPostId = data._id;
    let urlForComments = "http://localhost:3030/jsonstore/collections/myboard/comments"
    try {
        let response = await fetch(urlForComments);
        let data = await response.json();
        let dataAsValues = Object.values(data);
        for(let item of dataAsValues){
            if (item.postId == ourPostId){
                createComments(item);
            }
        }
    } catch (error) {
        return alert(error.message);
    }
}