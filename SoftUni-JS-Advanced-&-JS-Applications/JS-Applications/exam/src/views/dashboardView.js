import { html } from "../../node_modules/lit-html/lit-html.js";
import { dashboardItems } from "../data/data.js";
import { renderer } from "../data/renderer.js";

let dashboardTempl = (Items) => html`
        <!-- Dashboard page -->
        <h3 class="heading">Market</h3>
        <section id="dashboard">
          ${Items.length > 0 ? Items.map(x => item(x)) : html`<h3 class="empty">No Items Yet</h3>`}
        </section>
        `

let item = (x) => html`
<div class="item">
<img src= ${x.imageUrl} alt="example1" />
<h3 class="model">${x.item}</h3>
<div class="item-info">
  <p class="price">Price: €${x.price}</p>
  <p class="availability">
    ${x.availability}
  </p>
  <p class="type">Type: ${x.type}</p>
</div>
<a class="details-btn" href="/details/${x._id}">Uncover More</a>
</div>
`

export async function dashboardView(){
    let response = await dashboardItems();
    renderer(dashboardTempl(response));
}