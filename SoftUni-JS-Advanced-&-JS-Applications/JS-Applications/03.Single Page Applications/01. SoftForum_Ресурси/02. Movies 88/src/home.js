import { detailsSection } from "./details.js";
let editMovieSection = document.getElementById(`edit-movie`);
let loginForm = document.getElementById(`form-login`);
let registrationForm = document.getElementById(`form-sign-up`)
let addMovie = document.getElementById(`add-movie`);
let movieDescr = document.getElementById(`movie-example`);
let homePage = document.querySelector("#home-page");


export async function showHome(e){
    editMovieSection.style.display = `none`
    loginForm.style.display = `none`
    registrationForm.style.display = `none`
    addMovie.style.display = `none`
    movieDescr.style.display = `none`
    homePage.style.display = `block`
    let url = "http://localhost:3030/data/movies" 
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let dataAsValue = Object.values(data);
    dataAsValue.forEach(el => createEl(el))
    let btns = Array.from(document.getElementsByClassName(`btn btn-info`))
    btns.forEach(btn => btn.addEventListener(`click`,detailsSection))
}

function createEl(data){
    let ulForMovies = document.getElementById(`movies-list`)
    ulForMovies.innerHTML += 
    `<li class="card mb-4" data-id=${data._id}>
    <img class="card-img-top" src="${data.img}" alt="Card image cap" width="400">
    <div class="card-body">
      <h4 class="card-title">${data.title}</h4>
      <a href="#">
      </a>
    </div>
    <div class="card-footer">
    <button type="button" class="btn btn-info">Details</button>
    </div>
  </li>`
    
}



{/* <ul id="movies-list" class="card-deck d-flex justify-content-center">
                <li class="card mb-4">
                  <img class="card-img-top" src="https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg" alt="Card image cap" width="400">
                  <div class="card-body">
                    <h4 class="card-title">Movie Title</h4>
                    <a href="#">
                    </a>
                  </div>
                  <div class="card-footer">
                  <button type="button" class="btn btn-info">Details</button>
                  </div>
                </li>
              </ul> */}