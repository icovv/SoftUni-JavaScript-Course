import { getDate } from "./date.js";
import { loadAllPosts } from "./home.js";
export async function createPosts(e){
    e.preventDefault();

    let form = e.target;
    let formData = new FormData(form);
    let title = formData.get(`topicName`).trim()
    let username = formData.get(`username`).trim()
    let post = formData.get(`postText`).trim();
    let url = "http://localhost:3030/jsonstore/collections/myboard/posts"
    if (title == `` || username == `` || post == ``){
        alert(`Please fill all fields`);
        return
    }
    try {
        let date = getDate();
        let response = await fetch(url,{
            method: `Post`,
            headers: {"Content-Type": `application/json`},
            body: JSON.stringify({title,username,post,date})
        }) 
        if (!response.ok){
            let err = await response.json();
            alert (err.message);
            return;
        }
        let data = await response.json();
        await loadAllPosts()
        form.reset();
        return;
    } catch (error) {
        alert(error.message);
        form.reset();
    }
}