function optionalMultiplier(param1, param2, param3) {
    var num1 = Number(param1) ? Number(param1) : 1;
    // console.log(num1)
    var num2 = Number(param2) ? Number(param2) : 1;
    // console.log(num2)
    var num3 = Number(param3) ? Number(param3) : 1;
    // console.log(num3)
    return num1 * num2 * num3;
}
console.log(optionalMultiplier('3', 5, '10'));
console.log(optionalMultiplier('2', '2'));
console.log(optionalMultiplier(undefined, 2, 3));
console.log(optionalMultiplier(7, undefined, '2'));
console.log(optionalMultiplier());
