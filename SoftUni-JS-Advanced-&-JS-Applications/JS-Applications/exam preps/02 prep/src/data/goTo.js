import page from "../../node_modules/page/page.mjs";

export function goTo(place){
    page.redirect(place);
}