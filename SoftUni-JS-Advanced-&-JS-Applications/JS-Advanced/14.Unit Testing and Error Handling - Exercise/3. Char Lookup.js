import { expect } from "chai";
import { lookupChar } from "./test.js";

describe(`test`, ()=>{
    it (`return undefined`, ()=>{
        expect(lookupChar(1,-1)).to.equal(undefined)
        expect(lookupChar({},-1)).to.equal(undefined)
        expect(lookupChar([],-1)).to.equal(undefined)
        expect(lookupChar(`hey`,[])).to.equal(undefined)
        expect(lookupChar(`hey`,{})).to.equal(undefined)
        expect(lookupChar(`hey`,`hey`)).to.equal(undefined)
        expect(lookupChar(`heoe`,1.2)).to.equal(undefined)
    })
    it (`return Incorect index`, ()=>{
        expect(lookupChar(`hey`,3)).to.equal(`Incorrect index`)
        expect(lookupChar(`hey`,-1)).to.equal(`Incorrect index`)
        expect(lookupChar(`hey`,500)).to.equal(`Incorrect index`)
    })    
    it (`correct `, ()=>{
        expect(lookupChar(`hey`,2)).to.equal(`y`)
        expect(lookupChar(`hey`,0)).to.equal(`h`)
        expect(lookupChar(`hey`,1)).to.equal(`e`)
        
    })




})