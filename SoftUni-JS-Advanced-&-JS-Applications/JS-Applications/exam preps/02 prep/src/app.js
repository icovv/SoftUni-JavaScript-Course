import page from "../node_modules/page/page.mjs";
import { navBar } from "./data/navBar.js";
import { addMotorcycleView } from "./views/addMotorcycle.js";
import { dashboardView } from "./views/dashboardView.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/editView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registerView.js";
import { searchView } from "./views/searchView.js";

navBar();
page(`/`,homeView)
page(`/home`,homeView)
page(`/login`,loginView)
page(`/register`,registerView);
page(`/logout`,logoutView);
page(`/dashboard`,dashboardView)
page(`/details/:id`,detailsView)
page(`/edit/:id`,editView)
page(`/addMotorcycle`,addMotorcycleView)
page(`/search`,searchView)

page.start();