import { html } from "../../node_modules/lit-html/lit-html.js";
import { goTo } from "../data/goTo.js";
import { renderer } from "../data/renderer.js";
import { del, get, put } from "../data/requester.js";
import { getUserData } from "../data/userData.js";


let searchTempl = (firstLoad, items) => html`<section id="search">

 <div class="form">
   <h4>Search</h4>
   <form @submit = ${onSubmit} class="search-form">
     <input
       type="text"
       name="search"
       id="search-input"
     />
     <button class="button-list">Search</button>
   </form>
 </div>
 <h4 id="result-heading">Results:</h4>
   <div class="search-result">
  ${firstLoad === 1 ?  `` : items.length ? items.map(x => singleItem(x)) : html`<h2 class="no-avaliable">No result.</h2>`}
   </div>
         </section>`

let singleItem = (item) => html`  <div class="motorcycle">
<img src=${item.imageUrl} alt="example1" />
<h3 class="model">${item.model}</h3>
  <a class="details-btn" href="/details/${item._id}">More Info</a>
</div>`

export async function searchView(){
    renderer(searchTempl(1));
}

async function onSubmit(e){
    e.preventDefault();
    let formData = new FormData(e.target);
    let query = formData.get(`search`);

    let response = await get(`http://localhost:3030/data/motorcycles?where=model%20LIKE%20%22${query}%22`);
    renderer(searchTempl(0,response));
}