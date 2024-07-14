function arrayRotation(arr1, n){
 for (let i = 1; i <= n; i++){
    let el = arr1.shift();
    arr1.push(el)
 }
 console.log(arr1.join(` `))
}
arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4)