let url = "http://localhost:3030/jsonstore/advanced/table"
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