function permute(initialString) {

  let permutedArray = [];
  //check first if it is a string
  if (initialString.length === 0) return permutedArray;
  if (initialString.length === 1) return initialString;
  if(typeof initialString !== "string"){
    return "Not a string to permute"
  }

  //iterates the string
  for (let i = 0; i < initialString.length; i++){
    let letter = initialString[i]; //saves the letter for specific index
    let remainingString = initialString.slice(0, i) + initialString.slice(i + 1, initialString.lenght);//removes the letter on index and combines the substrings before and after the same index

    //iterates now over the remainingString
    for (let j = 0; j < remainingString.length; j++) {
      permutedArray.push(letter + permute(remainingString)[j]) //recursively permuting and pushing result to the final array
    }
  }
  return permutedArray;
}

module.exports = permute;