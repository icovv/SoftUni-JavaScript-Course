import { html } from "../../node_modules/lit-html/lit-html.js";
import { renderer } from "../apis/libs.js";
import { navBarSetter } from "../apis/navBarSetter.js";
import { getAllMembers, getAllTeams } from "../apis/teams.js";
import { getUserData } from "../apis/userData.js";

let browseTeamTemplate = (user,data, members) => html `
            <section id="browse">

<article class="pad-med">
    <h1>Team Browser</h1>
</article>

${user ? html`<article class="layout narrow">
    <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
</article>` : ``}

${data.map(item => teams(item, members))}

</section>`

let teams = (item, member) => html`<article class="layout">
<img src="../..${item.logoUrl}" class="team-logo left-col">
<div class="tm-preview">
    <h2>${item.name}</h2>
    <p>${item.description}</p>
    <span class="details">${member[`${item._id}`]} Members</span>
    <div><a href="/details/${item._id}" class="action">See details</a></div>
</div>
</article>`

export async function browseTeamsView(){
    navBarSetter();
    let user = getUserData();
    let allTeams = await getAllTeams();
    let members = await getAllMembers();
    let sortedMembers = sortMembers(members);
    renderer(browseTeamTemplate(user,allTeams, sortedMembers));
}

function sortMembers(members){
    let teams = {};
    for (let member of members){
        if (teams.hasOwnProperty(member.teamId) && member.status == `member`){
            teams[member.teamId] += 1
        }else if(!teams.hasOwnProperty(member.teamId) && member.status == `member`) {
        teams[member.teamId] = 1;
        }
    }

    return teams;
}