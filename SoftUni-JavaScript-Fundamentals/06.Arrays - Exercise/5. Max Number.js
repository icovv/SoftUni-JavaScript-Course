function maxNum(arr){
    let topNum = [];
    
    for (let i = 0; i < arr.length; i++){
        let num = arr[i]
        let isTop = true;
        for (let j = i+1; j < arr.length; j++){
            if (num <= arr[j]){
                 isTop = false;
                 break;
            }
        }
        if (isTop){
            topNum.push(num);
        }
    }
    console.log(topNum.join(` `))

}
// maxNum([1, 4, 3, 2]);
maxNum([14, 24, 3, 19, 15, 17]);