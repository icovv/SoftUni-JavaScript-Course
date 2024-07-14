import { startFn } from "./app.js";
let editMovieSection = document.getElementById(`edit-movie`);
let loginForm = document.getElementById(`form-login`);
let registrationForm = document.getElementById(`form-sign-up`)
let addMovie = document.getElementById(`add-movie`);
let movieDescr = document.getElementById(`movie-example`);
let homePage = document.querySelector("#home-page");

export function addMovies(){
    editMovieSection.style.display = `none`
    loginForm.style.display = `none`
    registrationForm.style.display = `none`
    homePage.style.display = `none`
    movieDescr.style.display = `none`
    addMovie.style.display = `block`

    document.querySelector("#add-movie-form").addEventListener(`submit`,submitFn);
}

async function submitFn(event){
    event.preventDefault()
    let form = event.target;
    let formData = new FormData(form);
    let title = formData.get(`title`);
    let description = formData.get(`description`);
    let img = formData.get(`img`);
    let url = "http://localhost:3030/data/movies"
    let localStorageInfo = JSON.parse(localStorage.getItem(`user`));
    if (title == `` || description == `` || img == ``){
        alert(`All fields should be filled`);
        form.reset();
    }
    try {
        let response = await fetch(url, {
            method: `Post`,
            headers: {"Content-Type": `application/json`,
            "X-Authorization":`${localStorageInfo.token}`},
            body:JSON.stringify({title,description,img,userId:localStorageInfo.id })
        });

        if (!response.ok){
            let er = await response.json()
            alert(er.message)
        }
        form.reset()
        startFn();
    } catch (error) {
        alert(error.message);
        form.reset()
    }
}