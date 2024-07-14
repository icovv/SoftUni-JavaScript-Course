import { get, post, put } from "./requester.js";

export async function getAllTeams(){
    return await get("http://localhost:3030/data/teams");
}
export async function getCertainTeam(id){
    return await get(`http://localhost:3030/data/teams/${id}`)
}
export async function getAllMembers(){
    return await get(`http://localhost:3030/data/members?where=status%3D%22member%22`);
}
export async function getCertainMembers(teamId){
    return await get(`http://localhost:3030/data/members?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers`);
}

export async function isUserAMember(userId){
    return await get(`http://localhost:3030/data/members?where=_ownerId%3D%22${userId}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams`)
}
export async function postNewTeam(data){
    return await post(`http://localhost:3030/data/teams`,data);
}
export async function requestToBeAMember(teamId){
    return await post(`http://localhost:3030/data/members`,teamId);
}
export async function approveMembership(id){
    return await put(`http://localhost:3030/data/members/${id}`,{"status": "member"});
}