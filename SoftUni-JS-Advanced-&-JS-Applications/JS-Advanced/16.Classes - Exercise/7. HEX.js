class Hex { 
    constructor(value){
        this.value = Number(value)
    }
    valueOf(){
        return 
    }

    toString(){
        return `0x` + this.value.toString(16).toUpperCase();
    }
    valueOf(){
        return this.value
    }
    plus(num){
        return new Hex(this.value + Number(num))
    }
    minus(num){
        return new Hex(this.value - Number(num))
    }

    parse(num){
        return parseInt(num,16)
    }
}

let FF = new Hex(255);

// console.log(FF.toString());

// FF.valueOf() + 1 == 256;

let a = new Hex(10);

let b = new Hex(155);

console.log(a.plus(b).toString());

// console.log(a.plus(b).toString()==='0xF');

// console.log(FF.parse('AAA'));