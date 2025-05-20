function isNonEmptyStringArray(arg:unknown): arg is string[]{
    return Array.isArray(arg) && arg.length >=0 && arg.every(el => typeof el === "string");
}

let arr: unknown = ["test",132];

if(isNonEmptyStringArray(arr)) {

console.log(arr.length);

}