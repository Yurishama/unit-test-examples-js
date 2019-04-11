var Login = require('../src/Login')
var expect = require('chai').expect;
var should = require('chai').should();

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

describe('Login users test', () => {

    // beforeEach(() => {
    //     Login.loadUsers(['Jose', 'Salomon', 'Camilo']);
    // });

    // it('Existing user', () => {
    //     var userExists = Login.userExists('Jose');
    //     expect(userExists).to.be.true;
    // });

    // it('Not existing user', () => {
    //     var userExists = Login.userExists('Luis');
    //     expect(userExists).to.be.false;
    // });

    // it('Existing user with promise', () => {
    //     return Login.userExistsPromise('Jose').should.eventually.equal(true);
    // });

    // it('Not existing user with promise', () => {
    //     return Login.userExistsPromise('Luis').should.eventually.equal(false);
    // });

});
