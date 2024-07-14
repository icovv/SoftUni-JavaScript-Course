function repeat(text,repeatCount){
    let finalText = ``;

    for (let i = 0; i < repeatCount; i ++){
    finalText += text
    }
    console.log(finalText)
}
repeat("abc", 3);
repeat("String", 2)