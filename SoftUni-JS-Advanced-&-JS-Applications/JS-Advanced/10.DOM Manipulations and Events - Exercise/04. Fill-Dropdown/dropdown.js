function addItem() {
    let itemText = document.querySelector("#newItemText");
    let itemValue = document.querySelector("#newItemValue");
    let menu = document.getElementById(`menu`);

    let newItem = document.createElement(`option`);
    newItem.textContent = itemText.value;
    newItem.value = itemValue.value;

    itemText.value = ``;
    itemValue.value = ``;

    menu.appendChild(newItem)
}
