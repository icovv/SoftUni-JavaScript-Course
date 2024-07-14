function extractText() {
    let print = [];

    let ItemsList = Array.from(document.getElementById(`items`).children);
    let PrintHere = document.getElementById(`result`);

    for (let item of ItemsList){
        print.push(item.textContent)
    }
    
    PrintHere.value = print.join(`\n`)
}