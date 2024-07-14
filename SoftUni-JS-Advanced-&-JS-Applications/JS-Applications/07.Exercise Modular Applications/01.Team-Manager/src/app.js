import page from "../node_modules/page/page.mjs";
import { browseTeamsView } from "./views/browseTeamsView.js";
import { showHomeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registerView.js";
import { teamDetailsView } from "./views/teamDetailsView.js";
import { myTeamsView } from "./views/myTeams.js";
import { createTeamView } from "./views/createTeamView.js";
page(`/`,showHomeView)
page(`/home`,showHomeView)
page(`/browse-teams`, browseTeamsView);
page(`/login`,loginView)
page(`/register`,registerView)
page(`/my-teams`,myTeamsView)
page(`/logout`,logoutView)
page(`/create`,createTeamView)
page(`/details/:id`,teamDetailsView);

page();