function convertArrays(array:string[]):[string,number]{
    let returnString:string = '';
    array.forEach(x => returnString += x);
    
    return [returnString,returnString.length];
}

console.log(convertArrays(["How","are","you?"]));