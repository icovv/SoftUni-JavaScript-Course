function manipulation (arr,commands){

    for (let i = 0; i < commands.length; i++){
        let task = commands[i].split(` `)
        let condition = task[0];
        let index = Number(task[1]);
        let number = Number(task[2]);

        if (condition == `add`){
            arr.splice(index,0,number);
        } else if (condition == `addMany`){
            arr.splice(index,0,number)
            for (let j = 3; j < task.length; j++){
                index += 1
                arr.splice(index,0,Number(task[j]))
            }
        } else if (condition == `contains`){
            if (arr.includes(index)){
                console.log(arr.indexOf(index))
            } else {
                console.log(arr.indexOf(index))
            }
        } else if (condition == `remove`){
            arr.splice(index,1)
        } else if (condition == `shift`){
            for (let k = 0; k < index ; k++){
                arr.push(arr[0]);
                arr.splice(0,1)
            }
        } else if (condition == `sumPairs`){
            let counter = Number(arr.length)
            for (let g = 0; g < arr.length; g++){
                if (counter < 2){
                    break;
                }
            let total = arr[g] + arr[g+1]
            arr.splice(g,2);
            arr.splice(g,0,total)
            counter -= 2
        } 
        }else if (condition == `print`){
            console.log(`[ ${arr.join(`, `)} ]`)
        }
    }
}
// manipulation([1, 2, 4, 5, 6, 7],['add 1 8', 'contains 1', 'contains 3', 'print'])
manipulation([1, 2, 4, 5, 6, 7, 8], [`sumPairs`, 'addMany 5 9 8 7 6 5', 'contains 15', 'remove 3','shift 1', 'print'])

