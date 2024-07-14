function createSortedList(){
let list = [];
let size = 0;

    function add(num){
        list.push(num);
        list.sort((a,b)=> a-b)
        size = list.length
    }
    function remove(idx){
        if (idx >= 0 && idx < list.length){
        list.splice(idx,1)
        size = list.length
        }
    }
    function get(idx){
        if (idx >= 0 && idx < list.length){
        return list[idx]
        }
    }

    return{
        add,
        remove,
        get,
        get size(){
            return size
        }
    }
}


let list = createSortedList();
list.add(5);
list.add(6);
list.add(7); 
console.log(size); 
list.remove(1); 
console.log(list.get(1));