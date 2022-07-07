function compareArrays(arr1, arr2) {
  let result;

  every = (el,ind,arr) => el == arr2[ind] && arr.length == arr2.length;       
  result = arr1.every(every)

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter(el => el >= 0).filter(el => el % 3 == 0 ).map( el => el * 10)
  

  return resultArr; // array
}
