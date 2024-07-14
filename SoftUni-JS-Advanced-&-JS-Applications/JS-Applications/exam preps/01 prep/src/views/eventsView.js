import { html } from "../../node_modules/lit-html/lit-html.js";
import { renderer } from "../data/libs.js";
import { getEvents } from "../data/taskData.js";

let eventsTempl = (events) => html`
<h2>Current Events</h2>
        <section id="dashboard">
          ${!events.length ? html `<h4>No Events yet.</h4>` : events.map(x => event(x))}
        </section>
        `

let event = (item) => html`
          <div class="event">
            <img src="${item.imageUrl}" alt="example1" />
            <p class="title">
              ${item.name}
            </p>
            <p class="date">${item.date}</p>
            <a class="details-btn" href="/details/${item._id}">Details</a>
          </div>`

export async function eventsView(){
    let events = await getEvents();
    renderer(eventsTempl(events));
}