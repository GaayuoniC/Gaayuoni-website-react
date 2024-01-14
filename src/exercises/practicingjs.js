// fizz buzz code

// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(i + "FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log(i + "Buzz");
//     } else if (i % 5 === 0) {
//       console.log(i + "Fizz");
//     } else console.log(i);
//   }
// }

// console.log(fizzBuzz(30));

//Quick sort for bubble sort;
const numbers = [1, 9, 10, 0, 23, 4, 89, 43, 0];
// function quickSort(n) {
//   if (n.length <= 1) {
//     return n;
//   }
//   const pivot = n[0];
//   const right = [];
//   const left = [];

//   for (let i = 1; i < n.length; i++) {
//     if (n[i] < pivot) {
//       left.push(n[i]);
//     } else {
//       right.push(n[i]);
//     }
//   }
//   return quickSort(left).concat(pivot, quickSort(right));
// }

// console.log(quickSort(numbers));

//Reduce array method
// let results = numbers.reduce((arr, item) => (arr += item));
// console.log("The total of the array is: " + results);

//array methods
// const num = 299;

// let answer = +num
//   .toString()
//   .split("")
//   .reduce((arr, item) => (arr *= item));
// console.log(answer);

//Determining todays date;
//TO NOTE; the months start with index zero '0' for January!!!!!!
// function isToday(date) {
//   return new Date().toDateString() === date.toDateString();
// }
// console.log(isToday(new Date(2024, 0, 12)));

// String methods
const words = "Hello World";

console.log(words.length);
console.log(words.toUpperCase());
console.log(words.split(""));
console.log(words.split("").reverse().join(""));
console.log(words.slice(3, 7));

//function to reverse a string
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("Hello"));

const myarray = [1, 2, 3, 4, 5, 6, 7];

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

const fibarray = myarray.map((item) => fibonacci(item)); //implementing it with an array and map function
console.log(fibarray);

let finalFib = []; //using for loop to get the fibonacci sums for a fixed number
for (let i = 0; i < 10; i++) {
  finalFib.push(fibonacci(i));
}
console.log(finalFib);

const myDoctor = "doctor gaayuoni"; //trying to capitalize the first letter of a string here

const splitMyDoctor = myDoctor.split("");
// console.log(splitMyDoctor);

const subDoctor =
  myDoctor.substring(0, 1).toUpperCase() + myDoctor.substring(1);
console.log(subDoctor);

//capitalize the first letter of words in a sentence
//split it, map it with the charAt then uppercase it and then add the slice()before joining them up

// function capWords(sent) {
//   return sent
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }
// const sentence = "this is a very simple example";

// console.log(capWords(sentence));

//This is currying a function, very weird!!!
function add(a) {
  return function (b) {
    return a + b;
  };
}

console.log(add(3)(4));

function divideByHalf(sum) {
  console.log(Math.floor(sum / 2));
}

function operationOnSum(num1, num2, operation) {
  let sum = num1 + num2;
  operation(sum);
}
const total = operationOnSum(3, 3, divideByHalf);
// console.log(total + " is the correct answer");

//binary search on a sorted array!!!TO D=*
function binarySearch(arr, value, startPos, endPos) {
  if (startPos > endPos) return -1;

  let middleIndex = Math.floor(startPos + endPos) / 2;

  if (arr[middleIndex] === value) return middleIndex;
  else if (arr[middleIndex] > value) {
    return binarySearch(arr, value, startPos, middleIndex - 1);
  } else {
    return binarySearch(arr, value, middleIndex + 1, endPos);
  }
}

//Right rotation of an array function
function rotateRight(arr, rotations) {
  if (rotations == 0) {
    return arr;
  }
  for (let i = 0; i < rotations; i++) {
    let element = arr.shift();
    arr.push(element);

    //right rotate code:
    //let element = arr.pop();
    //arr.unshift(element)
  }
  return arr;
}
const shifters = [2, 3, 4, 5, 7, 9];
console.log(rotateRight(shifters, 0));

//Write the code to find out if two strings are anagrams

function isAnagram(str1, str2) {
  //change all to lower case first in order to eliminate case sensitivity
  let a = str1.toLowerCase();
  let b = str2.toLowerCase();

  //sort the strings,then combine the array to a string and then compare them
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}

console.log(isAnagram("debit card", "bad credit"));

//finding vowels in a string using arrow function!

const findVowels = (str) => {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let char of str.toLowerCase()) {
    //changes all the strings characters to lower case!
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};
console.log(findVowels("kzzpx"));

//Turning an object into an array

let obj = { id: "1", name: "user44", age: "66", work: "web designer" };

//convert the keys to arrays using Object.keys()
// console.log(Object.keys(obj));

//convert values to arrays using - Object.values()
// console.log(Object.values(obj));

//convert both keys and values using- Object.entries()
// console.log(Object.entries(obj));

console.log(
  Object.keys(obj).concat(Object.values(obj)).concat(Object.entries(obj))
);
const anotherSentence = "Why do you want to be big?";
