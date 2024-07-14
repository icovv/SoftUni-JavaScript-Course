function addItem() {
    let textToAdd = document.getElementById(`newItemText`).value;
    let el = document.createElement(`li`);
    let ul = document.getElementById(`items`);
    
    ul.appendChild(el)

    el.textContent = textToAdd;

    let button = document.createElement(`a`)
    button.href = `#`
    button.textContent = `[Delete]`
    button.addEventListener(`click`, elDelete)   
    el.appendChild(button);

    function elDelete(){
        el.remove()
    }
    
}