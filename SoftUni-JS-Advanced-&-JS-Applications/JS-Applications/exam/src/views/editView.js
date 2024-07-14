import { html } from "../../node_modules/lit-html/lit-html.js";
import { changeItem, getItem } from "../data/data.js";
import { goTo } from "../data/goTo.js";
import { renderer } from "../data/renderer.js";

let editTempl = (item,onSubmit) => html`
       <section id="edit">
          <div class="form form-item">
            <h2>Edit Your Item</h2>
            <form @submit = ${onSubmit} class="edit-form">
              <input type="text" name="item" id="item" placeholder="Item" value = ${item.item} />
              <input
                type="text"
                name="imageUrl"
                id="item-image"
                placeholder="Your item Image URL"
                value = ${item.imageUrl}
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
                value = ${item.price}
              />
              <input
                type="text"
                name="availability"
                id="availability"
                placeholder="Availability Information"
                value = ${item.availability}
              />
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Item Type"
                value = ${item.type}
              />
              <textarea
                id="description"
                name="description"
                placeholder="More About The Item"
                rows="10"
                cols="50"
              >${item.description}</textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>`

export async function editView(ctx){
    let id = ctx.params.id;
    let response = await getItem(id);
    renderer(editTempl(response,onSubmit));
    
    async function onSubmit(e){
        e.preventDefault()
    
        let formData = new FormData(e.target);
        let item = formData.get(`item`).trim()
        let imageUrl = formData.get(`imageUrl`).trim()
        let price = formData.get(`price`).trim()
        let availability = formData.get(`availability`).trim()
        let type = formData.get(`type`).trim()
        let description = formData.get(`description`).trim();
    
        if (item == `` || imageUrl == `` || price == `` || availability == `` || type == `` || description == ``){
            document.getElementById(`errorBox`).style.display = `block`;
            return;
        }
    
        await changeItem(id,{item,imageUrl,price,availability,type,description});
        goTo(`/details/${id}`)
    }
}

