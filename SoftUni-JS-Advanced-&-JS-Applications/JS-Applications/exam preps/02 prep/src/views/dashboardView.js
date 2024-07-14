import { html } from "../../node_modules/lit-html/lit-html.js";
import { goTo } from "../data/goTo.js";
import { navBar } from "../data/navBar.js";
import { renderer } from "../data/renderer.js";
import { get } from "../data/requester.js";
import { setUserData } from "../data/userData.js";
import { login } from "../data/userService.js";

let dashboardTempl = (items) => html`
        <!-- Dashboard page -->
        <h2>Available Motorcycles</h2>
        <section id="dashboard">
          ${items.length ? items.map(x => motorcycleTempl(x)) : html`<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`}
        </section>
         
`

let motorcycleTempl = (item) => html`<div class="motorcycle">
                                <img src=${item.imageUrl} alt="example1" />
                                <h3 class="model">${item.model}</h3>
                                <p class="year">Year: ${item.year}</p>
                                <p class="mileage">Mileage: ${item.mileage} km.</p>
                                <p class="contact">Contact Number: ${item.contact}</p>
                                <a class="details-btn" href="/details/${item._id}">More Info</a>
                                </div>
`

export async function dashboardView(){
    let allItems = await get(`http://localhost:3030/data/motorcycles?sortBy=_createdOn%20desc`);
    
    renderer(dashboardTempl(allItems));

}