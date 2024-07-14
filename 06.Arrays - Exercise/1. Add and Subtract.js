function addAndSubtract(arr){
    let total1 = 0;
    let total2 = 0;
    for (let i = 0; i < arr.length; i++){
        total1 += arr[i]
        if (arr[i] % 2 == 0){
            arr[i] = arr[i] + i
        } else {
            arr[i] = arr[i] - i
        }
        total2 += arr[i]
    }
    console.log(arr)
    console.log(total1)
    console.log(total2)
}
addAndSubtract([5, 15, 23, 56, 35])