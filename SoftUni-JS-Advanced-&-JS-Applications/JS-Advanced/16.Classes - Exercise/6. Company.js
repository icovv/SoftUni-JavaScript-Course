class Company{
    constructor(){
        this.department = {};
    }

    addEmployee(name,salary,position,company){
        salary = Number(salary);
        if (!name || !salary || !position || !company){
            throw new Error("Invalid input!")
        } else if (salary < 0){
            throw new Error("Invalid input!")
        }
        if (!this.department[company]){
            this.department[company] = {
                avg: 0,
                SumSalary: 0,
                emplyee:[]
            }        
        }
        this.department[company].emplyee.push({name,salary,position});
        this._updateDepartment(company,salary);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    _updateDepartment(company,salary){
        this.department[company].SumSalary += salary;
        this.department[company].avg = this.department[company].SumSalary / this.department[company].emplyee.length;
        this.department[company].emplyee.sort((a,b)=>b.salary - a.salary || a.name.localeCompare(b.name))
    }

    bestDepartment(){
        let arr = Object.entries(this.department);

        arr.sort((a,b) => b[1].avg - a[1].avg)
        debugger
        let forLogg = `Best Department is: ${arr[0][0]}\n`+`Average salary: ${arr[0][1].avg.toFixed(2)}\n`;
        arr[0][1].emplyee.forEach(x => forLogg += `${x.name} ${x.salary} ${x.position}\n`)
        
        return forLogg.substring(0,forLogg.length - 1)
    }
}
let c = new Company();



c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

console.log(c.bestDepartment());
