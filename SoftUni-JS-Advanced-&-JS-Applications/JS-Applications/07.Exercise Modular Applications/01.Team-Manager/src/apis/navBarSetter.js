import { getUserData } from "./userData.js";
let browseTeams = document.querySelectorAll(`a.action`)[0]
let login = document.querySelectorAll(`a.action`)[1]
let register = document.querySelectorAll(`a.action`)[2]
let myTeams = document.querySelectorAll(`a.action`)[3]
let logout = document.querySelectorAll(`a.action`)[4]
export function navBarSetter(){
    let userData = getUserData();
    if (userData){
        browseTeams.style.display = `block`;
        login.style.display = `none`;
        register.style.display = `none`;
        myTeams.style.display = `block`
        logout.style.display = `block`
    } else {
        browseTeams.style.display = `block`;
        login.style.display = `block`;
        register.style.display = `block`;
        myTeams.style.display = `none`
        logout.style.display = `none`
    }

}