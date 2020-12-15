const { sum, basicTree } = require('./helloWorld');


describe('A set of tests', () => {
  it('adds to numbers', () => {
    expect(
      sum(1, 2)
    ).toBe(3);
  });

  it('if the value is less than 5 return true, else return false', () => {
    
    expect(
      basicTree(4)
    ).toBe(true)

    expect(
      basicTree(6)
    ).toBe(false)

    expect(
      basicTree(5)
    ).toBe(true);

  });

});
