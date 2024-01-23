// const person = {
//   name: "Ralf",
//   job: "Coach",
// };

// let isRalfCoach;

// person.job == "Coach" ? (isRalfCoach = true) : (isRalfCoach = false);

// console.log(isRalfCoach);

// const age = 14;
// let stageOfLife;

// age <= 14
//   ? (stageOfLife = "child")
//   : age <= 18
//     ? (stageOfLife = "teenager")
//     : (stageOfLife = "adult");

// console.log(stageOfLife);

// Test the function
// for (let i = 1; i <= 30; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i + " FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log(i + " Buzz");
//   } else if (i % 5 === 0) {
//     console.log(i + " Fizz");
//   } else {
//     console.log(i);
//   }
// }

//Basic logical functions for practing coding

// function calculateTriangleAre(base, height) {
//   let area;
//   if (base >= 0 && height >= 0) {
//     area = 0.5 * base * height;
//     return area;
//   } else {
//     console.log("Both base and height must not be negative");
//     return null;
//   }
// }
// console.log(calculateTriangleAre(5, 8));

//Basic logical functions for practing coding
//Calculate the area of a triangle with 3 sides

// function calculateThreeDifferentSizeTriangle(a1, b1, c1) {
//   let a;
//   let b;
//   let c;
//   let s = (a1 + b1 + c1) / 2;
//   let area;
//   if (a1 >= 0 && b1 >= 0 && c1 >= 0) {
//     area = Math.sqrt(s * ((s - a1) * (s - b1) * (s - c1)));
//     return area;
//   } else {
//     console.log("The numbers must be positive numbers");
//     return null;
//   }
// }
// console.log(calculateThreeDifferentSizeTriangle(-1, 6, 7));

//Function for a leap year

// function leapYearDetermination(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log(year + " is a leap year");
//   } else if (year % 4 !== 0) {
//     console.log(year + " is not a leap year");
//   } else {
//     console.log("Something went wrong, check your year and try again");
//   }
// }
// console.log(leapYearDetermination(2004));

//Function for string checking

// function wordCheckForJava(str) {
//   if (str.length < 4) {
//     console.log(str + " is less than four letters");
//     return false;
//   }
//Extract the first four characters

//   const front = str.substring(0, 4);
//   if (front == "java") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(wordCheckForJava("jav"));

//ex bootcamp trial

// let a = 19;
// let message;
// if (a >= 18) {
//   message = "You are allowed to vote";
// } else {
//   message = "You are not allowed to vote";
// }
// console.log(message);

//objects being changed by another variable
//because the reference is the same for both

// const john = {
//   name: "John",
//   age: 30,
//   job: "developer",
// };

// const jane = john;
// jane.name = "Jane";

// console.log("john:", john);
// console.log("jane:", jane);

// bubble sort function

const numbers5 = [300, 200, 43, 1, 6, 450, 0, -2];

function bubbleSort(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
      //the length of j is -1
      if (numbers[j] > numbers[j + 1]) {
        //note use less than sign(<) if sorting in descending order!!!!
        //swap if in the wrong way
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
      }
    }
  }
  return numbers;
}
console.log(bubbleSort(numbers5));

//factorial calculation!!!Dont really get this one Re-work

function factorialCalculation(item) {
  if (item === 0 || item === 1) {
    return 1;
  } else {
    return item * factorialCalculation(item - 1);
  }
}

console.log(factorialCalculation(5));

// Factorial of an array of numbers using the factorialSum function above ln 149

const arrFactorials = [1, 2, 3, 4, 5, 6];

function factorialArraySum(item) {
  let sum = 0;
  for (let i = 0; i < item.length; i++) {
    sum += factorialCalculation(item[i]);
  }
  return sum;
}

const results = factorialArraySum(arrFactorials);
console.log("Array factorial is: " + results);

//for each array method,works like a for loop, but more elegant!!
const myNumbers = [1, 2, 3, 4, 5, 8];

myNumbers.forEach((item) => {
  console.log(item);
});

//includes method

const myColors = ["red", "purple", "violet", "yellow", "blue", "green"];

const newMyColors = myColors.includes("red");
console.log(newMyColors);

//filter....used the most in addition with map()
//super useful method.

//reduce method;
//accumulater, current value to be
//below code is the usual suspect but the reduce does better:
const azan = [10, 20, 30, 25, 14];
let sum = 0;
for (let i = 0; i < azan.length; i++) {
  sum += azan[i];
}
console.log(sum);
//the sum is the accumulator in the reduce method

//reduce array method here:

function reducerCallback(sum, arrItem) {
  return (sum += arrItem);
}
//the reducer call back is simply a name function being used
//in place of it one can use the arrow function within the reduce method!!!
const result2 = azan.reduce(reducerCallback, 0);
console.log(result2);

//using the reduce method to calc the average of an array in one line.!!

const result3 = azan.reduce((sum, item) => sum + item, 0) / azan.length;
console.log(result3);
//Applied the reduce method to an array with objects and it works!!!!

const products = [
  {
    productName: "iPhone",
    price: 600,
    availableItems: 2,
  },
  {
    productName: "Refrigerator",
    price: 400,
    availableItems: 3,
  },
  {
    productName: "car",
    price: 350,
    availableItems: 3,
  },
];

