function checkIfEven(num1:number,num2:number,num3:number):Boolean{
    return (num1+num2+num3) % 2 === 0
}
console.log(checkIfEven(1,2,3));
console.log(checkIfEven(2,2,3));