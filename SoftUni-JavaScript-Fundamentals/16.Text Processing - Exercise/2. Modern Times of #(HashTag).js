function hashtag(sentance){
    let output = sentance.split(` `);
    let hashtagWords = output.filter(word => word.startsWith(`#`) && word.length > 1)
    let isValid = true;
    for(let word of hashtagWords){
        word = word.replace(`#`,``)
        for (let char of word){
            
        if ((char.charCodeAt(char) >= 65 && char.charCodeAt(char) <= 90) || (char.charCodeAt(char)>= 97 && char.charCodeAt(char) <= 122)){
        continue;
        } else{
            isValid = false;
            break;
        }
    }

    if(isValid) {
        console.log(word);
    }
    isValid = true   
}
}
hashtag('Nowadays everyone uses # to tag a #special word in #socialMedia #3ZDS4')