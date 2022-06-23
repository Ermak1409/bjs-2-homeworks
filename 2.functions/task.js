// Задание 1
function getArrayParams(arr) {
  let min = Infinity, max = -Infinity, sum = 0, avg;
  n = 0;
  for (i = 0; i < arr.length; ++i) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
    sum += arr[i];
    n++;
  }
  avg = Number((sum / n).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max=0;

  for (j=0; j < arrOfArr.length ; j++){
    if (func(arrOfArr[j]) > max) max = func(arrOfArr[j]) 
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let min, max, res
  min = arr[0];
  max = min;
    
  for (q=0; q < arr.length ; ++q){
    if (arr[q] > max) max = arr[q];
    if (arr[q] < min) min = arr[q];
    res = Math.abs(min - max)
  }
  return res;
}
