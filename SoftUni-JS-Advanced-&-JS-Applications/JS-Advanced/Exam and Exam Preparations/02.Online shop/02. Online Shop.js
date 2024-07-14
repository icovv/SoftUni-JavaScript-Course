class OnlineShop{
    products = [];
    sales = [];
    constructor(warehouseSpace){
        this.warehouseSpace = warehouseSpace;
    }

    loadingStore(product, quantity, spaceRequired){
        quantity = Number(quantity);
        spaceRequired = Number(spaceRequired);
        if (spaceRequired > this.warehouseSpace){
            throw new Error("Not enough space in the warehouse.")
        }
        this.products.push({
            product:product,
            quantity:quantity,
        })
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`
    }
    quantityCheck(product, minimalQuantity){
        let notFound = true;
        minimalQuantity = Number(minimalQuantity)
        for (let item of this.products){
            if (item.product == product){
                notFound = false;
                break;
            }
        }
        if (notFound == true){
            throw new Error(`There is no ${product} in the warehouse.`)
        }
        if (minimalQuantity <= 0){
            throw new Error(`The quantity cannot be zero or negative.`)
        }
        for (let item of this.products){
            if (item.product == product){
                if (minimalQuantity <= item.quantity){
                    return `You have enough from product ${product}.`
                } else {
                    let difference = minimalQuantity - item.quantity
                    item.quantity = minimalQuantity;
                    return `You added ${difference} more from the ${product} products.`
                }
            }
        }
    }
    sellProduct(product){
        let notFound = true;
        for (let item of this.products){
            if (item.product == product){
                notFound = false;
                break;
            }
        }
        if (notFound == true){
            throw new Error(`There is no ${product} in the warehouse.`)
        }
        for (let item of this.products){
            if (item.product == product){
                item.quantity -- ;
                this.sales.push({
                    product:product,
                    quantity: 1,
                })
            return `The ${product} has been successfully sold.`
            }
        }
    }
    revision(){
        debugger
        if (this.sales.length == 0){
            throw new Error("There are no sales today!")
        }
        let qtySales = 0;
        this.sales.forEach(x => qtySales += 1);
        let outcome = [];
        this.products.forEach(x => outcome.push(`${x.product}-${x.quantity} more left`))

        return `You sold ${qtySales} products today!\n` + `Products in the warehouse:\n` + outcome.join(`\n`)
    }
}

// const myOnlineShop = new OnlineShop(500)

// console.log(myOnlineShop.loadingStore('headphones', 10, 200));

// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.loadingStore('TV', 40, 500));

// const myOnlineShop = new OnlineShop(500)

// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.quantityCheck('TV', 40,));

// const myOnlineShop = new OnlineShop(500)

// console.log(myOnlineShop.loadingStore('headphones', 10, 200));

// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));

// console.log(myOnlineShop.quantityCheck('laptop', 10));

// console.log(myOnlineShop.sellProduct('headphones'));

// console.log(myOnlineShop.sellProduct('laptop'));

// console.log(myOnlineShop.sellProduct('keyboard'));

const myOnlineShop = new OnlineShop(500)

console.log(myOnlineShop.loadingStore('headphones', 10, 200));

console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));

console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));

console.log(myOnlineShop.sellProduct('laptop'));

console.log(myOnlineShop.revision());