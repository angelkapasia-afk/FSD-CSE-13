/*write a fxn to take number btw 0 to 9 and return in words.*/
const numberToWord = (num) => {
  const words = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];

  if (num >= 0 && num <= 9) {
    return words[num];
  } else {
    return "Invalid number";
  }
};

console.log(numberToWord(9));
console.log(numberToWord(13));
