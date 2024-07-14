import { expect } from "chai";
import { findNewApartment } from "./findApartment.js";

describe(`test`, function(){
    describe(`tests for isGoodLocation`,function(){
        it(`City different than Sofia,Varna, Plovdiv`,()=>{
            expect(findNewApartment.isGoodLocation(`Haskovo`,true)).to.equal(`This location is not suitable for you.`)
        })
        it(`City is either Sofia,Varna, Plovdiv`,()=>{
            expect(findNewApartment.isGoodLocation(`Sofia`,true)).to.equal("You can go on home tour!")
        })
        it(`City is either Sofia,Varna, Plovdiv`,()=>{
            expect(findNewApartment.isGoodLocation(`Varna`,true)).to.equal("You can go on home tour!")
        })
        it(`City is either Sofia,Varna, Plovdiv`,()=>{
            expect(findNewApartment.isGoodLocation(`Plovdiv`,true)).to.equal("You can go on home tour!")
        })
        it(`Near transport is false`,()=>{
            expect(findNewApartment.isGoodLocation(`Plovdiv`,false)).to.equal("There is no public transport in area.")
        })
        it(`Near transport is false`,()=>{
            expect(findNewApartment.isGoodLocation(`Haskovo`,false)).to.equal(`This location is not suitable for you.`)
        })
        it(`If city not string`,()=>{
            expect(() => findNewApartment.isGoodLocation([],false)).to.throw("Invalid input!")
        })
        it(`If city not string`,()=>{
            expect(() => findNewApartment.isGoodLocation({},false)).to.throw("Invalid input!")
        })
        it(`If city not string`,()=>{
            expect(() => findNewApartment.isGoodLocation(1,false)).to.throw("Invalid input!")
        })
        it(`if near transport not boolean`,()=>{
            expect(()=> findNewApartment.isGoodLocation(`Sofia`,1)).to.throw("Invalid input!")
        })
        it(`if near transport not boolean`,()=>{
            expect(()=> findNewApartment.isGoodLocation(`Sofia`,[])).to.throw("Invalid input!")
        })
        it(`if near transport not boolean`,()=>{
            expect(()=> findNewApartment.isGoodLocation(`Sofia`,{})).to.throw("Invalid input!")
        })
    })
    describe(`tests for isLargeEnough`,function(){
        it (`check if apartments is sorted properly`, function(){
            expect(findNewApartment.isLargeEnough([50,60,70],50)).to.equal(`50, 60, 70`)
        })
        it (`check if apartments is sorted properly`, function(){
            expect(findNewApartment.isLargeEnough([50,60,70],51)).to.equal(`60, 70`)
        })
        it (`check if apartments is sorted properly`, function(){
            expect(findNewApartment.isLargeEnough([50,60,70],60)).to.equal(`60, 70`)
        })
        it (`check if apartments is sorted properly`, function(){
            expect(findNewApartment.isLargeEnough([50,60,70],70)).to.equal(`70`)
        })
        it (`check if apartments is sorted properly`, function(){
            expect(findNewApartment.isLargeEnough([50,60,70],80)).to.equal(``)
        })
        it (`check for correct input`, function(){
            expect(() => findNewApartment.isLargeEnough([50,60,70],[])).to.throw("Invalid input!")
        })
        it (`check for correct input`, function(){
            expect(() => findNewApartment.isLargeEnough([50,60,70],{})).to.throw("Invalid input!")
        })
        it (`check for correct input`, function(){
            expect(() => findNewApartment.isLargeEnough([50,60,70],true)).to.throw("Invalid input!")
        })
        it (`check for correct input`, function(){
            expect(() => findNewApartment.isLargeEnough([50,60,70],`asd`)).to.throw("Invalid input!")
        })
        it (`check for correct input`, function(){
            expect(() => findNewApartment.isLargeEnough(50,50)).to.throw("Invalid input!")
        })
        it (`check for correct input`, function(){
            expect(() => findNewApartment.isLargeEnough({},[])).to.throw("Invalid input!")
        })
        it (`check for correct input`, function(){
            expect(() => findNewApartment.isLargeEnough(true,[])).to.throw("Invalid input!")
        })
        it (`check for correct input`, function(){
            expect(() => findNewApartment.isLargeEnough(`true`,[])).to.throw("Invalid input!")
        })
    })
    describe(`tests for isItAffordable`, function(){
        it(`You can buy and apartment`, function(){
            expect(findNewApartment.isItAffordable(50,60)).to.equal(`You can afford this home!`)
        })
        it(`You can buy and apartment`, function(){
            expect(findNewApartment.isItAffordable(50,50)).to.equal(`You can afford this home!`)
        })
        it(`You cant buy and apartment`, function(){
            expect(findNewApartment.isItAffordable(50,40)).to.equal("You don't have enough money for this house!")
        })
        it(`You cant buy and apartment`, function(){
            expect(findNewApartment.isItAffordable(50,49)).to.equal("You don't have enough money for this house!")
        })
        it(`Incorect input`, function(){
            expect(() => findNewApartment.isItAffordable(-50,49)).to.throw("Invalid input!")
        })
        it(`Incorect input`, function(){
            expect(() => findNewApartment.isItAffordable(50,-49)).to.throw("Invalid input!")
        })
        it(`Incorect input`, function(){
            expect(() => findNewApartment.isItAffordable(0,49)).to.throw("Invalid input!")
        })
        it(`Incorect input`, function(){
            expect(() => findNewApartment.isItAffordable(0,0)).to.throw("Invalid input!")
        })
        it(`Incorect input`, function(){
            expect(() => findNewApartment.isItAffordable(50,-10)).to.throw("Invalid input!")
        })
        it(`Incorect input`, function(){
            expect(() => findNewApartment.isItAffordable(-10,50)).to.throw("Invalid input!")
        })
        it(`Incorect input`, function(){
            expect(() => findNewApartment.isItAffordable(10,`50`)).to.throw("Invalid input!")
        })
        it(`Incorect input`, function(){
            expect(() => findNewApartment.isItAffordable(`10`,50)).to.throw("Invalid input!")
        })
        it(`Incorect input`, function(){
            expect(() => findNewApartment.isItAffordable(10,{})).to.throw("Invalid input!")
        })
        it(`Incorect input`, function(){
            expect(() => findNewApartment.isItAffordable({},50)).to.throw("Invalid input!")
        })
        it(`Incorect input`, function(){
            expect(() => findNewApartment.isItAffordable(10,[])).to.throw("Invalid input!")
        })
        it(`Incorect input`, function(){
            expect(() => findNewApartment.isItAffordable([],50)).to.throw("Invalid input!")
        })
    })
})