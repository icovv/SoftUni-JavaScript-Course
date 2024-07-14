function arrays(arr,rotate){

    for (let i = 0; i < rotate; i++){
        arr.push(arr[0]);
        arr.splice(0,1)
        console.log(arr)
    }
}

arrays([1, 2, 4, 5, 6, 7],[3])