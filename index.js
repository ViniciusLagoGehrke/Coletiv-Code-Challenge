// To study: UI tests, REACT tests with JEST, how to use Redux!!!
// check the Filho da Nuven video of REACT code interview

//current exercise
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
palindrome('A man, a plan, a canal. Panama') // false