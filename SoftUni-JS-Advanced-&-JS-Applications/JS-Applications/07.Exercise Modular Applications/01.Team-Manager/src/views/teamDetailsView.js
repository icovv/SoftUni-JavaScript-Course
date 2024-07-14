import { html } from "../../node_modules/lit-html/lit-html.js";
import { renderer } from "../apis/libs.js";
import { getAllMembers, getCertainTeam, getCertainMembers } from "../apis/teams.js";
import { getUserData, ifOwner } from "../apis/userData.js";

let detailsTemplate = (item,isOwner,user,pending,members,teamMembersCount) => html`
            <section id="team-home">
                <article class="layout">
                    <img src="../..${item.logoUrl}" class="team-logo left-col">
                    <div class="tm-preview">
                        <h2>${item.name}</h2>
                        <p>${item.description}</p>
                        <span class="details">${teamMembersCount} Members</span>
                        ${user ? editJoinLeavBtns(isOwner): ``}
                    </div>
                    ${teamMembers(user)}
                    ${user ? membershipRequests() : ``}
                </article>
            </section>`

let editJoinLeavBtns = (isOwner) => html`
                        <div>
                            <a href="#" class="action">Edit team</a>
                            <a href="#" class="action">Join team</a>
                            <a href="#" class="action invert">Leave team</a>
                            Membership pending. <a href="#">Cancel request</a>
                        </div>`

let teamMembers = (user) => html`
                    <div class="pad-large">
                        <h3>Members</h3>
                        <ul class="tm-members">
                            <li>My Username</li>
                            <li>James${user ? html`<a href="#" class="tm-control action">Remove from team</a>` : ``}</li>
                            <li>Meowth<a href="#" class="tm-control action">Remove from team</a></li>
                        </ul>
                    </div>      `
let membershipRequests = () => html`
                    <div class="pad-large">
                        <h3>Membership Requests</h3>
                        <ul class="tm-members">
                            <li>John<a href="#" class="tm-control action">Approve</a><a href="#"
                                    class="tm-control action">Decline</a></li>
                            <li>Preya<a href="#" class="tm-control action">Approve</a><a href="#"
                                    class="tm-control action">Decline</a></li>
                        </ul>
                    </div>`

export async function teamDetailsView(ctx){

    let teamId = ctx.params.id;
    let teamInfo = await getCertainTeam(teamId);
    debugger;
    let isOwner = ifOwner(teamInfo._ownerId);
    let guestOrLoggedIn = getUserData();
    let allMembers = await getCertainMembers(teamId);
    let pending = allMembers.filter(x => x.status == `pending`)
    let members = allMembers.filter(x => x.status == `member`)
    let teamMembersCount =members.length;
    renderer(detailsTemplate(teamInfo,isOwner,guestOrLoggedIn,pending,members,teamMembersCount));
}