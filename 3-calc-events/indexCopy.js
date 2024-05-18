'use strict';
const EventEmitter = require('events');
const emmiter = new EventEmitter();

const args = process.argv.slice(2);
const numOne = parseFloat(args[0]);
const numTwo = parseFloat(args[1]);
const operation = args.at(-1);

emmiter.on('add', () => {
	const add = require('./add');
	console.log(add(numOne, numTwo));
})

emmiter.on('break', () => {
	const breakNumber = require('./break');
	console.log(breakNumber(numOne, numTwo));
})

emmiter.on('degree', () => {
	const degree = require('./degree');
	console.log(degree(numOne, numTwo));
})

emmiter.on('multiply', () => {
	const multiply = require('./multiply');
	console.log(multiply(numOne, numTwo));
})

emmiter.on('subtract', () => {
	const subtract = require('./subtract');
	console.log(subtract(numOne, numTwo));
})

switch (operation) {
	case 'add':
		emmiter.emit('add');
		break;
	case 'break':
		emmiter.emit('break');
		break;
	case 'degree':
		emmiter.emit('degree');
		break;
	case 'multiply':
		emmiter.emit('multiply');
		break;
	case 'subtract':
		emmiter.emit('subtract');
		break;
	default:
		console.log('Invalid operation. Available operations are: add, multiply');
}
