function formatPerson([name,number]:[string,number]):string{
    return `Hello, my name is ${name} and my age is ${number}` || "TS ERROR";
}

console.log(formatPerson(['Ivan', 20]))
console.log(formatPerson(['Joro', 30]))
console.log(formatPerson(['Joro', 25]))