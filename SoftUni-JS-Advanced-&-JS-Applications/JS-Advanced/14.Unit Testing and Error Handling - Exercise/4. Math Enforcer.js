import { expect } from "chai";
import { mathEnforcer } from "./test.js";

describe(`test`,()=>{
    it (`function addFive works`, ()=>{
        expect(mathEnforcer.addFive(`text`)).to.equal(undefined);
        expect(mathEnforcer.addFive([])).to.equal(undefined);
        expect(mathEnforcer.addFive(`1`)).to.equal(undefined);
        expect(mathEnforcer.addFive({})).to.equal(undefined);
        expect(mathEnforcer.addFive(1)).to.equal(6);
        expect(mathEnforcer.addFive(-1)).to.equal(4);
        expect(mathEnforcer.addFive(0)).to.equal(5);
        expect(mathEnforcer.addFive(1.1)).to.equal(6.1);
        expect(mathEnforcer.addFive(0.1)).to.equal(5.1);
        expect(mathEnforcer.addFive(-0.1)).to.equal(4.9);
        expect(mathEnforcer.addFive(-0.1,2)).to.equal(4.9);
        expect(mathEnforcer.addFive(-0.1,[])).to.equal(4.9);
        expect(mathEnforcer.addFive(-0.1,{})).to.equal(4.9);
        expect(mathEnforcer.addFive(-0.1,`text`)).to.equal(4.9);
    })
    it(`function subtractTen works`, ()=>{
        expect(mathEnforcer.subtractTen(`text`)).to.equal(undefined)
        expect(mathEnforcer.subtractTen([])).to.equal(undefined)
        expect(mathEnforcer.subtractTen({})).to.equal(undefined)
        expect(mathEnforcer.subtractTen([1])).to.equal(undefined)
        expect(mathEnforcer.subtractTen(10)).to.equal(0)
        expect(mathEnforcer.subtractTen(-10)).to.equal(-20)
        expect(mathEnforcer.subtractTen(0)).to.equal(-10)
        expect(mathEnforcer.subtractTen(0.1)).to.equal(-9.9)
        expect(mathEnforcer.subtractTen(11)).to.equal(1)
    })
    it (`function sum works`, ()=>{
        expect(mathEnforcer.sum(1,[])).to.equal(undefined);
        expect(mathEnforcer.sum(1,{})).to.equal(undefined);
        expect(mathEnforcer.sum(`1`,`1`)).to.equal(undefined);
        expect(mathEnforcer.sum(1,`text`)).to.equal(undefined);
        expect(mathEnforcer.sum(`text`,1)).to.equal(undefined);
        expect(mathEnforcer.sum([],1)).to.equal(undefined);
        expect(mathEnforcer.sum({},1)).to.equal(undefined);
        expect(mathEnforcer.sum(1,1)).to.equal(2);
        expect(mathEnforcer.sum(0,0)).to.equal(0);
        expect(mathEnforcer.sum(-1,-3)).to.equal(-4);
        expect(mathEnforcer.sum(-1,3)).to.equal(2);
        expect(mathEnforcer.sum(3,-1)).to.equal(2);
        expect(mathEnforcer.sum(3.1,-1.2)).to.equal(1.9000000000000001);
        expect(mathEnforcer.sum(3.1,-1)).to.equal(2.1);
        expect(mathEnforcer.sum(3,-1.1)).to.equal(1.9);
    })
})