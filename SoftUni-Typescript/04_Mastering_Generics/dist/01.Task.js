"use strict";
function swap(a, aIndex, b, bIndex) {
    let temp = a[aIndex];
    a[aIndex] = b[bIndex];
    b[bIndex] = temp;
}
let a = ['test', '123'];
let b = ['a', 'b', 'c'];
swap(a, 0, b, 2);
console.log(a);
console.log(b);
let c = [20, 30, 40];
let d = [1, 2, 3, 4, 5];
swap(c, 0, d, 2);
console.log(c);
console.log(d);
//# sourceMappingURL=01.Task.js.map