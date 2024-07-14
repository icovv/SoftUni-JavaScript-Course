import { deleteFurniture } from "../data/api.js";
export async function deleteItem(ctx){
    let itemId = ctx.params.id
    let result = confirm(`delete`)
    if (result == true) {
    await deleteFurniture(itemId);
    ctx.goTo("/dashboad");
    }
}