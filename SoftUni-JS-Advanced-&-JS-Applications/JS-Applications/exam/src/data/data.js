import { del, get, post, put } from "./requester.js";
let host = `http://localhost:3030`;

export async function dashboardItems(){
    return await get(host + `/data/cyberpunk?sortBy=_createdOn%20desc`);
}
export async function addItem(data){
    return await post(host + `/data/cyberpunk`,data);
}
export async function getItem(id){
    return await get(host + `/data/cyberpunk/${id}`);
}
export async function deleteItem(id){
    return await del(host + `/data/cyberpunk/${id}`)
}
export async function changeItem(id,data){
    return await put(host + `/data/cyberpunk/${id}`,data);
}
