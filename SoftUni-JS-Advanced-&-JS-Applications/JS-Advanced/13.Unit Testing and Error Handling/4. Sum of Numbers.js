import { expect } from "chai"
import { sum } from "./test.js"

describe(`test1`, function (){
    it (`works with array`, () => {
    expect(sum([1,1,1])).to.equal(3);
    })
    it (`arr with 1 el`, ()=>{
    expect(sum([1])).to.equal(1)
    })
    it (`arr with 0 el`, ()=>{
        expect(sum([])).to.equal(0)
    })
    it (`throws error for non array`, () => {
        expect(() => {sum(1)}).to.throw()
    })
})