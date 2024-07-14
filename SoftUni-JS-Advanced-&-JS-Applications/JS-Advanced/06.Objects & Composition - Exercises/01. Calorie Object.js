function solve(arr){
    let object = {};

    for (let i = 0; i < arr.length; i+= 2){
        let name = arr[i]
        let num = Number(arr[i + 1]);
        object[name] = num

    }
    console.log(object)
}
solve(['Yoghurt', '48', 'Rise', '138',

'Apple', '52'])