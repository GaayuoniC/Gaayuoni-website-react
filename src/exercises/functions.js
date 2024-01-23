//Palidrome function use regular expression

function isPalidrome(str) {
  //remove non-alphanumeric characters and convert to lower string
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  //used the replace method with a regular expression above

  //compare the original string to the reverse
  return cleanStr === cleanStr.split("").reverse().join("");
}

console.log(isPalidrome("A man, a plan, a canal, Panama"));
console.log(isPalidrome("silent"));
