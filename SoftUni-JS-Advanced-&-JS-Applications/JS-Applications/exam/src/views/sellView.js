import { html } from "../../node_modules/lit-html/lit-html.js";
import { addItem } from "../data/data.js";
import { goTo } from "../data/goTo.js";
import { renderer } from "../data/renderer.js";

let sellTempl = () => html`
        <section id="create">
          <div class="form form-item">
            <h2>Share Your item</h2>
            <form @submit = ${onSubmit} class="create-form">
              <input type="text" name="item" id="item" placeholder="Item" />
              <input
                type="text"
                name="imageUrl"
                id="item-image"
                placeholder="Your item Image URL"
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
              />
              <input
                type="text"
                name="availability"
                id="availability"
                placeholder="Availability Information"
              />
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Item Type"
              />
              <textarea
                id="description"
                name="description"
                placeholder="More About The Item"
                rows="10"
                cols="50"
              ></textarea>
              <button type="submit">Add</button>
            </form>
          </div>
        </section>`

export function sellView(){
    renderer(sellTempl());
}

async function onSubmit(e){
    e.preventDefault();

    let formData = new FormData(e.target);
    let item = formData.get(`item`).trim()
    let imageUrl = formData.get(`imageUrl`).trim()
    let price = formData.get(`price`).trim()
    let availability = formData.get(`availability`).trim()
    let type = formData.get(`type`).trim()
    let description = formData.get(`description`).trim();

    if (item == `` || imageUrl == `` || price == `` || availability == `` || type == `` || description == ``){
      document.getElementById(`errorBox`).style.display = `block`;  
      return
    }

    await addItem({item,imageUrl,price,availability,type,description});
    goTo(`/dashboard`);
}