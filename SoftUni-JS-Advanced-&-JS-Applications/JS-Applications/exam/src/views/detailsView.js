import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteItem, getItem } from "../data/data.js";
import { goTo } from "../data/goTo.js";
import { renderer } from "../data/renderer.js";
import { get } from "../data/requester.js";
import { getUserData } from "../data/userData.js";


let detailsTempl = (item,isOwner,deleteFn) => html`
       <section id="details">
          <div id="details-wrapper">
            <div>
              <img id="details-img" src= ${item.imageUrl} alt="example1" />
              <p id="details-title">${item.item}</p>
            </div>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="details-price">Price: €${item.price}</p>
                <p class="details-availability">
                  ${item.availability}
                </p>
                <p class="type">Type: ${item.type}</p>
                <p id="item-description">
                  ${item.description}
                </p>
              </div>
              <!--Edit and Delete are only for creator-->
              ${isOwner ? html`<div id="action-buttons">
                <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                <a @click = ${deleteFn} href="javascript:void(0)" id="delete-btn">Delete</a>
              </div>` : ``}
            </div>
          </div>
        </section>`

export async function detailsView(ctx){
    let id = ctx.params.id;
    let response = await getItem(id);
    let user = getUserData();
    let isOwner = user && user._id === response._ownerId;
    renderer(detailsTempl(response,isOwner,deleteFn));

    async function deleteFn(){
        let dialog = confirm(`Are you sure you want to delete this item\`s information?`)
        if (dialog){
            await deleteItem(id);
            goTo(`/dashboard`)
        }
    }
}