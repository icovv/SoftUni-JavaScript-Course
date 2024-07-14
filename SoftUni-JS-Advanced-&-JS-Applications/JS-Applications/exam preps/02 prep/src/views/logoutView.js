import { navBar } from "../data/navBar.js";
import { deleteUserData } from "../data/userData.js";
import { logout } from "../data/userService.js";

export async function logoutView(){
    logout()
    deleteUserData();
    navBar();
}