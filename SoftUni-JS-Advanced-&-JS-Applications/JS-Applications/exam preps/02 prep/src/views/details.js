import { html } from "../../node_modules/lit-html/lit-html.js";
import { goTo } from "../data/goTo.js";
import { renderer } from "../data/renderer.js";
import { del, get } from "../data/requester.js";
import { getUserData } from "../data/userData.js";

let detailsTemp = (item,isOwner, onClick) => html`
              <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${item.imageUrl} alt="example1" />
            <p id="details-title">${item.model}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="year">Year: ${item.year}</p>
                <p class="mileage">Mileage: ${item.mileage} km.</p>
                <p class="contact">Contact Number: ${item.contact}</p>
                   <p id = "motorcycle-description">${item.about}</p>
              </div>
          ${isOwner? html`<div id="action-buttons">
            <a href="/edit/${item._id}" id="edit-btn">Edit</a>
            <a @click = ${onClick} href="javascript:void(0)" id="delete-btn">Delete</a>
          </div>` : ``}
            </div>
        </div>
      </section>`


export async function detailsView(ctx){
    let id = ctx.params.id;
    let response = await get(`http://localhost:3030/data/motorcycles/${id}`)
    let user = getUserData();
    let isOwner = user && response._ownerId == user._id ? true : false;
    renderer(detailsTemp(response,isOwner,onClick));

    async function onClick(){
        let response = confirm(`Are you sure you want to delete this motorcycle?`);
        if (response){
        await del(`http://localhost:3030/data/motorcycles/${id}`)
        goTo(`/dashboard`)
        } else {
            return;
        }
    }
}

