import { html } from "../../node_modules/lit-html/lit-html.js";
import { renderer } from "../apis/libs.js";
import { setUserData } from "../apis/userData.js";
import { register } from "../apis/userService.js";
import { goTo } from "../apis/goTo.js";
import { navBarSetter } from "../apis/navBarSetter.js";

let registerTemplate = (err) => html `
            <section id="register">
                <article class="narrow">
                    <header class="pad-med">
                        <h1>Register</h1>
                    </header>
                    <form @submit = ${onSubmit} id="register-form" class="main-form pad-large">
                        ${err ? html`<div class="error">${err}</div>` : ""}
                        <label>E-mail: <input type="text" name="email"></label>
                        <label>Username: <input type="text" name="username"></label>
                        <label>Password: <input type="password" name="password"></label>
                        <label>Repeat: <input type="password" name="repass"></label>
                        <input class="action cta" type="submit" value="Create Account">
                    </form>
                    <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
                    </footer>
                </article>
            </section>`

export function registerView(){
    renderer(registerTemplate());
}

async function onSubmit(e){
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let email = formData.get(`email`)
    let username = formData.get(`username`)
    let password = formData.get(`password`)
    let repass = formData.get(`repass`);
    
    let pattern = /(?<=\s|^)([A-Za-z0-9]+[A-Za-z0-9.\-_]*)@([a-z]+\-?[a-z]+)(\.[a-z]+)+/g

    if(!pattern.test(email)){
        return renderer(registerTemplate(`Please check your email!`));
    }
    if(username.length < 3){
        return renderer(registerTemplate(`You messed up your username`));
    }
    if(password.length < 3 || password != repass){
        return renderer(registerTemplate(`You messed up your password`));
    }
    let userData = await register({username,email,password});
    debugger;
    if (userData == undefined ){
        return;
    };
    setUserData(userData);
    form.reset();
    navBarSetter();
    goTo(`/my-teams`)
}