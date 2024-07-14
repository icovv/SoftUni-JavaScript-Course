import page from "../../node_modules/page/page.mjs";
import { updateNav } from "./data/updateNav.js";
import { addEvent } from "./views/addEventsView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { eventsView } from "./views/eventsView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registerView.js";

updateNav();

page(`/`,homeView);
page(`/home`,homeView);
page(`/register`,registerView);
page(`/login`,loginView);
page(`/logout`,logoutView);
page(`/events`,eventsView); 
page(`/details/:id`,detailsView); 
page(`/addEvent`,addEvent);
page(`/edit/:id`,editView);
page.start();

