let user = `userData`
export function getUserData(){
    return JSON.parse(localStorage.getItem(user));
}
export function setUserData(data){
    return localStorage.setItem(user,JSON.stringify(data));
}
export function clearUserData(){
    return localStorage.clear();
}