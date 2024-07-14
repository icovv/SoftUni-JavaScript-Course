class WineSelection{
    constructor(space){
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }
    reserveABottle (wineName, wineType, price){
        if (this.space < 1){
            throw new Error("Not enough space in the cellar.")
        }
        this.wines.push({
            wineName:wineName,
            wineType:wineType,
            price:price,
            paid:false,
        })
        this.space -= 1
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }
    payWineBottle( wineName, price ){
        debugger;
        let found = false;

        for (let wine of this.wines){
            if (wine.wineName == wineName){
                found = true;
                break;
            }
        }
        if (found == false){
            throw new Error(`${wineName} is not in the cellar.`)
        }
        let paidWine = false;
        for (let wine of this.wines){
            if (wine.wineName == wineName){
                if (wine.paid == true){
                    paidWine = true;
                }
            }
        }
        if (paidWine == true){
            throw new Error(`${wineName} has already been paid.`)
        }
        for (let wine of this.wines){
            if (wine.wineName == wineName){
               wine.paid = true;
               this.bill += price;
               return `You bought a ${wineName} for a ${price}$.`
            }
        }


    }
    openBottle(wineName){
        let found = false;

        for (let wine of this.wines){
            if (wine.wineName == wineName){
                found = true;
                break;
            }
        }
        if (found == false){
            throw new Error("The wine, you're looking for, is not found.")
        }
        let paidWine = true;
        for (let wine of this.wines){
            if (wine.wineName == wineName){
                if (wine.paid == false){
                    paidWine = false;
                }
            }
        }
        if (paidWine == false){
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        }
        for (let i = 0; i < this.wines.length; i ++){
            if (this.wines[i].wineName = wineName){
                this.wines.splice(i,1);
                return `You drank a bottle of ${wineName}.`
            }
        }

    }
    cellarRevision(wineType){
        debugger
        if (wineType == undefined){
            this.wines.sort((a,b) => a.wineName.localeCompare(b.wineName));

            let output = [];
            for (let wine of this.wines){
                let isWinePaid = ``
                if (wine.paid == false){
                    isWinePaid = `Not Paid`
                } else {
                    isWinePaid = `Has Paid`
                }
                output.push(`${wine.wineName} > ${wine.wineType} - ${isWinePaid}.`)
            }

            return `You have space for ${this.space} bottles more.\n` + `You paid ${this.bill}$ for the wine.\n` + output.join(`\n`)
        } else {
            for (let wine of this.wines){
                if (wine.wineType == wineType){
                    let paidWine = ``;
                    if (wine.paid == false){
                        paidWine = `Not Paid`
                    } else {
                        paidWine = `Has Paid`
                    }
                    return `${wine.wineName} > ${wine.wineType} - ${paidWine}.`
                }
            }
        }
        throw new Error(`There is no ${wineType} in the cellar.`)
    }

}
const selection = new WineSelection(5)

selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);

selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50); selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120); console.log(selection.cellarRevision());