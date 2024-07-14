function gladiatorInventory(arr){
    let inventory = arr[0].split(` `);
    let boughtItems = [];

    for (let i = 1; i < arr.length; i++){
        let nextCommand = arr[i].split(` `);
        let command = nextCommand[0];
        let item = nextCommand[1];

        if (command == `Buy`){
            if (!boughtItems.includes(item) && !inventory.includes(item)){
            inventory.push(item)
            boughtItems.push(item)
            } else {
            let boughtItemIndex = boughtItems.indexOf(item);
            boughtItems.splice(boughtItemIndex,1)
            boughtItems.push(item)
            }
        } else if (command == `Trash`){
            if (inventory.includes(item)){
                let index = inventory.indexOf(item);
                inventory.splice(index,1)
            } 
        } else if (command == `Repair`){
            if (inventory.includes(item)){
                let idx = inventory.indexOf(item);
                inventory.splice(idx,1);
                inventory.push(item)
            }
        } else if (command == `Upgrade`){
            let itemForUpgrade = item.split(`-`);
            let itemForPush = itemForUpgrade[0];
            let material = itemForUpgrade[1];
            if (inventory.includes(itemForPush)){
                let idex = inventory.indexOf(itemForPush)
                inventory.splice(idex + 1,0,`${itemForPush}:${material}`)
            }
        }
    }
    console.log(inventory.join(` `))
}
gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', `Buy Bag`, 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel'])
// gladiatorInventory(['SWORD Shield Spear','Trash Bow','Repair Shield','Upgrade Helmet-V'])
