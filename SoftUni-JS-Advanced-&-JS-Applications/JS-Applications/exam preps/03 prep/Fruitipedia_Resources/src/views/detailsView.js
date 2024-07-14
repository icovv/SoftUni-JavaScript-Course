import { html} from "../../node_modules/lit-html/lit-html.js";
import { deleteFruit, fruitDetails, getFruit } from "../data/data.js";
import { goTo } from "../data/goTo.js";
import { renderer } from "../data/renderer.js";
import { getUserData } from "../data/userData.js";

let detailsTempl = (item,isOwner,onClick) => html`
<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src=${item.imageUrl} alt="example1" />
    <p id="details-title">${item.name}</p>
    <div id="info-wrapper">
      <div id="details-description">
        <p>${item.description}</p>
            <p id="nutrition">Nutrition</p>
           <p id = "details-nutrition">
              ${item.nutrition}</p>
      </div>
    ${isOwner ? html`<div id="action-buttons">
    <a href="/edit/${item._id}" id="edit-btn">Edit</a>
    <a @click = ${onClick} href="javascript:void(0)" id="delete-btn">Delete</a>
  </div>` : html ``}  
    </div>
</div>
</section>`

export async function detailsView(ctx){
    let id = ctx.params.id;
    let user = getUserData();
    let data = await fruitDetails(id);
    let isOwner = user && user._id === data._ownerId
    renderer(detailsTempl(data,isOwner,onClick));
   
    async function onClick(){
        let dialog = confirm(`Are you sure you want to delete this fruit\`s information?`)
        if (dialog){
            await deleteFruit(id);
            goTo(`/dashboard`)
        }
    }
}