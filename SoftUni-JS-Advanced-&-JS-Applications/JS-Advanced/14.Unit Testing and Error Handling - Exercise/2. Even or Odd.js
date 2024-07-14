import { expect } from "chai";
import { isOddOrEven } from "./test.js";

describe(`tests`, () => {
    it(`tests for undefined`, () =>{
    expect(isOddOrEven([])).to.equal(undefined)
    expect(isOddOrEven({})).to.equal(undefined)
    expect(isOddOrEven({prop:`Hello`})).to.equal(undefined)
    expect(isOddOrEven(1)).to.equal(undefined)})

    it(`tests for even`, () =>{
        expect(isOddOrEven(`string`)).to.equal(`even`)
        expect(isOddOrEven(``)).to.equal(`even`)})
    
    it(`tests for odd`, () =>{
            expect(isOddOrEven(`strin`)).to.equal(`odd`)
            expect(isOddOrEven(`1`)).to.equal(`odd`)})
    
})