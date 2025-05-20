function convertArrays(array) {
    var returnString = '';
    array.forEach(function (x) { return returnString += x; });
    return [returnString, returnString.length];
}
console.log(convertArrays(["How", "are", "you?"]));
