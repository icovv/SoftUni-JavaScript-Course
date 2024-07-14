import { getUserData } from "./userData.js";
async function requester(method,url,data){
    let options ={
        method,
        headers : {},
    }

    if (data){
        options.headers["Content-Type"] = `application/json`
        options.body = JSON.stringify(data);
    }

    let user = getUserData();

    if (user){
        options.headers["X-Authorization"] = user.accessToken
    }

    try {
        let response = await fetch(url,options);
        if (!response.ok){
            let err = await response.json();
            return alert(err.message)
        }
        if (response.status == 204){
            return response
        }
        return await response.json()
    } catch (error) {
        return alert(error.message)
    }
}

export async function get(url){
    return await requester(`GET`,url);
}
export async function post(url,data){
    return await requester(`Post`,url,data);
}
export async function put (url,data){
    return await requester(`Put`,url,data);
}
export async function del(url){
    return await requester(`Delete`,url);
}