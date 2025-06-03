function conditionalNumber(input) {
    if (typeof input == "number") {
        console.log(input.toFixed(2));
    }
    else {
        console.log(input);
    }
}
// conditionalNumber<boolean>(30);
// conditionalNumber<number>('test');
conditionalNumber(20.3555);
conditionalNumber('wow');
conditionalNumber('a string');
