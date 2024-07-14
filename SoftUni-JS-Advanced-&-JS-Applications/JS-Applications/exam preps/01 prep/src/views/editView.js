import { html } from "../../node_modules/lit-html/lit-html.js";
import { goTo } from "../data/goTo.js";
import { renderer } from "../data/libs.js";
import { changeEvent, getCertainEvent } from "../data/taskData.js";

let editTempl = (onSubmit) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
          <div class="form">
            <h2>Edit Event</h2>
            <form @submit = ${onSubmit} class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Event"
              />
              <input
                type="text"
                name="imageUrl"
                id="event-image"
                placeholder="Event Image"
              />
              <input
                type="text"
                name="category"
                id="event-category"
                placeholder="Category"
              />


              <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              ></textarea>
              
              <label for="date-and-time">Event Time:</label>
              <input
              type="text"
              name="date"
              id="date"
              placeholder="When?"
            />

              <button type="submit">Edit</button>
            </form>
          </div>
        </section>`

export async function editView(ctx){
    let id = ctx.params.id
    let eventInfo = await getCertainEvent(id);
    renderer(editTempl(onSubmit));
    let name1 = document.getElementById(`name`);
    name1.value = eventInfo.name;
    let imageUrl1 = document.getElementById(`event-image`);
    imageUrl1.value = eventInfo.imageUrl;
    let category1 = document.getElementById(`event-category`);
    category1.value = eventInfo.category;
    let description1 = document.getElementById(`event-description`);
    description1.value = eventInfo.description;
    let date1 = document.getElementById(`date`);
    date1.value = eventInfo.date
    
    async function onSubmit(e){
        e.preventDefault();
        if (name1.value.trim() == `` || imageUrl1.value.trim() == `` || category1.value.trim() == `` || description1.value.trim() == `` || date1.value.trim() == `` ){
            return window.alert(`Please fill all fields`);
        }
        let name = name1.value;
        let imageUrl = imageUrl1.value
        let category = category1.value;
        let description = description1.value;
        let date = date1.value;
        let response = await changeEvent(id,{name,imageUrl,category,description,date});
        debugger;
        goTo(`/details/${response._id}`);
    }
}