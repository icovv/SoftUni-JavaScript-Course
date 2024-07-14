import { expect } from "chai";
import { rgbToHexColor } from "./test.js";

describe(`test`, ()=> {
    it('should return invalid for red', () => {
        expect(rgbToHexColor(-1,0,5)).to.equal(undefined)
    });
    it('should return invalid for blue', () => {
        expect(rgbToHexColor(0,-1,5)).to.equal(undefined)
    });
    it('should return invalid for green', () => {
        expect(rgbToHexColor(0,5,-1)).to.equal(undefined)
    });
    it('should return invalid for red (over 255)', () => {
        expect(rgbToHexColor(266,0,5)).to.equal(undefined)
    });
    it('should return invalid for blue (over 255)', () => {
        expect(rgbToHexColor(0,266,5)).to.equal(undefined)
    });
    it('should return invalid for green (over 255)', () => {
        expect(rgbToHexColor(0,5,266)).to.equal(undefined)
    });
    it('should return invalid for green (over 255)', () => {
        expect(rgbToHexColor(0,5,266)).to.equal(undefined)
    });
    it('should return invalid for green (over 255)', () => {
        expect(rgbToHexColor(`0`,5,266)).to.equal(undefined)
    });
    it('should return invalid for green (over 255)', () => {
        expect(rgbToHexColor(0,`5`,266)).to.equal(undefined)
    });
    it('should return invalid for green (over 255)', () => {
        expect(rgbToHexColor(0,5,`266`)).to.equal(undefined)
    });
    it('return ivalid', () => {
        expect(rgbToHexColor([1,2,3])).to.equal(undefined)
    });
    it('return ivalid', () => {
        expect(rgbToHexColor([])).to.equal(undefined)
    });
    it('return ivalid', () => {
        expect(rgbToHexColor(1,2,3)).to.equal(`#010203`)
    });
    it('should return invalid for red', () => {
        expect(rgbToHexColor(-1)).to.equal(undefined)
    });
    it('should return invalid for blue', () => {
        expect(rgbToHexColor(`text`)).to.equal(undefined)
    });
    it('should return invalid for green', () => {
        expect(rgbToHexColor(1)).to.equal(undefined)
    });
    it('should return invalid for green', () => {
        expect(rgbToHexColor(255, 158, 170)).to.equal(`#FF9EAA`)
    });
    it('should return invalid for green', () => {
        expect(rgbToHexColor({})).to.equal(undefined)
    });
    it('should return invalid for green', () => {
        expect(rgbToHexColor(1.1,2,3)).to.equal(undefined)
    });
    it('should return invalid for green', () => {
        expect(rgbToHexColor(1,2.2,3)).to.equal(undefined)
    });
    it('should return invalid for green', () => {
        expect(rgbToHexColor(1,2,3.3)).to.equal(undefined)
    });
    it('should return invalid for green', () => {
        expect(rgbToHexColor(3.3)).to.equal(undefined)
    });
    it('should return invalid for green', () => {
        expect(rgbToHexColor(0,0,0)).to.equal(`#000000`)
    });
    it('should return invalid for green', () => {
        expect(rgbToHexColor(255,255,255)).to.equal(`#FFFFFF`)
    });

})