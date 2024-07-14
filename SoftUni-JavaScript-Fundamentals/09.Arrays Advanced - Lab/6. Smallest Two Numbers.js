function smallestTwoNums(arr){
    let smallToBigOrder = arr.sort((a,b) => a-b)
    console.log(`${smallToBigOrder[0]} ${smallToBigOrder[1]}`)
}
smallestTwoNums([30, 15, 50, 5])
smallestTwoNums([3, 0, 10, 4, 7, 3])