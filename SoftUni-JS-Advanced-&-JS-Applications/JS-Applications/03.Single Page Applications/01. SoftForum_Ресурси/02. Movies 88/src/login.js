import { startFn } from "./app.js";
let editMovieSection = document.getElementById(`edit-movie`);
let loginForm = document.getElementById(`form-login`);
let registrationForm = document.getElementById(`form-sign-up`)
let addMovie = document.getElementById(`add-movie`);
let movieDescr = document.getElementById(`movie-example`);
let homePage = document.querySelector("#home-page");

export function showLogin(){
        homePage.style.display = `none`;
        registrationForm.style.display = `none`;
        addMovie.style.display = `none`;
        movieDescr.style.display = `none`;
        editMovieSection.style.display = `none`;
        loginForm.style.display = `block`;

        let form = document.getElementById(`login-form`)
        form.addEventListener(`submit`,login);
}
async function login(event){
    event.preventDefault();
    let formData = new FormData(document.getElementById(`login-form`));
    let email = formData.get(`email`);
    let password = formData.get(`password`);
    let url = "http://localhost:3030/users/login"
    try {
        let response = await fetch(url,{
            method: `Post`,
            headers: {"Content-Type":"application/json",},
            body: JSON.stringify({email,password})
        })
        if(!response.ok){
            let err = await response.json();
            throw new Error(err.message);
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
        document.getElementById(`login-form`).reset();
        alert(error.message)
    }
}