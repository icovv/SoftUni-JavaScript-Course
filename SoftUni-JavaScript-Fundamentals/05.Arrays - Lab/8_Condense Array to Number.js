function condenseArray (arr){
    let arr2 = []
   while(arr.length > 1){
    arr2 = Array(arr.length - 1);
    for (let i = 0; i < arr.length - 1; i++ ){
        arr2[i] = arr[i] + arr[i+1]
    }
    arr = arr2
    }
    console.log(arr[0])
}
// condenseArray([2,10,3])
// condenseArray([5,0,4,1,2])
// condenseArray([1])
