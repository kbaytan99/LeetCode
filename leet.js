/*
  * Write a program that receives a text and transforms natural language into
  * "hacker language" (actually known as "leet" or "1337"). This language
  * is characterized by replacing alphanumeric characters.
  * with the alphabet and numbers in "leet".
  * (Use the first option of each transformation. For example "4" for "a")
  */

const leetChar = {
  A:"4",
  B:"3",
  C:"(",
  D:"|)",
  E:"{",
  L:"|_",
  T: "7",
  O: "0",
  " ": " "
}

const leet = "LeEt CoDe"

let hackerLanguage = '';

for(i = 0; i < leet.length; i++){ hackerLanguage += leetChar[leet[i].toUpperCase()]; }
console.log(hackerLanguage);