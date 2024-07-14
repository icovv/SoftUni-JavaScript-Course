import { html } from "../../node_modules/lit-html/lit-html.js";
import { renderer } from "../apis/libs.js";
import { setUserData } from "../apis/userData.js";
import { login } from "../apis/userService.js";
import { goTo } from "../apis/goTo.js";
import { navBarSetter } from "../apis/navBarSetter.js";

let loginTemplate = (err) => html `
            <section id="login">
                <article class="narrow">
                    <header class="pad-med">
                        <h1>Login</h1>
                    </header>
                    <form @submit = ${onSubmit}id="login-form" class="main-form pad-large">
                        ${err ? html`<div class="error">${err}</div>`: ``}
                        <label>E-mail: <input type="text" name="email"></label>
                        <label>Password: <input type="password" name="password"></label>
                        <input class="action cta" type="submit" value="Sign In">
                    </form>
                    <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
                    </footer>
                </article>
            </section>`


export function loginView(){
    renderer(loginTemplate());
}

async function onSubmit(e){
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let email = formData.get(`email`)
    let password = formData.get(`password`)

    let pattern = /(?<=\s|^)([A-Za-z0-9]+[A-Za-z0-9.\-_]*)@([a-z]+\-?[a-z]+)(\.[a-z]+)+/g

    if(!pattern.test(email)){
        return renderer(loginTemplate(`Please check your email!`));
    }
    if(password.length < 3){
        return renderer(loginTemplate(`You messed up your password`));
    }

    let userData = await login({email,password});
    if (userData == undefined){
        form.reset()
        return;
    }
    setUserData(userData);
    form.reset();
    navBarSetter();
    goTo(`/my-teams`)
}

