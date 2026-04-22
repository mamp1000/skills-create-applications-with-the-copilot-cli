/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add        - Addition: adds two numbers (a + b)
 *   subtract   - Subtraction: subtracts b from a (a - b)
 *   multiply   - Multiplication: multiplies two numbers (a * b)
 *   divide     - Division: divides a by b (a / b), throws on division by zero
 *   modulo     - Modulo: returns remainder of a / b (a % b), throws on division by zero
 *   power      - Exponentiation: raises a to b (a ** b)
 *   squareRoot - Square root: returns sqrt(a), throws for negative numbers
 *
 * Usage: node calculator.js <operation> <a> [b]
 * Examples:
 *   node calculator.js add 4 2
 *   node calculator.js modulo 10 3
 *   node calculator.js power 2 8
 *   node calculator.js sqrt 9
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

function modulo(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) throw new Error('Cannot take square root of a negative number');
  return Math.sqrt(n);
}

if (require.main === module) {
  const [, , operation, rawA, rawB] = process.argv;
  const a = Number.parseFloat(rawA);

  if (!operation || Number.isNaN(a)) {
    console.error('Usage: node calculator.js <add|subtract|multiply|divide|modulo|power|sqrt|squareRoot> <a> [b]');
    process.exit(1);
  }

  try {
    const isSquareRootOperation = operation === 'sqrt' || operation === 'squareRoot';
    const b = Number.parseFloat(rawB);

    if (!isSquareRootOperation && Number.isNaN(b)) {
      console.error('This operation requires two numeric operands: <a> <b>.');
      process.exit(1);
    }

    let result;
    switch (operation) {
      case 'add':
        result = add(a, b);
        break;
      case 'subtract':
        result = subtract(a, b);
        break;
      case 'multiply':
        result = multiply(a, b);
        break;
      case 'divide':
        result = divide(a, b);
        break;
      case 'modulo':
        result = modulo(a, b);
        break;
      case 'power':
        result = power(a, b);
        break;
      case 'sqrt':
      case 'squareRoot':
        result = squareRoot(a);
        break;
      default:
        console.error(`Unknown operation: "${operation}". Use add, subtract, multiply, divide, modulo, power, or sqrt.`);
        process.exit(1);
    }

    console.log(result);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  sqrt: squareRoot,
};
