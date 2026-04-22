/**
 * Unit tests for calculator.js
 *
 * Covers all four basic operations:
 *   - add      (addition)
 *   - subtract (subtraction)
 *   - multiply (multiplication)
 *   - divide   (division)
 *
 * Image examples used as baseline: 2+3, 10-4, 45*2, 20/5
 */

const { add, subtract, multiply, divide } = require('../calculator');

// --- Addition ---
describe('add', () => {
  // Image example: 2 + 3 = 5
  test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));

  test('adds two positive numbers', () => expect(add(10, 20)).toBe(30));
  test('adds a positive and a negative number', () => expect(add(10, -3)).toBe(7));
  test('adds two negative numbers', () => expect(add(-4, -6)).toBe(-10));
  test('adding zero returns the same number', () => expect(add(7, 0)).toBe(7));
  test('adds floating point numbers', () => expect(add(0.1, 0.2)).toBeCloseTo(0.3));
});

// --- Subtraction ---
describe('subtract', () => {
  // Image example: 10 - 4 = 6
  test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));

  test('subtracts two positive numbers', () => expect(subtract(20, 5)).toBe(15));
  test('result is negative when b > a', () => expect(subtract(3, 10)).toBe(-7));
  test('subtracts a negative number (double negative)', () => expect(subtract(5, -3)).toBe(8));
  test('subtracting zero returns the same number', () => expect(subtract(9, 0)).toBe(9));
  test('subtracts floating point numbers', () => expect(subtract(1.5, 0.5)).toBeCloseTo(1.0));
});

// --- Multiplication ---
describe('multiply', () => {
  // Image example: 45 * 2 = 90
  test('45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));

  test('multiplies two positive numbers', () => expect(multiply(6, 7)).toBe(42));
  test('multiplies by zero returns zero', () => expect(multiply(99, 0)).toBe(0));
  test('multiplies a positive and a negative number', () => expect(multiply(5, -3)).toBe(-15));
  test('multiplies two negative numbers returns positive', () => expect(multiply(-4, -5)).toBe(20));
  test('multiplies floating point numbers', () => expect(multiply(2.5, 4)).toBeCloseTo(10));
});

// --- Division ---
describe('divide', () => {
  // Image example: 20 / 5 = 4
  test('20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));

  test('divides two positive numbers', () => expect(divide(100, 4)).toBe(25));
  test('divides resulting in a decimal', () => expect(divide(7, 2)).toBeCloseTo(3.5));
  test('divides a negative by a positive', () => expect(divide(-10, 2)).toBe(-5));
  test('divides two negative numbers returns positive', () => expect(divide(-12, -3)).toBe(4));
  test('divides zero by a number returns zero', () => expect(divide(0, 5)).toBe(0));

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });
  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero');
  });
});
