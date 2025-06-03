var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.calculate = function (operation, a, b, c, d) {
        var validNums = [a, b, c, d].filter(function (el) { return el != undefined; });
        switch (operation) {
            case "power":
                return Math.pow(a, b);
            case "log":
                return Math.log(a) / Math.log(b);
            case "add":
                return validNums.reduce(function (acc, val) { return acc + val; });
            case "subtract":
                return validNums.reduce(function (acc, val) { return acc - val; });
            case "multiply":
                return validNums.reduce(function (acc, val) { return acc * val; });
            case "divide":
                return validNums.reduce(function (acc, val) { return acc / val; });
        }
    };
    return Calculator;
}());
var calc = new Calculator();
console.log(calc.calculate('power', 2, 3));
console.log(calc.calculate('power', 4, 1 / 2));
console.log(calc.calculate('log', 8, 2));
console.log(calc.calculate('add', 10, 5));
console.log(calc.calculate('add', 10, 5, 3));
console.log(calc.calculate('subtract', 10, 5));
console.log(calc.calculate('multiply', 2, 3, 4));
console.log(calc.calculate('divide', 100, 5, 2, 2));
