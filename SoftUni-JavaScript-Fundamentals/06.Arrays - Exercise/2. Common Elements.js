function elements(arr1,arr2){

    for (let i = 0; i < arr1.length; i++){
        if (arr2.includes(arr1[i])){
            console.log(arr1[i])
        }
    }
}
// elements(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2'])
elements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],['s', 'o', 'c', 'i', 'a', 'l'])