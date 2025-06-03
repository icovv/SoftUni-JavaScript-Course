function swap(a, aIndex, b, bIndex) {
    var temp = a[aIndex];
    a[aIndex] = b[bIndex];
    b[bIndex] = temp;
}
var a = ['test', '123'];
var b = ['a', 'b', 'c'];
swap(a, 0, b, 2);
console.log(a);
console.log(b);
var c = [20, 30, 40];
var d = [1, 2, 3, 4, 5];
swap(c, 0, d, 2);
console.log(c);
console.log(d);
