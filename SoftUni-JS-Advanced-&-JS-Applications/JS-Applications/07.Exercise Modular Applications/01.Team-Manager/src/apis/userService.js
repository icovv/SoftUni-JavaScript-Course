import { post,get } from "./requester.js";
export async function login(data){
    return await post("http://localhost:3030/users/login",data);
}
export async function register(data){
    return await post("http://localhost:3030/users/register", data);
}
export async function logout(data){
    return await get ("http://localhost:3030/users/logout");
}