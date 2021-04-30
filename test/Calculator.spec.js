var Calculator = require('../src/Calculator')
var expect = require('chai').expect;
var sinon = require('sinon');

describe('Calculator', () => {
/** 
    describe('Sum operation', () => {
        it('Sum two positive integers', () => {
            var result = Calculator.sum(5, 5);
            expect(result).to.equal(10);
        });
    
        it('Sum two negative integers', () => {
            var result = Calculator.sum(-5, -5);
            expect(result).to.equal(-10);
        });
    
        it('Sum one positive and one negative integers', () => {
            var result = Calculator.sum(-5, 5);
            expect(result).to.equal(0);
        });
    
       it('Passing a character as the first number', () => {
            var result = Calculator.sum('a', 5);
            expect(result).to.equal('Not numbers');
        });
    
        it('Passing a character as the second number', () => {
            var result = Calculator.sum(5, 'a');
            expect(result).to.equal('Not numbers');
        });
    
        it('Passing a character as both numbers', () => {
            var result = Calculator.sum('a', 'a');
            expect(result).to.equal('Not numbers');
        });
        
        it('Passing null as the first number', () => {
            var result = Calculator.sum(null, 'a');
            expect(result).to.equal('Not numbers');
        });
    
        it('Sum stub', () => {
            Calculator.sum = sinon.stub().withArgs(5, 5).returns(10);
            expect(Calculator.sum(5, 5)).to.equal(10);
        });
    });    
*/
    describe('Subtraction operation',()=>{
        it('Subtraction 2 numbers', () => {
            var result = Calculator.substraction(20, 5);
            expect(result).to.equal(15);
    });
        it('Subtraction 2 negative int numbers', () => {
        var result = Calculator.substraction(-20, -5);
        expect(result).to.equal(-25);
    });

    it('Subtraction letters', () => {
        var result = Calculator.substraction('a', -5);
        expect(result).to.equal('Not Numbers');
    });
 });
});
