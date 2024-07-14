import { html } from "../../node_modules/lit-html/lit-html.js";
import { goTo } from "../data/goTo.js";
import { navBar } from "../data/navBar.js";
import { renderer } from "../data/renderer.js";
import { setUserData } from "../data/userData.js";
import { login, register } from "../data/userService.js";

let registerTempl = () => html`
                <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form @submit = ${onSubmit} class="register-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>`

export function registerView(){
    renderer(registerTempl());
}

async function onSubmit(e){
    e.preventDefault();
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get(`email`).trim();
    let password = formData.get(`password`).trim();
    let repass = formData.get(`re-password`).trim();

    if (email == `` || password == `` || repass == `` || password != repass){
      document.getElementById(`errorBox`).style.display = `block`;
      return alert("Passwords don't match");
    }

    let response = await register({email,password});
    if (response == undefined){
        return
    }

    setUserData(response);
    e.target.reset();
    navBar();
    goTo(`/`);
}