import { render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs"
import { dashboardView } from "./views/dashboadView.js";
import { showRegisterView } from "./views/registerView.js";
import { getUserData } from "./data/userInfo.js";
import { onLoginView } from "./views/loginView.js";
import { logout } from "./data/api.js";
import { showDetailsView } from "./views/detailsView.js";
import { createView } from "./views/createView.js";
import { myFurnitureView } from "./views/myFurniture.js";
import { deleteItem } from "./views/deleteView.js";
import { edittor } from "./views/editView.js";


let root = document.querySelector(`div[data-id="root"]`)
let userNav = document.getElementById(`user`)
let guestNav = document.getElementById(`guest`)
updateNav();
page(updateCtx);
page("/",dashboardView);
page("/dashboad",dashboardView);
page("/create",createView);
page("/details/:id",showDetailsView);
page("/edit/:id",edittor);
page("/delete/:id",deleteItem);
page("/myFurniture",myFurnitureView);
page("/login",onLoginView);
page("/register",showRegisterView);
page("/logout",logoutFN);
page.start();

function renderer(temp){
    render(temp,root);
}

function updateCtx(ctx,next){
    ctx.render = renderer;
    ctx.updateNav = updateNav;
    ctx.goTo = goTo;
    next();
}
function updateNav(){
    let userData = getUserData();
    if(userData){
        userNav.style.display = `inline-block`
        guestNav.style.display = `none`
    } else {
        userNav.style.display = `none`
        guestNav.style.display = `inline-block`
    }
}

function goTo(path){
    page.redirect(path);
}

async function logoutFN(ctx){
    await logout();
    ctx.updateNav();
    ctx.goTo(`/`);
}