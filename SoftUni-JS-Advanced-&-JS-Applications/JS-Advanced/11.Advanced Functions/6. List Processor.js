function solve(commands){
    let txt = [];

    for (let command of commands){
        let fnName = command.split(` `)[0];
        let textToManipul = command.split(` `)[1];
        
        if (fnName == `add`){
            add(textToManipul)
        } else if (fnName == `remove`){
            remove(textToManipul)
        } else if (fnName == `print`){
            print();
        }
    }

    function add(text){
        return txt.push(text); 
    }
    function remove(text){
        return txt = txt.filter((items) => items != text)
    }
    function print(){
        return console.log(txt.join(`,`))
    }
}
solve(['add hello', 'add hello', 'remove hello', 'add again', 'print'])