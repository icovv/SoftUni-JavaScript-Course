import { html } from "../../node_modules/lit-html/lit-html.js";
import { addFruits } from "../data/data.js";
import { goTo } from "../data/goTo.js";
import { renderer } from "../data/renderer.js";

let addFruitTempl = () => html`
<section id="create">
  <div class="form">
    <h2>Add Fruit</h2>
    <form @submit = ${onSubmit} class="create-form">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Fruit Name"
      />
      <input
        type="text"
        name="imageUrl"
        id="Fruit-image"
        placeholder="Fruit Image"
      />
      <textarea
      id="fruit-description"
      name="description"
      placeholder="Description"
      rows="10"
      cols="50"
    ></textarea>
    <textarea
      id="fruit-nutrition"
      name="nutrition"
      placeholder="Nutrition"
      rows="10"
      cols="50"
    ></textarea>
      <button type="submit">Add Fruit</button>
    </form>
  </div>
</section>`

export function addFruitView(){
    renderer(addFruitTempl());
}

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

    let response = await addFruits({name,imageUrl,description,nutrition});
    e.target.reset();
    goTo(`/details/${response._id}`);

}