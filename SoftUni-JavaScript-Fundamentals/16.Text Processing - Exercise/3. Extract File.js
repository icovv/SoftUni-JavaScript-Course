function extractFile(file){
    let splitfile = file.split(`\\`).pop();
    let fileExtension = splitfile.split(`.`).pop();
    let fileName = splitfile.slice(0,splitfile.indexOf(fileExtension) - 1)
    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${fileExtension}`)
}
extractFile('C:\\Internal\\training-internal\\Template.bak.pptx')