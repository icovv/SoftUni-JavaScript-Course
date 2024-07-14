function solution(){

    class Employee{
        constructor(name,age){
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.task = [];
        }
        work(){
            console.log(this.task[0]);
                this.task.push(this.task[0])
                this.task.shift()
        }
        collectSalary(){
            console.log(`${this.name} received ${this.salary} this month.`)
    }
}

    class Junior extends Employee{
        constructor(name,age){
            super(name,age);
            this.task = [`${this.name} is working on a simple task.`]
        }

    }
    class Senior extends Employee{
        constructor(name,age){
            super(name,age);
            this.task = [`${this.name} is working on a complicated task.`,
                        `${this.name} is taking time off work.`,
                        `${this.name} is supervising junior workers.`]
                        
        }
    }
    class Manager extends Employee{
        constructor(name,age){
            super(name,age);
            this.task = [`${this.name} scheduled a meeting.`,
                        `${this.name} is preparing a quarterly report.`]
            this.dividend = 0;
        }
        collectSalary(){
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`)
        }
    }
    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}

const classes = solution ();

// const junior =

// new classes.Junior('Ivan',25);

// junior.work();

// junior.work();

// junior.salary = 5811;

// junior.collectSalary();

const sinior = new classes.Senior('Alex', 31);

sinior.work();

sinior.work();

sinior.work();
sinior.work();

sinior.work();

sinior.work();
sinior.work();

sinior.work();

sinior.work();

sinior.work();
// sinior.salary =  12500;
// sinior.collectSalary();
// const manager = new classes.Manager('Tom', 55);
// manager.dividend = 10;
//  manager.collectSalary(); 
//  manager.collectSalary();
