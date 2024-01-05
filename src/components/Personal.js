const person = {
  name: "Ralf",
  job: "Coach",
};

let isRalfCoach;

person.job == "Coach" ? (isRalfCoach = true) : (isRalfCoach = false);

console.log(isRalfCoach);

const age = 14;
let stageOfLife;

age <= 14
  ? (stageOfLife = "child")
  : age <= 18
    ? (stageOfLife = "teenager")
    : (stageOfLife = "adult");

console.log(stageOfLife);

// Test the function
for (let i = 1; i <= 30; i++) {
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

//Basic logical functions for practing coding

function calculateTriangleAre(base, height) {
  let area;
  if (base >= 0 && height >= 0) {
    area = 0.5 * base * height;
    return area;
  } else {
    console.log("Both base and height must not be negative");
    return null;
  }
}
console.log(calculateTriangleAre(5, 8));

//Basic logical functions for practing coding
//Calculate the area of a triangle with 3 sides

function calculateThreeDifferentSizeTriangle(a1, b1, c1) {
  let a;
  let b;
  let c;
  let s = (a1 + b1 + c1) / 2;
  let area;
  if (a1 >= 0 && b1 >= 0 && c1 >= 0) {
    area = Math.sqrt(s * ((s - a1) * (s - b1) * (s - c1)));
    return area;
  } else {
    console.log("The numbers must be positive numbers");
    return null;
  }
}
console.log(calculateThreeDifferentSizeTriangle(-1, 6, 7));

//Function for a leap year

function leapYearDetermination(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year");
  } else if (year % 4 !== 0) {
    console.log(year + " is not a leap year");
  } else {
    console.log("Something went wrong, check your year and try again");
  }
}
console.log(leapYearDetermination(2004));

//Function for string checking

function wordCheckForJava(str) {
  if (str.length < 4) {
    console.log(str + " is less than four letters");
    return false;
  }
  //Extract the first four characters

  const front = str.substring(0, 4);
  if (front == "java") {
    return true;
  } else {
    return false;
  }
}
console.log(wordCheckForJava("jav"));

//ex bootcamp trial

let a = 19;
let message;
if (a >= 18) {
  message = "You are allowed to vote";
} else {
  message = "You are not allowed to vote";
}
console.log(message);

//objects being changed by another variable
//because the reference is the same for both

const john = {
  name: "John",
  age: 30,
  job: "developer",
};

const jane = john;
jane.name = "Jane";

console.log("john:", john);
console.log("jane:", jane);
