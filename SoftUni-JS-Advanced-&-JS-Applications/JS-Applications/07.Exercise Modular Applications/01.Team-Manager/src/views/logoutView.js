import { goTo } from "../apis/goTo.js";
import { clearUserData, getUserData } from "../apis/userData.js";
import { logout } from "../apis/userService.js";

export async function logoutView(){
    let userData = getUserData();
    await logout();
    clearUserData()
    goTo(`/`)
}