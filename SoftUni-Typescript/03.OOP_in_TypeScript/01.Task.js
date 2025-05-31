var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.introduce = function () {
        return "My name is ".concat(this.firstName, " ").concat(this.lastName, " and I am ").concat(this.age, " years old.");
    };
    return Person;
}());
var person = new Person("John", "Doe", 30);
console.log(person.introduce());
