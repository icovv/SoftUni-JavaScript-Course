import { motorcycleRider } from "./Motorcycle Rider.js";
import { expect } from "chai";

describe(`test`,function(){
    describe(`test for licenseRestriction`,function(){
        it(`cat AM`,()=>
        expect(motorcycleRider.licenseRestriction(`AM`)).to.equal(`Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.`)
    )
        it(`cat A1`,()=>
        expect(motorcycleRider.licenseRestriction(`A1`)).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.")
    )
        it(`cat A2`,()=>
        expect(motorcycleRider.licenseRestriction(`A2`)).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.")
    )
        it(`cat A`,()=>
        expect(motorcycleRider.licenseRestriction(`A`)).to.equal("No motorcycle restrictions, and the minimum age is 24.")
    )
        it(`cat is diff`,()=>
        expect(() => motorcycleRider.licenseRestriction(`D`)).to.throw("Invalid Information!")
    )})
    describe(`motorcycleShowroom`, function(){
        it (`valid answers for 1 el`,()=>
            expect(motorcycleRider.motorcycleShowroom([`50`],50)).to.equal(`There are 1 available motorcycles matching your criteria!`)
        )
        it (`valid answers for 2 el`,()=>
            expect(motorcycleRider.motorcycleShowroom([`50`,`51`],100)).to.equal(`There are 2 available motorcycles matching your criteria!`)
        )
        it (`valid answers for 1 el`,()=>
            expect(motorcycleRider.motorcycleShowroom([`50`,`51`],50)).to.equal(`There are 1 available motorcycles matching your criteria!`)
        )
        it (`invalid answer for Arr`,()=>
            expect(() => motorcycleRider.motorcycleShowroom(`50`,100)).to.throw("Invalid Information!")
        )
        it (`invalid answer for Arr`,()=>
            expect(() => motorcycleRider.motorcycleShowroom([`50`],`100`)).to.throw("Invalid Information!")
        )
        it (`invalid answer for Arr`,()=>
            expect(() => motorcycleRider.motorcycleShowroom([],100)).to.throw("Invalid Information!")
        )
        it (`invalid answer for Arr`,()=>
            expect(() => motorcycleRider.motorcycleShowroom([`50`],49)).to.throw("Invalid Information!")
        )

    })
    describe(`otherSpendings`,function(){
        it (`valid answers`,()=>
            expect(motorcycleRider.otherSpendings([`helmet`],[`engine oil`],false)).to.equal("You spend $270.00 for equipment and consumables!")
        )
        it (`valid answers`,()=>
            expect(motorcycleRider.otherSpendings([`helmet`],[`engine oil`],true)).to.equal("You spend $243.00 for equipment and consumables with 10% discount!")
        )
        it (`valid answers`,()=>
            expect(motorcycleRider.otherSpendings([`jacked`],[`oil filter`],false)).to.equal("You spend $330.00 for equipment and consumables!")
        )
        it (`valid answers`,()=>
            expect(motorcycleRider.otherSpendings([`jacked`],[`oil filter`],true)).to.equal("You spend $297.00 for equipment and consumables with 10% discount!")
        )
        it (`valid answers`,()=>
            expect(motorcycleRider.otherSpendings([`helmet`],[`oil filter`],false)).to.equal("You spend $230.00 for equipment and consumables!")
        )
        it (`valid answers`,()=>
            expect(motorcycleRider.otherSpendings([`helmet`],[`oil filter`],true)).to.equal("You spend $207.00 for equipment and consumables with 10% discount!")
        )
        it (`valid answers`,()=>
            expect(motorcycleRider.otherSpendings([`jacked`],[`engine oil`],false)).to.equal("You spend $370.00 for equipment and consumables!")
        )
        it (`valid answers`,()=>
            expect(motorcycleRider.otherSpendings([`jacked`],[`engine oil`],true)).to.equal("You spend $333.00 for equipment and consumables with 10% discount!")
        )
        it (`invalid answers`, ()=>
        expect(() => motorcycleRider.otherSpendings(`jacked`,[`engine oil`],false)).to.throw(`Invalid Information!`)
        )
        it (`invalid answers`, ()=>
        expect(() => motorcycleRider.otherSpendings([`jacked`],`engine oil`,false)).to.throw(`Invalid Information!`)
        )
        it (`invalid answers`, ()=>
        expect(() => motorcycleRider.otherSpendings([`jacked`],[`engine oil`],1)).to.throw(`Invalid Information!`)
        )
    })
})