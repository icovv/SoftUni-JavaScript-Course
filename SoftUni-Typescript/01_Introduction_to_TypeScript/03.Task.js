function formatPerson(_a) {
    var name = _a[0], number = _a[1];
    return "Hello, my name is ".concat(name, " and my age is ").concat(number) || "TS ERROR";
}
console.log(formatPerson(['Ivan', 20]));
console.log(formatPerson(['Joro', 30]));
console.log(formatPerson(['Joro', 25]));
