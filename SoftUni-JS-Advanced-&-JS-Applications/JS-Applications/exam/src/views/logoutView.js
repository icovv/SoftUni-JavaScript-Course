import { goTo } from "../data/goTo.js";
import { navBar } from "../data/navBar.js";
import { deleteUserData, getUserData } from "../data/userData.js";
import { logout } from "../data/userService.js";

export async function logoutView(){
    let uset = getUserData()
    if (uset){
        await logout();
        deleteUserData();
        navBar();
        goTo(`/`);
    } else{
        return alert(`You are not logged in!`)
    }

}