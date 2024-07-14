import { html } from "../../node_modules/lit-html/lit-html.js";
import { goTo } from "../data/goTo.js";
import { renderer } from "../data/renderer.js";
import { del, get, put } from "../data/requester.js";
import { getUserData } from "../data/userData.js";

let editTempl = (item,onSubmit) => html`        <section id="edit">
<h2>Edit Motorcycle</h2>
<div class="form">
  <h2>Edit Motorcycle</h2>
  <form @submit = ${onSubmit} class="edit-form">
    <input
      type="text"
      name="model"
      id="model"
      placeholder="Model"
      value = "${item.model}"
    />
    <input
      type="text"
      name="imageUrl"
      id="moto-image"
      placeholder="Moto Image"
      value = "${item.imageUrl}"
    />
    <input
    type="number"
    name="year"
    id="year"
    placeholder="Year"
    value = "${item.year}"
  />
  <input
  type="number"
  name="mileage"
  id="mileage"
  placeholder="mileage"
  value = "${item.mileage}"
/>
<input
  type="number"
  name="contact"
  id="contact"
  placeholder="contact"
  value = "${item.contact}"
/>
  <textarea
    id="about"
    name="about"
    placeholder="about"
    rows="10"
    cols="50"
  >${item.about}</textarea>
    <button type="submit">Edit Motorcycle</button>
  </form>
</div>
</section>`

export async function editView(ctx){
    let id = ctx.params.id;
    let response = await get(`http://localhost:3030/data/motorcycles/${id}`)
    renderer(editTempl(response,onSubmit));

    async function onSubmit(e){
        e.preventDefault();

        let formData = new FormData(e.target);
        let model = formData.get(`model`).trim()
        let imageUrl = formData.get(`imageUrl`).trim()
        let year = formData.get(`year`).trim()
        let mileage = formData.get(`mileage`).trim()
        let contact = formData.get(`contact`).trim()
        let about = formData.get(`about`).trim()

        if (model == `` || imageUrl == `` || year == `` || mileage == `` || contact == `` || about == ``){
            return alert(`Please fill all fields!`)
        }
        await put(`http://localhost:3030/data/motorcycles/${id}`,{model,imageUrl,year,mileage,contact,about});
        goTo(`/details/${id}`)
    }
}