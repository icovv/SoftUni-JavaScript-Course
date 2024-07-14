import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../data/api.js";
let registerTemplate = () =>html`
<div class="row space-top">
<div class="col-md-12">
    <h1>Register New User</h1>
    <p>Please fill all fields.</p>
</div>
</div>
<form @submit=${onSubmit}>
<div class="row space-top">
    <div class="col-md-4">
        <div class="form-group">
            <label class="form-control-label" for="email">Email</label>
            <input class="form-control" id="email" type="text" name="email">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="password">Password</label>
            <input class="form-control" id="password" type="password" name="password">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="rePass">Repeat</label>
            <input class="form-control" id="rePass" type="password" name="rePass">
        </div>
        <input type="submit" class="btn btn-primary" value="Register" />
    </div>
</div>
</form>
`
let context = null;
export function showRegisterView(ctx){
    context = ctx;
    ctx.render(registerTemplate());

}

async function onSubmit(e){
    e.preventDefault();
    let form = e.target;

    let formData = new FormData(form);
    let email = formData.get(`email`).trim();
    let password = formData.get(`password`).trim();
    let rePass = formData.get(`rePass`).trim();

    if (email == `` || password == `` || rePass == `` || password != rePass){
        form.reset()
        return alert(`Please fill correct information`);
    }
    debugger
    await register({email,password});
    context.updateNav();
    context.goTo(`/`);
}