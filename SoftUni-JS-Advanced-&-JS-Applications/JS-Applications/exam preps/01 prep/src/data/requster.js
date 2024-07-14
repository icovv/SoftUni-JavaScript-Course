import { clearUserData, getUserData } from "./users.js";

async function requester(method,url,data){
    let options = {
        method,
        headers:{}
    }
    if (data){
        options.headers["Content-Type"]= `application/json`;
        options.body = JSON.stringify(data);
    }
    let user = getUserData();
    if (user){
        options.headers["X-Authorization"] = user.accessToken;
    }

    try {
        let response = await fetch(url,options);
        if(!response.ok){
            if (response.status == 403){
                clearUserData()
            }
            // TODO check the type of error 
            let err = await response.json();
            return alert(err.message);
        }
        if (response.status == 204){
            return response
        } else {
            return response.json();
        }

    } catch (error) {
        //TODO check the type of error
        alert(error.message);
        return;
    }
}

export async function get(url){
    return await requester(`GET`,url)
}
export async function post(url,data){
    return await requester(`POST`,url,data);
}
export async function put(url,data){
    return await requester(`PUT`,url,data);
}
export async function del(url){
    return await requester(`DELETE`,url)
}