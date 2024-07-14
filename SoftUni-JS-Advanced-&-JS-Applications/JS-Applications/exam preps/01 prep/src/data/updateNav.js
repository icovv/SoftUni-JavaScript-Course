import { getUserData } from "./users.js";
let guestNav = document.querySelector(`div.guest`);
let userNav = document.querySelector(`div.user`)
// TODO
export function updateNav(){
    let user = getUserData();
    if (user){
        guestNav.style.display = `none`;
        userNav.style.display = `block`;
    } else{
        guestNav.style.display = `block`;
        userNav.style.display = `none`;
    }
}