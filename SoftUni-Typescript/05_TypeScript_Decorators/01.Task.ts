function log(target:any,methodName:string,descriptor:PropertyDescriptor){
    let originalMethod = descriptor.value;

    descriptor.value = function(...params:string[]){
        console.log(`Function '${methodName}' called with arguments: ${params.join(', ')}`)
        
        return originalMethod.apply(this,params)
    }
    return descriptor
}



class Person{
    public fName:string;
    public lName:string;

    constructor(fName:string, lName:string){
        this.fName = fName;
        this.lName = lName;
    }

    @log
    static getFullName(fName:string,lName:string):string{
        return `${fName} ${lName}`
    }
}

let person = new Person('John', 'Does');

Person.getFullName(person.fName, person.lName)

Person.getFullName('Benny', 'Tres')