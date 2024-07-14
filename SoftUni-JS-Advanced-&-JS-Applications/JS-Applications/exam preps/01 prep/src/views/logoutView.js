import { goTo } from "../data/goTo.js";
import { updateNav } from "../data/updateNav.js";
import { logout } from "../data/userService.js";
import { clearUserData } from "../data/users.js";

export async function logoutView(){
    await logout();
    clearUserData();
    updateNav();
    goTo(`/`)
}