const totalPrice = products.reduce(
  (sum, product) => sum + product.availableItems * product.price,
  0 //Dont forget to put the zero index here!
);
console.log("The total price for all the items is   " + totalPrice);

//function to return number of items, total price and total quantity in an object
function totalOfAllProducts(product) {
  let sum = 0;
  let numOfItems = 0;
  for (let i = 0; i < product.length; i++) {
    sum = sum + product[i].price * product[i].availableItems;
    numOfItems = numOfItems + product[i].availableItems;
  }
  //returns an array, you can also return an object.
  return [product.length, numOfItems, "Total sum:" + sum];
}
console.log(totalOfAllProducts(products));

//basic fizzBuzz function

function fizzBuzzer(n) {
  for (let i = 1; i <= n; i++) {
    //the i must be less than or equal to the params in the main function ie 'n'
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + " FizzBuzz");
    } else if (i % 3 === 0) {
      console.log(i + " Buzz");
    } else if (i % 5 === 0) {
      console.log(i + " Fizz");
    } else {
      console.log(i);
    }
  }
}
console.log(fizzBuzzer(15));

//using the quick sort method as against the standard bubble sort

const sortNumbers = [45, 3, 5, 0, , 5, 10, 2, 1];

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const left = [];
  const pivot = array[0];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(sortNumbers));

//Tried it out quicksort here just to fully understand the logic!!
const attak = [35, 2, 6, 8, 0, 4, 10.5, 10];

// function fastSort(num) {
//   if (num.length <= 1) {
//     return num;
//   }
//   const pivot = num[0];
//   const left = [];
//   const right = [];
//   for (let i = 1; i < num.length; i++) {
//     if (num[i] < pivot) {
//       left.push(num[i]);
//     } else {
//       right.push(num[i]);
//     }
//   }
//   return fastSort(left).concat(pivot, fastSort(right));
// }
// console.log(fastSort(attak));

// console.log(numbers.sort((a, b) => b - a));

//Bubblesort function
//Now I fully understand the logic in bubble sort and quick sort as well!!
// function bubbleSort1(arr) {
//   const len = arr.length;

//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }
// const list = [63, 24, 5, 7, 11, 90, 0, 5];

// const sortedList = bubbleSort1(list);
// console.log(sortedList);
// console.log(typeof list);

const myTally = [54, 34, 1, 5, 15, 76, 500, -5, 0, -1];

const students = ["Staicy", "Arefin", "Christian", "Mert", "Andy", "Roberto"];

console.log(students[Math.floor(Math.random() * students.length)]);

//finding the longest word in a sentence
//making use of regular expressions

function findLongestWord(sent) {
  const words = sent.split(" ");

  let longestWord = "";
  for (const word of words) {
    const cleanedWord = word.replace(/[^a-zA-Z]/g, "");

    if (cleanedWord.length > longestWord.length) {
      longestWord = cleanedWord;
    }
  }
  return longestWord;
}
const saying = "The quick brown fox jumped over the lazybuyyuing cat";
console.log(findLongestWord(saying));

//Removing duplicates in an array
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}
const duplicates = [1, 2, 2, 3, 3, 10, 10, 4, 5, 5, 4];

console.log(removeDuplicates(duplicates));

//Finding a missing number in an array

function findMissingNumber(arr, n) {
  const expectedSum = (n * (n + 1)) / 2;

  //calculate sum of the given array
  const actualSurm = arr.reduce((sum, num) => (sum += num), 0);

  //Find missing number
  const missingNumber = expectedSum - actualSurm;

  return missingNumber;
}
const arrayWithMissingNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const n = 10;

console.log(findMissingNumber(arrayWithMissingNumber, n));

//looping through an array using a for loop
//and placing them in a list

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

let flen = fruits.length;
let texti = "<ul>";

for (let i = 0; i < flen; i++) {
  texti += "<li>" + fruits[i] + "</li>";
}
texti += "</ul>";
console.log(texti);

fruits.push("Lemons");
console.log(fruits);

//ECMAScript5 introduced a new array method 'Array.isArray()'
console.log(Array.isArray(fruits));

// returns true if the array is really an array and not an object

//copywithin an array
console.log(fruits);
console.log(fruits.copyWithin(2, 0));
console.log(fruits.copyWithin(2, 0, 2));

//using the flat method ()
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr);

//splicing method
//specifies the position to start, then how many to delete and then what to add
const animals = ["Banana", "Orange", "Apple", "Mango"];
animals.splice(2, 0, "Lemon", "Kiwi");
console.log(animals);

// introduced in 2023, the toSpliced()creates a new array without altering the
// original array

console.log(animals.sort().reverse().join(" ")); //reverse and join the array!!

//using the sort method with a compare function for sorting numbers
//you can use it in place of a bubble sort function. NOTE!

const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => a - b);
points.sort(function (a, b) {
  return b - a;
});
console.log(points);

//sorting an array in a random manner
const randomsort = points.slice().sort(function () {
  return 0.5 - Math.random();
});

console.log(randomsort);
//the above is not very accurate since it favours some numbers so the
//Fisher Yates Method is used. It was introduced in data science in 1938!!!

//Fisher Yates Method
//A bit more complicated than the sort with a compare function

for (let i = points.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}
console.log(points);
