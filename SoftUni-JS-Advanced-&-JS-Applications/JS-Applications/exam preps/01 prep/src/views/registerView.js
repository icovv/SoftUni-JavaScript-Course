import { html } from "../../node_modules/lit-html/lit-html.js";
import { goTo } from "../data/goTo.js";
import { renderer } from "../data/libs.js";
import { updateNav } from "../data/updateNav.js";
import { register } from "../data/userService.js";
import { setUserData } from "../data/users.js";

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
    let formData = new FormData(e.target);
    let email = formData.get(`email`).trim()
    let password = formData.get(`password`).trim();
    let rePassword = formData.get(`re-password`).trim();

    if (email == `` || password == `` || rePassword == ``){
        return window.alert(`Please fill in all fields!`)
    }
    if(password != rePassword){
        return window.alert(`Your passwords do not match!`)
    }

    let response = await register({email,password});
    if (response == undefined){
        return;
    }
    setUserData(response);
    updateNav();
    goTo(`/`)
}