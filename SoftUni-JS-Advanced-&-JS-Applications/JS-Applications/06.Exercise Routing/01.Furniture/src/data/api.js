import { clearUserData, getUserData, setUserData } from "./userInfo.js"

export async function get(url){
    try {
        let response = await fetch(url);
        if(!response.ok){
            let err = await response.json();
            return alert(err.message);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        return alert(error.message)
    }
}

export async function register(data){
    let url = "http://localhost:3030/users/register";
    try {
        let response = await fetch(url,{
            method: `Post`,
            headers: {"Content-Type":`application/json`},
            body: JSON.stringify(data)
        })
        if(!response.ok){
            let err = await response.json();
            return alert(err.message);
        }
        let dataFromResponse = await response.json();
        setUserData(dataFromResponse);
        return;
    } catch (error) {
        return alert(error.message);
    }
}
export async function login(data){
    let url = "http://localhost:3030/users/login";
    try {
        let response = await fetch(url,{
            method: `Post`,
            headers: {"Content-Type":`application/json`},
            body: JSON.stringify(data)
        })
        if(!response.ok){
            let err = await response.json();
            return alert(err.message);
        }
        let dataFromResponse = await response.json();
        setUserData(dataFromResponse);
        return;
    } catch (error) {
        return alert(error.message);
    }
}
export async function logout(){
    let url = "http://localhost:3030/users/logout";
    let userData = getUserData();
    try {
        let response = await fetch(url,{
            method: `Get`,
            headers: {"Content-Type":`application/json`,
            "X-Authorization":`${userData.accessToken}`}
        });
        clearUserData();
        return;
    } catch (error) {
        return alert(error.message)
    }
}
export async function getFurniture(id){
    let url = `http://localhost:3030/data/catalog/${id}`
    //53d4dbf5-7f41-47ba-b485-43eccb91cb95
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
        return alert(error.message);
    }
}
export async function createFurniture(data){
    let url = "http://localhost:3030/data/catalog"
    let userData = getUserData();
    try {
        let response = await fetch(url,{
            method: `Post`,
            headers: {"Content-Type":`application/json`,
            "X-Authorization":`${userData.accessToken}`},
            body: JSON.stringify(data)
        })
        return;
    } catch (error) {
        return alert(error.message)
    }
}

export async function getMyFurniture(userId){
    let url = `http://localhost:3030/data/catalog?where=_ownerId%3D%22${userId}%22`
    let userData = getUserData();
    try {
        let response = await fetch(url,{
            method: `Get`,
            headers: {"Content-Type":`application/json`,
            "X-Authorization":`${userData.accessToken}`}
        });
        let data = await response.json();
        return data;
    } catch (error) {
        return alert(error.message)
    }
}
export async function deleteFurniture(id){
    let url = `http://localhost:3030/data/catalog/${id}`;
    let userData = getUserData();
    try {
        let response = await fetch (url,{
            method: `Delete`,
            headers: {"Content-Type": `application/json`,
            "X-Authorization":`${userData.accessToken}`}
        })
        return;
    } catch (error) {
        return alert(error.message)
    }
}
export async function updateFurniture(id,data){
    let url = `http://localhost:3030/data/catalog/${id}`
    let userData = getUserData();
    try {
        let response = await fetch (url,{
            method: `Put`,
            headers: {"Content-Type": `application/json`,
            "X-Authorization":`${userData.accessToken}`},
            body: JSON.stringify(data)
        })
        return;
    } catch (error) {
        return alert(error.message)
    }
}