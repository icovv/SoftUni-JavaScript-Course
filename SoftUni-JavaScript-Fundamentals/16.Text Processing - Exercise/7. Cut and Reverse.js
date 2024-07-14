function cutAndReverse(string){
   let reversed = string.slice(0,string.length/2);
   let wordOutput = ``;
   let outputOne = [];
   let secondSentance = string.slice(string.length/2);
   let wordOutputTwo = ``;
   let outputTwo = [];
   for (let i = reversed.length - 1 ; i >= 0; i --){
        if (reversed[i].charCodeAt(reversed[i]) >= 65 && reversed[i].charCodeAt(reversed[i]) <= 90){
            if (wordOutput.length > 0){outputOne.push(wordOutput)};
            wordOutput = ``;
            wordOutput += reversed[i]
        }
        if (!(reversed[i].charCodeAt(reversed[i]) >= 65 && reversed[i].charCodeAt(reversed[i]) <= 90)){
            wordOutput += reversed[i]
        }
   }
   outputOne.push(wordOutput);
   console.log(outputOne.join(``))

   for (let j = secondSentance.length-1 ; j >= 0; j--){
    if (secondSentance[j].charCodeAt(secondSentance[j]) >= 65 && secondSentance[j].charCodeAt(secondSentance[j]) <= 90){
        if (wordOutputTwo.length > 0){outputTwo.push(wordOutputTwo)};
        wordOutputTwo = ``;
        wordOutputTwo += secondSentance[j]
    }
    if (!(secondSentance[j].charCodeAt(secondSentance[j]) >= 65 && secondSentance[j].charCodeAt(secondSentance[j]) <= 90)){
        wordOutputTwo += secondSentance[j]
    }
}
outputTwo.push(wordOutputTwo);
console.log(outputTwo.join(``))

}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')