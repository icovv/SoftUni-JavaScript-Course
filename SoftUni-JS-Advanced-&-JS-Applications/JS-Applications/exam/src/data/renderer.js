import { render } from "../../node_modules/lit-html/lit-html.js";

let root = document.getElementById(`main-element`);

export function renderer(template){
    render(template,root);
}
