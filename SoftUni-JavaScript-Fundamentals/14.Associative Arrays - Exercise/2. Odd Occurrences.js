function oddOccur(arr){
    let lowerArr = arr.toLowerCase()
    let arr1 = lowerArr.split(` `);
    let counter = {}
    for (let word of arr1){
        if (word in counter){
            counter[word] += 1
        } else {
            counter[word] = 1
        }
    }
    let counterArr = Object.entries(counter);
    let obj = {};
    for (let i =0; i < counterArr.length; i+= 1){
        let word = counterArr[i][0];
        let value = counterArr[i][1]
        if (value % 2 != 0){
            obj[word] = value
        }
    }
    let objArr = Object.entries(obj);
    objArr.sort((a,b)=> b[1] - a[1])
    let newArr = [];
    for (let j = 0; j < objArr.length; j++){
        let word = objArr[j][0];
        newArr.push(word)
    }
    console.log(newArr.join(` `))
}
oddOccur('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')