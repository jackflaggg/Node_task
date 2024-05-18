'use strict';
const breakNumber = (numOne, numTwo) => {
	return numOne === 0 || numTwo === 0 ? 0 : numOne / numTwo;
}

module.exports = breakNumber;