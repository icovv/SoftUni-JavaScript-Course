function colorize() {
    let tableRow = document.getElementsByTagName(`tr`)

    for (let i = 1; i < tableRow.length; i += 2){
        tableRow[i].style.background = `Teal`
    }
}