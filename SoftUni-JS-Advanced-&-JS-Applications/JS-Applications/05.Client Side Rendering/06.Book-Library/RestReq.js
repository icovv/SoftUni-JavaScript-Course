let url = "http://localhost:3030/jsonstore/collections/books"
export async function GetReq(){
    try {
        let response = await fetch (url);
        let data = await response.json();
        return data;
    } catch (error) {
        return alert(error.message);
    }
}
export async function PostReq(data){

    try {
        let response = await fetch (url,{
            method: `Post`,
            headers: {"Content-Type":`application/json`},
            body: JSON.stringify(data)
        });
    } catch (error) {
        return alert(error.message);
    }
}

export async function singleGet(id){
   let url = `http://localhost:3030/jsonstore/collections/books/`
    try {
        let response = await fetch (url + id);
        let data = await response.json();
        return data;
    } catch (error) {
        return alert(error.message);
    }
}

export async function putReq(data, id){
    let url = `http://localhost:3030/jsonstore/collections/books/`
    try {
        let response = await fetch (url + id,{
            method: `Put`,
            headers: {"Content-Type":`application/json`},
            body: JSON.stringify(data)
        });
    } catch (error) {
        return alert(error.message);
    }
}

export async function deleteReq(id){
    let url = `http://localhost:3030/jsonstore/collections/books/`
    try {
        let response = await fetch (url + id, {
            method: `Delete`,
            headers: {"Content-Type":`application/json`}
        });
    } catch (error) {
        return alert(error.message);
    }
}
