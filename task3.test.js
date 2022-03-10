const Calculator = require('./task3.js');

const testData = new Calculator(3, 2);

describe('my calculator', () => {
  test('adds', () => {
    expect(testData.add()).toBe(5);
  });
  test('subtracts', () => {
    expect(testData.subtract()).toBe(1);
  });
  test('divides', () => {
    expect(testData.divide()).toBe(1.5);
  });
  test('multiplies', () => {
    expect(testData.multiply()).toBe(6);
  });
});