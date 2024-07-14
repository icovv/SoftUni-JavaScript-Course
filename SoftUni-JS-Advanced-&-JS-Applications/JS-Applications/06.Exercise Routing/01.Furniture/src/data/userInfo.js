let user = `userData`
export let getUserData = () => JSON.parse(localStorage.getItem(user))
export let setUserData = (data) => localStorage.setItem(user,JSON.stringify(data)) 
export let clearUserData = () => localStorage.removeItem(user);