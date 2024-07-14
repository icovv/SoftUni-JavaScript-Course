function solve(obj){
    let methodArr = [`GET`,`POST`, `DELETE`,`CONNECT`];
    let regexPatUri = /[^A-Za-z0-9\.\*]+/;
    let versionArr = [`HTTP/0.9`, `HTTP/1.0`, `HTTP/1.1`,`HTTP/2.0`]
    let messageArr = / [^\<\>\&\\\'\"]+/;
    let arrForValidKeys = [`method`, `uri`, `version`, `message`]
    let objForCheck = {method:`Method`,uri:`URI`,version:`Version`,message:`Message`}
    if (!methodArr.includes(obj.method)  || !obj.method === undefined){
        throw new Error (`Invalid request header: Invalid Method`)
    }

    if(!obj.uri || !obj.uri.match(regexPatUri) || !obj.uri == undefined){
        throw new Error (`Invalid request header: Invalid URI`)
    }
    if(!versionArr.includes(obj.version) || !obj.version == undefined){
        throw new Error (`Invalid request header: Invalid Version`)
    }
    if(obj.message == null || !obj.message == undefined){
        throw new Error (`Invalid request header: Invalid Message`)
    }
    if(obj.message.match(messageArr)){
        throw new Error (`Invalid request header: Invalid Message`)
    }
    for (let el of obj.message){

    }
    return obj
}
solve({
    

        method: 'GET',
        
        uri: 'svn.public.catalog',
        
        version: 'HTTP/1.1',
        
        message: ``
        
        
    })