function numbers(n,nums){
//     console.log(nums.slice(0,n).reverse().join(` `));
    let reversed = [];
    for (let i = n - 1; i >= 0 ; i --){
        reversed.push(nums[i])
    }
    console.log(reversed.join(` `))
}

numbers(2, [66, 43, 75, 89, 47])