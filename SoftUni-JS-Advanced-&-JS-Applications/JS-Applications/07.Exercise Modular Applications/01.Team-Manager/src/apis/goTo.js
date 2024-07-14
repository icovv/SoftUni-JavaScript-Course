import page from "../../node_modules/page/page.mjs";

export function goTo(location){
    page.redirect(location);
}