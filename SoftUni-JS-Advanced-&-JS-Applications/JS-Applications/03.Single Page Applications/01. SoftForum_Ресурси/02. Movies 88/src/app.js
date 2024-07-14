import { showHome } from "./home.js";
import { showLogin } from "./login.js"; 
import { showRegistration } from "./register.js";
import { addMovies } from "./addmovies.js";

let loginBtn = document.querySelector("#container > nav > ul > li:nth-child(3) > a");
let registerBtn = document.querySelector("#container > nav > ul > li:nth-child(4) > a")
let logoutBtn = document.querySelector("#container > nav > ul > li:nth-child(2) > a")
let welcomeMsg = document.querySelector("#welcome-msg")
let addBtn = document.querySelector("#add-movie-button > a");
export function startFn(){
document.querySelector("#movies-list").innerHTML = ``;

showHome()
document.querySelector("#container > nav > a").addEventListener(`click`,showHome);
loginBtn.addEventListener(`click`,showLogin)
registerBtn.addEventListener(`click`, showRegistration);
logoutBtn.addEventListener(`click`,logoutFn);
addBtn.addEventListener(`click`,addMovies)

let userData = JSON.parse(localStorage.getItem(`user`));

if (localStorage.length != 0){
    console.log(userData)
    loginBtn.style.display = `none`;
    registerBtn.style.display = `none`;
    welcomeMsg.textContent = `Welcome, ${userData.email}`
    logoutBtn.style.display = `block`;
    welcomeMsg.style.display = `block`;
    addBtn.style.display = `block`
} else{
    loginBtn.style.display = `block`;
    registerBtn.style.display = `block`;
    welcomeMsg.style.display = `none`;
    logoutBtn.style.display = `none`;
    addBtn.style.display = `none`
}
}
startFn();

async function logoutFn(){
    let url = "http://localhost:3030/users/logout";
    let userInfo = JSON.parse(localStorage.getItem(`user`));
    try {
        let response = await fetch(url,{
            method: `Get`,
            headers: {"Content-Type":"application/json",
            "X-Authorization":`${userInfo.token}`}
            })
        localStorage.clear();
        startFn();
    } catch (error) {
        alert(error.message);
        startFn();
    }

}