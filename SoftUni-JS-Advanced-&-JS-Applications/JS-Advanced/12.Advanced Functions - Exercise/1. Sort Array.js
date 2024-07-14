function solve(arr,sortType){
    function doTask(sortType){
        if (sortType == `asc`){
        return arr = arr.sort((a,b) => a-b)
        } else if (sortType == `desc`){
        return arr = arr.sort((a,b) => b-a)
        }
    }

    return doTask(sortType)
}
console.log(solve([14, 7, 17, 6, 8], 'asc'))