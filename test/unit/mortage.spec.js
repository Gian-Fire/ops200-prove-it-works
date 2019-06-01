const expect = require('chai').expect;
const Mortgage = require('../../src/lib/Mortgage');

describe('Mortgage Calculator', () => {
  let mortgage = null;

  beforeEach(() => {
    mortgage = new Mortgage(420000, 3.75, 30, 12);
  });

  it("should have monthly payment function", () => {
    expect(mortgage.monthlyPayment).to.exist;
  });

  it("should calculate monthly payment correctly", () => {
    expect(mortgage.monthlyPayment()).to.equal(1945.09);
  });

  it("should calculate monthly payment correctly", () => {
    expect(mortgage.monthlyPayment()).to.equal(1945.09);
  });

  it("should calculate monthly payment correctly", () => {
    expect(mortgage.monthlyPayment()).to.equal(1945.09);
  });

});