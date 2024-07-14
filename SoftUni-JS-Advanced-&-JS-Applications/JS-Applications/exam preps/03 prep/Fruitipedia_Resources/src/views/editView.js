import { html} from "../../node_modules/lit-html/lit-html.js";
import { editFruits, fruitDetails } from "../data/data.js";
import { goTo } from "../data/goTo.js";
import { renderer } from "../data/renderer.js";

let editTempl = (data,onSubmit) => html`
       <section id="edit">
          <div class="form">
            <h2>Edit Fruit</h2>
            <form @submit = ${onSubmit} class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
                value = ${data.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image URL"
                value= ${data.imageUrl}
              />
              <textarea
                id="fruit-description"
                name="description"
                placeholder="Description"
                rows="10"
                cols="50"
              >${data.description}</textarea>
              <textarea
                id="fruit-nutrition"
                name="nutrition"
                placeholder="Nutrition"
                rows="10"
                cols="50"
              >${data.nutrition}</textarea>
              <button type="submit">post</button>
            </form>
          </div>
        </section>`

export async function editView(ctx){
    let id = ctx.params.id;
    let data = await fruitDetails(id);
    renderer(editTempl(data,onSubmit));

    async function onSubmit(e){
        e.preventDefault();
        let formData = new FormData(e.target);
        let name = formData.get(`name`).trim()
        let imageUrl = formData.get(`imageUrl`).trim()
        let description = formData.get(`description`).trim()
        let nutrition = formData.get(`nutrition`).trim();
    
        if (name == `` || imageUrl == `` || description == `` || nutrition == ``){
            return alert(`Please fill all fields!`)
        }
        await editFruits(id,{name,imageUrl,description,nutrition});
        goTo(`/details/${id}`);
    }
}

