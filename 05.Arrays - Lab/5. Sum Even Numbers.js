function sumEvenNumbers(nums){
    let total = 0;
    for (let i = 0; i < nums.length; i++){
        nums[i] = Number(nums[i])
        if (nums[i] % 2 === 0){
            total += nums[i]
        }
    }
    console.log(total)

}
sumEvenNumbers(['1','2','3','4','5','6'])