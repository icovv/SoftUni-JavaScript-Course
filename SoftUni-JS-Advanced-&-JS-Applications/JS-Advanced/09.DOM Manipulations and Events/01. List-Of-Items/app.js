function addItem() {
    let textToAdd = document.getElementById(`newItemText`).value;
    let el = document.createElement(`li`);
    let ul = document.getElementById(`items`);
    
    ul.appendChild(el)

    el.textContent = textToAdd;
}