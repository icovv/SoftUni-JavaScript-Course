// Create a class Employee with:
// · public property name
// · protected property position
// · private property salary
// Implement methods:
// · getDetails – to return information about name and position (see format output)
// · showSalary – to return information about salary (see format in output)
var Employee = /** @class */ (function () {
    function Employee(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    Employee.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Position: ").concat(this.position);
    };
    Employee.prototype.showSalary = function () {
        return "Salary: $".concat(this.salary);
    };
    return Employee;
}());
var emp = new Employee("Alice", "Manager", 5000);
console.log(emp.getDetails());
console.log(emp.showSalary());
console.log(emp.name);
// console.log(emp.salary)
// console.log(emp.position)
