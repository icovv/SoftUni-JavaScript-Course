import { html } from "../../node_modules/lit-html/lit-html.js";
import { getFruit } from "../data/data.js";
import { renderer } from "../data/renderer.js";

let dashboardTempl = (items) => html`
        <h2>Fruits</h2>
        <section id="dashboard">
            ${items.length > 0 ? items.map(x => fruitTempl(x)) : html`<h2>No fruit info yet.</h2>`}
        </section>
         `

let fruitTempl = (item) => html`
          <div class="fruit">
            <img src=${item.imageUrl} alt="example1" />
            <h3 class="title">${item.name}</h3>
            <p class="description">${item.description}</p>
            <a class="details-btn" href="/details/${item._id}">More Info</a>
          </div>`

export async function dashboardView(){
    let items = await getFruit();
    renderer(dashboardTempl(items));
}