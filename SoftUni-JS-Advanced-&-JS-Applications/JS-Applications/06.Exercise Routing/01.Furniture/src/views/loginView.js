import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../data/api.js";

let loginTemplate = () => html `
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit = ${onSubmit}>
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
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>`
let context = null
export function onLoginView(ctx){
    context = ctx;
    ctx.render(loginTemplate());

} 
async function onSubmit(e){
    e.preventDefault();
    let form = e.target;

    let formData = new FormData(form);
    let email = formData.get(`email`).trim();
    let password = formData.get(`password`).trim();

    if (email == `` || password == ``){
        form.reset()
        return alert(`Please fill correct information`);
    }
    await login({email,password});
    context.updateNav();
    context.goTo(`/`)

}