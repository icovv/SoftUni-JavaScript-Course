function createPerson(firstName,lastName){

    let person = {
        firstName,
        lastName
    }

    Object.defineProperty(person, "fullName",{
        get(){
            return `${this.firstName} ${this.lastName}`
        },
        set(value){
            this.firstName = value.split(` `)[0]
            this.lastName = value.split(` `)[1]
        }
    });
    return person
}
let person = createPerson("Peter", "Ivanov");

console.log(person.fullName);

person.firstName = "George";

console.log(person.fullName);

person.lastName = "Peterson";

console.log(person.fullName);

person.fullName = "Nikola Tesla";

console.log(person.firstName);

console.log(person.lastName);