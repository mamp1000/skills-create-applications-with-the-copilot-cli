/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add        - Addition: adds two numbers (a + b)
 *   subtract   - Subtraction: subtracts b from a (a - b)
 *   multiply   - Multiplication: multiplies two numbers (a * b)
 *   divide     - Division: divides a by b (a / b), throws on division by zero
 *   modulo     - Modulo: returns remainder of a divided by b (a % b), throws on division by zero
 *   power      - Exponentiation: raises base to the exponent (base ** exponent)
 *   squareRoot - Square Root: returns √n, throws on negative input
 *
 * Usage: node calculator.js <operation> <a> [b]
 * Example: node calculator.js add 4 2
 * Example: node calculator.js squareRoot 9
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a minus b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b; throws if b is zero
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

// Modulo: returns the remainder of a divided by b; throws if b is zero
function modulo(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a % b;
}

// Exponentiation: returns base raised to the power of exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root: returns the square root of n; throws if n is negative
function squareRoot(n) {
  if (n < 0) throw new Error('Cannot take square root of a negative number');
  return Math.sqrt(n);
}

// CLI entry point
if (require.main === module) {
  const [, , operation, rawA, rawB] = process.argv;
  const a = parseFloat(rawA);
  const b = parseFloat(rawB);

  // squareRoot only needs one argument
  const singleArg = operation === 'squareRoot';

  if (!operation || isNaN(a) || (!singleArg && isNaN(b))) {
    console.error('Usage: node calculator.js <add|subtract|multiply|divide|modulo|power|squareRoot> <a> [b]');
    process.exit(1);
  }

  try {
    let result;
    switch (operation) {
      case 'add':        result = add(a, b); break;
      case 'subtract':   result = subtract(a, b); break;
      case 'multiply':   result = multiply(a, b); break;
      case 'divide':     result = divide(a, b); break;
      case 'modulo':     result = modulo(a, b); break;
      case 'power':      result = power(a, b); break;
      case 'squareRoot': result = squareRoot(a); break;
      default:
        console.error(`Unknown operation: "${operation}". Use add, subtract, multiply, divide, modulo, power, or squareRoot.`);
        process.exit(1);
    }
    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
