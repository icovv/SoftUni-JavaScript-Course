import { getUserData } from "./userData.js";

let userBar = document.querySelector(`div.user`);
let guestBar = document.querySelector(`div.guest`);
export function navBar(){
    let user = getUserData();

    if (user){
        userBar.style.display = `block`
        guestBar.style.display = `none`
    } else {
        userBar.style.display = `none`
        guestBar.style.display = `block`
    }
}