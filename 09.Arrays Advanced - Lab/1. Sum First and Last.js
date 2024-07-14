function sum(arr){
let firstNum = Number(arr.shift());
let lastNum = Number(arr.pop());
console.log(firstNum + lastNum)
}

sum(['20', '30', '40'])