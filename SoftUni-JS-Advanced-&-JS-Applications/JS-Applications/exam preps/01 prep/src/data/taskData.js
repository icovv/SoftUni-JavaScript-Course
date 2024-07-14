import{del, get, post, put} from "../data/requster.js"
export async function getEvents(){
    return await get(`http://localhost:3030/data/events?sortBy=_createdOn%20desc`);
}
export async function createEvent(data){
    return await post(`http://localhost:3030/data/events`,data);
}
export async function getCertainEvent(id){
    return await get(`http://localhost:3030/data/events/${id}`);
}
export async function deleteEvent(id){
    return await del(`http://localhost:3030/data/events/${id}`)
}
export async function changeEvent(id,data){
    return await put(`http://localhost:3030/data/events/${id}`,data)
}
export async function userGoinToAnEvent(eventId){
    return await post(`http://localhost:3030/data/going`,{eventId});
}
export async function totalUsersGoing(eventId){
    return await get(`http://localhost:3030/data/going?where=eventId%3D%22${eventId}%22&distinct=_ownerId&count`)
}
export async function isUserGoing(eventId,userId){
    return await get(`http://localhost:3030/data/going?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}