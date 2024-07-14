import { html, render } from "./node_modules/lit-html/lit-html.js";
import {GetReq, PostReq} from "./RestReq.js"
let root = document.querySelector("#menu");
let form = document.querySelector("body > article > form");
form.addEventListener(`submit`,onSubmit);
addItem();
async function  addItem() {
    let data = await GetReq()
    let dataAsEntries = Object.values(data);
   renderFn(dataAsEntries.map(x => html`<option value=${x._id}>${x.text}</option>`))
}


function onSubmit(e){
    e.preventDefault();
    let text = e.target.querySelector(`#itemText`).value;
    if (text == ``){
        return alert(`Please fill the form`)
    }
    PostReq({text});
    e.target.querySelector(`#itemText`).value = ``;
    addItem();
}

function renderFn(data){
    return render(data,root)
}
