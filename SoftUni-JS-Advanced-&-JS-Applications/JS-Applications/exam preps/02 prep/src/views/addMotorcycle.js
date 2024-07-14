import { html } from "../../node_modules/lit-html/lit-html.js";
import { goTo } from "../data/goTo.js";
import { renderer } from "../data/renderer.js";
import { post } from "../data/requester.js";

let addTempl = () => html`
        <section id="create">
          <h2>Add Motorcycle</h2>
          <div class="form">
            <h2>Add Motorcycle</h2>
            <form @submit = ${onSubmit} class="create-form">
              <input
                type="text"
                name="model"
                id="model"
                placeholder="Model"
              />
              <input
                type="text"
                name="imageUrl"
                id="moto-image"
                placeholder="Moto Image"
              />
              <input
              type="number"
              name="year"
              id="year"
              placeholder="Year"
            />
            <input
            type="number"
            name="mileage"
            id="mileage"
            placeholder="mileage"
          />
          <input
            type="text"
            name="contact"
            id="contact"
            placeholder="contact"
          />
            <textarea
              id="about"
              name="about"
              placeholder="about"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Motorcycle</button>
            </form>
          </div>
        </section>`

export function addMotorcycleView(){
    renderer(addTempl());
}

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
    await post(`http://localhost:3030/data/motorcycles`,{model,imageUrl,year,mileage,contact,about});
    goTo(`/dashboard`);
}