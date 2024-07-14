import { showHome } from "./home.js";
import { startFn } from "./app.js";

let editMovieSection = document.getElementById(`edit-movie`);
let loginForm = document.getElementById(`form-login`);
let registrationForm = document.getElementById(`form-sign-up`)
let addMovie = document.getElementById(`add-movie`);
let movieDescr = document.getElementById(`movie-example`);
let homePage = document.querySelector("#home-page");

export function showRegistration(){
    homePage.style.display = `none`;
    loginForm.style.display = `none`;
    addMovie.style.display = `none`;
    movieDescr.style.display = `none`;
    editMovieSection.style.display = `none`;
    registrationForm.style.display = `block`;
    document.getElementById(`register-form`).addEventListener(`submit`, register);


}
async function register(event){
    event.preventDefault()

    let registerForm = document.getElementById(`register-form`);
    let formData = new FormData(registerForm);
    let email = formData.get(`email`);
    let password = formData.get(`password`);
    let repass = formData.get(`repeatPassword`);
    let url = "http://localhost:3030/users/register"
    
    if (email == `` || password.length < 6 || password != repass){
        registerForm.reset();
        throw new Error(`Invalid information`)
    }
    try {
        let response = await fetch (url,{
            method: `Post`,
            headers: {"Content-Type":`application/json`},
            body: JSON.stringify({email,password})
        })
        if (!response.ok){
            let errMsg = await response.json();
            throw new Error(errMsg.message);
        }        
        let data = await response.json();
        let user = {
            email:data.email,
            password: data.password,
            token: data.accessToken,
            id: data._id
        }
        localStorage.setItem(`user`,JSON.stringify(user));
        startFn()        
    } catch (error) {
        alert(error.message);
        registerForm.reset()
    }
}