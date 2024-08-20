const { expect } = require('chai');
const sinon = require('sinon');
const displayMessage = require('../0-console');

describe('displayMessage', () => {
  it('should print the message to STDOUT', () => {
    const consoleSpy = sinon.spy(console, 'log');
    displayMessage('Hello NodeJS!');
    expect(consoleSpy.calledWith('Hello NodeJS!')).to.be.true;
    consoleSpy.restore();
  });
});
