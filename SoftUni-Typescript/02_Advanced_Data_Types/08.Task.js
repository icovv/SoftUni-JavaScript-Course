"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assignTask(user, task) {
    if (task.assignedTo == undefined) {
        task.assignedTo = user;
        console.log("User ".concat(user.username, " assigned to task '").concat(task.title, "'"));
    }
}
var user = {
    username: 'Margaret',
    signupDate: new Date(2022, 1, 13),
    passwordHash: 'random'
};
var task1 = {
    status: 'Logged',
    title: 'Need assistance',
    daysRequired: 1,
    assignedTo: undefined,
    changeStatus: function (newStatus) {
        this.status = newStatus;
    }
};
var task2 = {
    status: 'Done',
    title: 'Test',
    daysRequired: 12,
    assignedTo: undefined,
    changeStatus: function (newStatus) { this.status = newStatus; },
    moreProps: 300, evenMore: 'wow'
};
assignTask(user, task1);
assignTask(user, task2);
