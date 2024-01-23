//Home made array minimum method:
const numbers = [4, 56, 73, 2, 23, 100];

function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}
console.log(myArrayMin(numbers));

//home made maximum method
function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
console.log(myArrayMax(numbers));

//Using sort method to sort object arrays
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "Toyota", year: 2010 },
];

const sortedObject = cars.sort((a, b) => a.year - b.year);
console.log(sortedObject);
