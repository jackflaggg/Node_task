'use strict';
const args = process.argv.slice(2);
const numOne = parseFloat(args[0]);
const numTwo = parseFloat(args[1]);
const operation = args.at(-1);

let result;

switch (operation) {
	case 'add':
		const add = require('./add');
		result = add(numOne, numTwo);
		break;
	case 'multiply':
		const multiply = require('./multiply');
		result = multiply(numOne, numTwo);
		break;
	case 'breakNumber':
		const breakNumber = require('./break');
		result = breakNumber(numOne, numTwo);
		break;
	case 'subtract':
		const subtract = require('./subtract');
		result = subtract(numOne, numTwo);
		break;
	case 'degree':
		const degree = require('./degree');
		result = degree(numOne, numTwo);
		break;
	default:
		result = 'Invalid operation. Available operations are: add, multiply';
}

console.log('Result:', result);