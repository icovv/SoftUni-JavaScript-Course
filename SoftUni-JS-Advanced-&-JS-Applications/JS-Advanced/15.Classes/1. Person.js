class Person{
    constructor(firstName, lastName,age,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

let newPerson = new Person(`Hristo`, `Vasilev`,`24`,`asd@asd.asd`)

console.log(newPerson.toString())