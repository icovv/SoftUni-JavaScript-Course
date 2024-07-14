class Stringer{
    constructor(innerString,innerLength){
        this.innerString = innerString;
        this.innerLength = innerLength;
    }
    increase(length){
       this.innerLength += length;
    }
    
    decrease(length){
        if (this.innerLength - length < 0){
            return this.innerLength = 0;
        } else {
            return this.innerLength -= length
        }
    }

    toString(){
        if (this.innerLength < this.innerString.length) {
            return this.innerString.substring(0, this.innerLength) + '...';
          } else {
            return this.innerString;
          } 
    }
}
let test = new Stringer("Viktor", 6);

test.decrease(3);

console.log(test.toString()); 
