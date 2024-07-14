function getFibonator(){
    let nums = [0,1]
    let printFirst = false;
    function add(){
        if (!printFirst){
            printFirst = true;
            return 1;
        }
        let nextNum = nums[nums.length - 1] + nums[nums.length - 2];
            nums.push(nextNum);
            return nextNum;
        
    }
    return add;
}
let fib = getFibonator()
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())