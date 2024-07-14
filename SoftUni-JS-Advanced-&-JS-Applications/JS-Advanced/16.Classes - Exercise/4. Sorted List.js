class List{
    constructor(){
    this.output = [];
    this.size = 0;
    }
    add(element){
        this.output.push(Number(element));
        this.output.sort((a,b) => a-b);
        this.size = this.output.length;
    }
    remove(index){
        if (index >= this.output.length || index < 0){
            return
        }
        this.output.splice(index,1);
        this.size = this.output.length;
    }
    get(index){
        if (index >= this.output.length || index < 0){
            return
        }
        return this.output[index];
    }

}
let list = new List();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1));

list.remove(1); 

console.log(list.size);
