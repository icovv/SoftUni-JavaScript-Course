import { expect } from "chai";
import { solve } from "./test.js";

describe(`Demo`, function(){
    it (`works`, function(){
        expect (solve(),`Brawo`).to.equal(1);
    })
})