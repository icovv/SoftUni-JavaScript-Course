function order(arr){
    let k = arr.shift()
    console.log(arr.slice(0, k). join(` `))
    console.log(arr.slice(-k).join(` `))
}

order([2, 7, 8, 9])
order([3, 6, 7, 8, 9])
