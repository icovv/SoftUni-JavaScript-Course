import { html} from "../../node_modules/lit-html/lit-html.js";
import { searchFruit } from "../data/data.js";
import { renderer } from "../data/renderer.js";

let serachTempl = (first,response) => html`
      <section id="search">

<div class="form">
  <h2>Search</h2>
  <form @submit = ${onSubmit} class="search-form">
    <input
      type="text"
      name="search"
      id="search-input"
    />
    <button class="button-list">Search</button>
  </form>
</div>
<h4>Results:</h4>
  <div class="search-result">
 ${first == 1 ? html`` : response.length > 0 ? response.map(x => fruits(x)): html`<p class="no-result">No result.</p>`}
  </div>
        </section>`

let fruits = (item) => html`<div class="fruit">
<img src=${item.imageUrl} alt="example1" />
<h3 class="title">${item.name}</h3>
<p class="description">${item.description}</p>
<a class="details-btn" href="/details/${item._id}">More Info</a>
</div>`

export async function searchView(){
    renderer(serachTempl(1));
}

async function onSubmit(e){
    e.preventDefault();
    let formData = new FormData(e.target);
    let text = formData.get(`search`).trim();
    if (text == ``){
        return alert(`Please fill the fields!`)
    }

    let response = await searchFruit(text);
    renderer(serachTempl(0,response));
}