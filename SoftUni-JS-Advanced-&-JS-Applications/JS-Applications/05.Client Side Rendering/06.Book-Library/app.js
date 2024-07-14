import { html,render } from "./node_modules/lit-html/lit-html.js";
import { GetReq, PostReq, singleGet, putReq, deleteReq } from "./RestReq.js";
let root = document.querySelector("body");
solve()
function solve(){

        render(innerHtmlFn(),root);
}

async function onClick(){
    
    let data = await GetReq();
    let dataAsValues = Object.entries(data);
    let tbody = document.querySelector("body > table > tbody");
    render(dataAsValues.map(x => tbodyHtml(x)),tbody);
}

function tbodyHtml(data){
    return html`
    <tr>
        <td>${data[1].title}</td>
        <td>${data[1].author}</td>
        <td>
            <button data-id=${data[0]} @click = ${editBtn}>Edit</button>
            <button data-id=${data[0]} @click = ${deleteBtn}>Delete</button>
        </td>
    </tr>`
}
async function editBtn(e){
    debugger
    document.querySelector(`#add-form`).style.display = `none`;
    document.querySelector(`#edit-form`).style.display = `block`;
    let id = e.target.dataset.id;
    let data = await singleGet(id);
    document.querySelector("#edit-form > input[type=text]:nth-child(4)").value = data.title;
    document.querySelector("#edit-form > input[type=text]:nth-child(6)").value = data.author;
    document.querySelector("#edit-form").dataset.id = id ;
}
function deleteBtn(e){
    let id = e.target.dataset.id;
    deleteReq(id);
    onClick();
}
function innerHtmlFn(data){
    return html`
    <button @click= ${onClick} id="loadBooks">LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>    
        </tbody>
    </table>

    <form id="add-form" @submit = ${onSubmitAdd}>
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>

    <form id="edit-form" @submit = ${onSubmitEdit} style="display: none">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save">
    </form>`
}

async function onSubmitAdd(e){
    e.preventDefault();
    let form = e.target;

    let formData = new FormData(form);
    let title = formData.get(`title`).trim()
    let author = formData.get(`author`).trim();

    if (title == `` || author == ``){
        return alert(`Please fill all fields before submitting`)
    }
    await PostReq({author,title});
    form.reset();
    await onClick();

}
async function onSubmitEdit(e){
    debugger;
    e.preventDefault();
    let form = e.target;
    let id = e.target.dataset.id
    let formData = new FormData(form);
    let title = formData.get(`title`).trim()
    let author = formData.get(`author`).trim();

    if (title == `` || author == ``){
        return alert(`Please fill all fields before submitting`)
    }
    await putReq({author,title},id);
    form.reset();
    await onClick();

    document.querySelector(`#add-form`).style.display = `block`;
    document.querySelector(`#edit-form`).style.display = `none`;
}

{/* 
    <button id="loadBooks">LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>

    <form id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>

    <form id="edit-form">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save">
    </form>
        */}