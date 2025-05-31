class Task{
    public title:string;
    public description:string;
    public completed = false;
    private _createdBy: string;

    constructor(title:string,description:string, createdBy:string){
        this.title = title;
        this.description = description;
        this._createdBy = createdBy
    }

    get createdBy(){
        return this._createdBy
    }

    public toggleStatus():void{
        this.completed = !this.completed;
    }

    public getDetails():string{
        return `Task: ${this.title} - ${this.description} - ${this.completed === true ? "Completed" : "Pending"}`
    }
    
    static createSampleTasks():Task[]{
        return [new Task('Do Calc HW', "doing something","SO" ), new Task('ala bala', "bala ala","SO" )]
    }
}

const task1 = new Task("Complete homework", "Finish math exercises", "Charlie");

task1.toggleStatus();

console.log(task1.getDetails());

const task2 = new Task("Clean room", "Clean the room", "Mary");

console.log(task2.getDetails());

const tasks = Task.createSampleTasks();

tasks.forEach(task =>

console.log(task.getDetails()));