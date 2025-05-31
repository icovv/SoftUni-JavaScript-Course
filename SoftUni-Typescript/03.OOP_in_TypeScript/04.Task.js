var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.makeSound = function () {
        return "Woof";
    };
    return Dog;
}());
var dog = new Dog();
console.log(dog.makeSound());
