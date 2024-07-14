function evenOddSubtraction(nums){
    let totalEven = 0;
    let totalOdd = 0
    for (let i = 0; i < nums.length; i++){
        nums[i] = Number(nums[i])
        if (nums[i] % 2 === 0){
            totalEven += nums[i]
        } else {
            totalOdd += nums[i]
        }
    }
    console.log(totalEven - totalOdd)
}
// evenOddSubtraction([1,2,3,4,5,6])
evenOddSubtraction([3,5,7,9])