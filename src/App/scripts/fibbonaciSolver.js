'use strict';

function fibonacciSolver( nthValue ) {

  if (nthValue < 0) {
    throw new Error('You cannot use a negative value.');
  } else if (nthValue === 0 || nthValue === 1) {
    return nthValue;
  }

  let beforePrev = 0,
    prev = 1,
    currentVal;

  for (var i = 1; i < nthValue; i++) {
    currentVal = prev + beforePrev;
    beforePrev = prev;
    prev = currentVal;
  }

  return currentVal;
}

export default fibonacciSolver;