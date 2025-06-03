var Counter = /** @class */ (function () {
    function Counter() {
    }
    Counter.increment = function () {
        Counter.count++;
    };
    Counter.getCount = function () {
        return Counter.count;
    };
    Counter.count = 0;
    return Counter;
}());
Counter.increment();
Counter.increment();
console.log(Counter.getCount());
