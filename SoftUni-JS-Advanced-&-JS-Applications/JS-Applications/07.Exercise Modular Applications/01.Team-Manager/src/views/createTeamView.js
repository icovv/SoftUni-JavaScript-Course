import { html } from "../../node_modules/lit-html/lit-html.js";
import { goTo } from "../apis/goTo.js";
import { renderer } from "../apis/libs.js";
import { approveMembership, getCertainMembers, postNewTeam, requestToBeAMember } from "../apis/teams.js";
import { getUserData } from "../apis/userData.js";


let createTeamTempl = (error) => html`
<section id="create">
                <article class="narrow">
                    <header class="pad-med">
                        <h1>New Team</h1>
                    </header>
                    <form @submit=${onSubmit} id="create-form" class="main-form pad-large">
                        ${error ? html`<div class="error">${error}</div>` : ``}
                        <label>Team name: <input type="text" name="name"></label>
                        <label>Logo URL: <input type="text" name="logoUrl"></label>
                        <label>Description: <textarea name="description"></textarea></label>
                        <input class="action cta" type="submit" value="Create Team">
                    </form>
                </article>
            </section>`

export function createTeamView(){
    renderer(createTeamTempl());
}
async function onSubmit(e){
    e.preventDefault();
    let formData = new FormData(e.target);
    let name = formData.get(`name`)
    let imageUrl = formData.get(`logoUrl`)
    let description = formData.get(`description`)

    if (name.length < 4){
        renderer(createTeamTempl(`Team name has to be longer!`));
        return;
    }
    if (!imageUrl){
        renderer(createTeamTempl(`You forgot your Logo URL!`));
        return;
    }
    if (description.length < 10){
        renderer(createTeamTempl(`Description should be longer!`));
        return;
    }

    let newTeamData = await postNewTeam({name,imageUrl,description});
    let teamId = newTeamData._id
    await requestToBeAMember({teamId});
    debugger;

    let userId = getUserData()._id;
    let teamMembers = await getCertainMembers(teamId);
    let teamOwner = teamMembers.filter(x => x.user._id === userId)[0];
    let teamMemberId = teamOwner._id;
    await approveMembership(teamMemberId);
    e.target.reset();
    goTo(`/details/${newTeamData._id}`);

}
