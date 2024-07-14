function oddNums(arr){
    let result = arr.filter((x,i) => i % 2 != 0) 
    let reversed = result.reverse();
    let doubled = reversed.map(x => x*2);
    console.log(doubled.join(` `))

}

oddNums([10, 15, 20, 25])