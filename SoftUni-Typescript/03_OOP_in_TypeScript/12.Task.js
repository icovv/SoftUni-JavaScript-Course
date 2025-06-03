var Task = /** @class */ (function () {
    function Task(title, description, createdBy) {
        this.completed = false;
        this.title = title;
        this.description = description;
        this._createdBy = createdBy;
    }
    Object.defineProperty(Task.prototype, "createdBy", {
        get: function () {
            return this._createdBy;
        },
        enumerable: false,
        configurable: true
    });
    Task.prototype.toggleStatus = function () {
        this.completed = !this.completed;
    };
    Task.prototype.getDetails = function () {
        return "Task: ".concat(this.title, " - ").concat(this.description, " - ").concat(this.completed === true ? "Completed" : "Pending");
    };
    Task.createSampleTasks = function () {
        return [new Task('Do Calc HW', "doing something", "SO"), new Task('ala bala', "bala ala", "SO")];
    };
    return Task;
}());
var task1 = new Task("Complete homework", "Finish math exercises", "Charlie");
task1.toggleStatus();
console.log(task1.getDetails());
var task2 = new Task("Clean room", "Clean the room", "Mary");
console.log(task2.getDetails());
var tasks = Task.createSampleTasks();
tasks.forEach(function (task) {
    return console.log(task.getDetails());
});
