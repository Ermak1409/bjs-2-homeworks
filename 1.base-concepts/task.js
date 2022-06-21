"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let x;
  let x2;
  let Discriminant = b ** 2 - 4 * a * c;

  if (Discriminant > 0) {

    x = (-b + Math.sqrt(Discriminant)) / (2 * a)
    x2 = (-b - Math.sqrt(Discriminant)) / (2 * a)
    arr.push(x, x2);
    return arr;
  } else if (Discriminant === 0) {
    x = -b / 2 * a;
    arr.push(x);
    return arr;
  } else if (Discriminant < 0)
    return arr;
 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
