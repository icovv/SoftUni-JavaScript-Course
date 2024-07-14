import { html } from "../../node_modules/lit-html/lit-html.js";
import { renderer } from "../apis/libs.js";
import { navBarSetter } from "../apis/navBarSetter.js";
import { getUserData } from "../apis/userData.js";
import { isUserAMember,getAllMembers, getCertainTeam, getAllTeams } from "../apis/teams.js";

let myTeamsTempl = (data,members,isMember) => html`
            <section id="my-teams">

<article class="pad-med">
    <h1>My Teams</h1>
</article>

<article class="layout narrow">
   ${!data.length > 0 ? html` <div class="pad-med">
        <p>You are not a member of any team yet.</p>
        <p><a href="/browse-teams">Browse all teams</a> to join one, or use the button bellow to cerate your own
            team.</p>
        </div>` : ``}
    <div class=""><a href="/create" class="action cta">Create Team</a></div>
</article>

    ${data.map(x => allTeams(x,members))}

</section>
`

let allTeams = (team, members) => html `
<article class="layout">
    <img src="../..${team.logoUrl}" class="team-logo left-col">
    <div class="tm-preview">
        <h2>${team.name}</h2>
        <p>${team.description}</p>
        <span class="details">${members[`${team._id}`]} Members</span>
        <div><a href="/details/${team._id}" class="action">See details</a></div>
    </div>
</article>`

export async function myTeamsView(){
    debugger;
    let userData = getUserData();
    let teamInfo = [];
    let allTeams = await getAllTeams();
    let isUserMember = await isUserAMember(userData._id)
    isUserMember.forEach(x => teamInfo.push(x.teamId));
    let data = [];
    debugger;
    for (let id of teamInfo){
        for (let team of allTeams){
            if (id == team._id){
                data.push(team);
            }
        }
        }
    let allMembers = await getAllMembers();
    let sortedMembers = sortMembers(allMembers);
    renderer(myTeamsTempl(data,sortedMembers,isUserMember));
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