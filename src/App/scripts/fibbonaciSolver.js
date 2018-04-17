'use strict';

const multiplyMatrices = (...matrices) => {
  return (matrices.reduce( ([a, b, c], [d, e, f]) => {
    return [a * d + b * e, a * e + b * f, b * e + c * f];
  }));
}

const matrixExponentation = (matrix, n) => {
  if (n === 1) {
    return matrix;
  }

  const halves = matrixExponentation(matrix, Math.floor(n / 2));

  return n % 2 === 0 ? multiplyMatrices(halves, halves) : multiplyMatrices(halves, halves, matrix);
}

const fibonacciSolver = (n) => {
  if (n < 0 || n > 1476) {
    return "Please submit a positive integer below 1477.";
  }

  return (n < 2 ? n : matrixExponentation([1, 1, 0], n - 1)[0]);
}

export default fibonacciSolver;

// TODO: Work with larger numbers