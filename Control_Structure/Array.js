// Write an array of numbers and returns a new array with each number doubled.
let array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
  console.log(array[i] * 2);
}
let arry2 = array.map((num) => {
  return num * 2;
});
console.log(arry2);
console.log("========================");

// Write a string and returns the number of vowels in the string.
let vowel = "aeiouAEIOU";
let str = "hello Worldee";
let cnt = 0;

for (let i of str) {
  if (vowel.includes(i)) {
    cnt++;
  }
}
console.log(cnt);
console.log("======================");

// Write array of numbers and returns the largest number in the array.

let array3 = [1, 55, 669, 2, 353];
console.log(Math.max(...array3));
console.log("======================");

// Write a string and returns the string with the first letter of each word capitalized.
let str2 = "hello world";
let newString = str2
  .split(" ")
  .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
  .join(" ");
console.log(newString);
console.log("======================");

// Write an array of numbers and returns a new array with only the even numbers.

let array4 = [1, 5, 6, 9, 3, 4, 10, 0, 2, 5];
let newarray4 = array4.filter((item) => item % 2 === 0);
console.log(newarray4);
console.log("======================");

// Write a function that takes a number and returns true if the number is prime, and false otherwise.

function prime(num) {
  if (num > 0) {
    for (let i = 2; i <= num * num; i++) {
      if (num % 2 === 0) {
        return false;
      }
    }
  }
  return true;
}
console.log(prime(3));
console.log("======================");

// Write a function that takes an array  and returns the frequent element in the array.
function frequentCheck(arr) {
  let freq = {};
  arr.forEach((elem) => {
    if (str.hasOwnProperty()) {
      freq[elem]++;
    } else {
      freq[elem] = 1;
    }
  });
  return freq;
}

console.log(frequentCheck([1, 2, 3, 4, 4, 1, 0,0]));

// Q==> write a function to get the last element of an Array. passing a parameter 'n' will return the first 'n' element of the array
