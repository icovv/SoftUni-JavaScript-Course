// function attachEvents() {
//     let urlPosts = "http://localhost:3030/jsonstore/blog/posts";
//     let urlComments = "http://localhost:3030/jsonstore/blog/comments/"
//     let btnLoads = document.querySelector("#btnLoadPosts");
//     let btnView = document.querySelector("#btnViewPost");
//     let select = document.getElementById(`posts`);
//     let h1 = document.getElementById(`post-title`);
//     let p = document.getElementById(`post-body`);
//     let ul = document.getElementById(`post-comments`);
//     btnLoads.addEventListener(`click`,doSth);
//     btnView.addEventListener(`click`,viewSth)
//     let bodyInfo = [];
//     async function doSth(){
//         try {
//             let response = await fetch(urlPosts);
//             let data = await response.json()
//             let dataAsArr = Object.entries(data);
//             for (let i = 0; i < dataAsArr.length; i ++){
//                 let option = document.createElement(`option`);
//                 select.appendChild(option);
//                 option.value = dataAsArr[i][0]
//                 let something = dataAsArr[i][0]
//                 option.textContent = dataAsArr[i][1].title
//                 let body = dataAsArr[i][1].body;
//                 bodyInfo.push({something,
//                             body})
//             }
//         } catch (error) {
//             alert(`Error: ${e.message}`)
//         }

//     }
//     async function viewSth(){
//         let allOptions = document.getElementsByTagName(`option`);
//         for(let option of allOptions){
//             if (option.selected){
//                 try {
//                     let response = await fetch(urlComments);
//                     let data = await response.json();
//                     let dataAsArr = Object.entries(data);
//                     ul.innerHTML = ``;
//                     h1.textContent = ``;
//                     p.textContent = ``

//                     for (let item of dataAsArr){
//                         if (option.value === item[1].postId){
//                             h1.textContent = option.textContent;
//                                 let li = document.createElement(`li`);
//                                 li.textContent = item[1].text;
//                                 li.id = item[1].id
//                                 ul.appendChild(li)
//                                 for (let one of bodyInfo){
//                                     if (one.something == option.value){
//                                         p.textContent = one.body;
//                                     }
//                                 }
                            
//                         }
//                     }
//                 } catch (error) {
//                     alert(`Error: ${e.message}`)
//                 }

//             }
//         }
//     }
// }

// attachEvents();
const host = 'http://localhost:3030/jsonstore/blog/';

function attachEvents() {

    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const viewPostsBtn = document.getElementById('btnViewPost');
    const postsEl = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    loadPostsBtn.addEventListener('click', loadPosts);
    viewPostsBtn.addEventListener('click', viewPosts);

    const posts = [];

    async function loadPosts() {
        postsEl.innerHTML = '';

        const postsData = await get('posts');

        for (let value of Object.values(postsData)) {
            const option = document.createElement('option');
            option.value = value.id;
            option.textContent = value.title;
            postsEl.appendChild(option);
            posts.push({
                title: value.title,
                body: value.body
            });
        }
    }


    async function viewPosts() {
        const selectedOption = Array.from(document.querySelectorAll('option')).find(option => option.selected);
        if (selectedOption == undefined) return;

        const commentsData = await get('comments');

        const body = posts.find(post => post.title == selectedOption.textContent).body;
        postTitle.textContent = selectedOption.textContent;
        postBody.textContent = body;
        postComments.innerHTML = '';
        for (let comment in commentsData) {
            if (commentsData[comment].postId == selectedOption.value) {
                const li = document.createElement('li');
                li.id = commentsData[comment].id;
                li.textContent = commentsData[comment].text;
                postComments.appendChild(li);
            }
        }
    }

}

async function get(endpoint) {
    try {
        const response = await fetch(`${host}${endpoint}`);
        if (!response.ok) throw new Error();

        const data = await response.json();
        return data;
    } catch (e) {
        alert(`Error: ${e.message}`);
    }
}

attachEvents();