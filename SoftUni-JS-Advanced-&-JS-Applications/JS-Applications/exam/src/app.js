import page from "../node_modules/page/page.mjs";
import { navBar } from "./data/navBar.js";
import { dashboardView } from "./views/dashboardView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registerVIew.js";
import { sellView } from "./views/sellView.js";

navBar();
page(`/`,homeView)
page(`/home`,homeView)
page(`/dashboard`,dashboardView)
page(`/details/:id`,detailsView)
page(`/edit/:id`,editView)
page(`/sell`,sellView);
page(`/login`,loginView)
page(`/register`,registerView)
page(`/logout`,logoutView)

page.start();