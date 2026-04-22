/**
 * Unit tests for calculator.js
 */

const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  sqrt,
} = require('../calculator');

describe('add', () => {
  test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));
});

describe('subtract', () => {
  test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));
});

describe('multiply', () => {
  test('45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));
});

describe('divide', () => {
  test('20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));
  test('throws on division by zero', () => {
    expect(() => divide(20, 0)).toThrow('Division by zero');
  });
});

describe('modulo', () => {
  test('10 % 3 = 1', () => expect(modulo(10, 3)).toBe(1));
  test('throws modulo by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Division by zero');
  });
});

describe('power', () => {
  test('2^8 = 256', () => expect(power(2, 8)).toBe(256));
  test('supports negative exponent', () => expect(power(2, -1)).toBeCloseTo(0.5));
});

describe('square root', () => {
  test('squareRoot(9) = 3', () => expect(squareRoot(9)).toBe(3));
  test('sqrt alias works', () => expect(sqrt(16)).toBe(4));
  test('throws on negative input', () => {
    expect(() => squareRoot(-1)).toThrow('Cannot take square root of a negative number');
  });
});
