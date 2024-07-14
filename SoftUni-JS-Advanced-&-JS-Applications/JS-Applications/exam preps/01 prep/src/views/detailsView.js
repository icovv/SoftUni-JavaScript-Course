import { html } from "../../node_modules/lit-html/lit-html.js";
import { goTo } from "../data/goTo.js";
import { renderer } from "../data/libs.js";
import { deleteEvent, getCertainEvent, isUserGoing, totalUsersGoing, userGoinToAnEvent } from "../data/taskData.js";
import { getUserData } from "../data/users.js";

let detailsTempl = (eventInfo,isUser,isOwner,onClickDel,goingToEvent,going,goingUser) => html`
        <!-- Details page -->
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${eventInfo.imageUrl} alt="example1" />
            <p id="details-title">${eventInfo.name}</p>
            <p id="details-category">
              Category: <span id="categories">${eventInfo.category}</span>
            </p>
            <p id="details-date">
              Date: <span id="date">${eventInfo.date}</span></p>
            <div id="info-wrapper">
              <div id="details-description">
                <span>${eventInfo.description}</span>
              </div>

            </div>

            <h3>Going: <span id="go">${going}</span> times.</h3>

            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
              ${isOwner ? html`<a href="/edit/${eventInfo._id}" id="edit-btn">Edit</a>
              <a @click = ${onClickDel} href="javascript:void(0)" id="delete-btn">Delete</a>` : isUser ? goingUser ? html`<a @click = ${goingToEvent}href="" id="go-btn">Going</a>` : `` : ``}
            </div>
          </div>
        </section>`

export async function detailsView(ctx){
    debugger;

    let id = ctx.params.id;
    let eventInfo = await getCertainEvent(id);
    let user = getUserData();
    let isUser = !!user;
    let isOwner = isUser && user._id == eventInfo._ownerId
    let goingPeople = await totalUsersGoing(id);
    let isUserGoingToThisEvent = await isUserGoing(id,user._id);
    let goingUser = isUserGoingToThisEvent == 1 ? false:true;

    renderer(detailsTempl(eventInfo,isUser,isOwner,onClickDel, goingToEvent,goingPeople,goingUser))
    
    async function goingToEvent(){
        await userGoinToAnEvent(id);
        goTo(`/details/${id}`);
    }

    async function onClickDel(){
        let dialog = confirm(`Are you sure you want to delete your event?`);
        if (dialog){
        await deleteEvent(id);
        goTo(`/events`);
        }
    }

}

