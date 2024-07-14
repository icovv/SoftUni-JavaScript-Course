function extract(content) {
    let text = document.getElementById(content).textContent
    let regEx = /\(([^)]+)\)/g
    let matchesArr = regEx.exec(text);
    let finalArr = []
    while(matchesArr){
        finalArr.push(matchesArr[1]);
        matchesArr = regEx.exec(text);
    }
     return finalArr.join(`; `)

}