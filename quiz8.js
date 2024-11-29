const arr1 = [3, 5, 7, 2];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [11, 3, 1];

function average(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
}

console.log(average(arr1)); 
console.log(average(arr2));
console.log(average(arr3)); 
