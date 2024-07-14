import { html } from "../../node_modules/lit-html/lit-html.js";
import { goTo } from "../data/goTo.js";
import { navBar } from "../data/navBar.js";
import { renderer } from "../data/renderer.js";
import { setUserData } from "../data/userData.js";
import { login } from "../data/userService.js";

let loginTempl = () => html`
               <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form @submit = ${onSubmit} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </section>`

export function loginView(){
    renderer(loginTempl());
}

async function onSubmit(e){
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get(`email`).trim();
    let password = formData.get(`password`).trim();

    if (email == `` || password == ``){
        document.getElementById(`errorBox`).style.display = `block`;
        return alert(`Please fill all fields!`);
    }

    let response = await login({email,password});
    if (response == undefined){
        return
    }
    setUserData(response);
    e.target.reset();
    navBar();
    goTo(`/`);
}