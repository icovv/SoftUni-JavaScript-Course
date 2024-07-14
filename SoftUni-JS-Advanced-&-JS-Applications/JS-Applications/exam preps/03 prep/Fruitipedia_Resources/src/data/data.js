import { del, get, post, put } from "./requester.js";

export async function getFruit(){
    return await get(`http://localhost:3030/data/fruits?sortBy=_createdOn%20desc`);
}
export async function addFruits(data){
    return await post(`http://localhost:3030/data/fruits`, data)
}
export async function fruitDetails(id){
    return await get(`http://localhost:3030/data/fruits/${id}`)
}
export async function deleteFruit(id){
    return await del(`http://localhost:3030/data/fruits/${id}`)
}

export async function editFruits(id,data){
    return await put(`http://localhost:3030/data/fruits/${id}`, data)
}

export async function searchFruit(query){
    return await get(`http://localhost:3030/data/fruits?where=name%20LIKE%20%22${query}%22`)
}