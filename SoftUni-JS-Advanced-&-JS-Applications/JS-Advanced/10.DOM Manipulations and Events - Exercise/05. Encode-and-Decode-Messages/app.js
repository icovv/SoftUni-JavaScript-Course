function encodeAndDecodeMessages() {
    let message = document.querySelector("#main > div:nth-child(1) > textarea");
    let encodeButton = document.querySelector("#main > div:nth-child(1) > button");
    let printMSG = document.querySelector("#main > div:nth-child(2) > textarea")
    let decode = document.querySelector("#main > div:nth-child(2) > button");
    let newMsg = [];
    let decodedMSG = [];
    let newText = ``
    encodeButton.addEventListener(`click`, function encode(){
        let symbols = message.value.split(``);
        symbols.forEach((symbol) => newMsg.push(symbol.charCodeAt() + 1))
        newText = ``
        newMsg.forEach((letter) => newText += String.fromCharCode(letter));
        printMSG.value = newText;
        message.value = ``;
        newMsg = []
        return newText
    })
    decode.addEventListener(`click`, function decode(){
        let textToDecode = newText.split(``)
        textToDecode.forEach((symbol) => decodedMSG.push(symbol.charCodeAt() - 1));
        let textToPrint = ``;
        decodedMSG.forEach((letter) => textToPrint += String.fromCharCode(letter));
        printMSG.value = textToPrint
        decodedMSG = [];
    })
    

}