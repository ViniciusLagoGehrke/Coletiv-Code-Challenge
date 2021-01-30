/*write a function that given a string, return true if the string is a
palindrome and false if it isn’t. Include spaces and punctuation in deciding if
the string is a palindrome.*/

function palindrome(string){
  let initialString = string;

  let arrayString = string.split("");
  let backArray = [];

  for(let i = 0; i < initialString.length; i++){
    backArray.push(arrayString.pop())
  }

  let finalString = backArray.join("")

  console.log('',initialString, '\n', finalString)

  if(finalString == initialString){
    return true
  }

  return false;
}

module.exports = palindrome;

palindrome('racecar') // true
palindrome('table') // false
palindrome('A man, a plan, a canal. Panama') /* false (spaces and punctuation included in deciding if
the string is a palindrome) */