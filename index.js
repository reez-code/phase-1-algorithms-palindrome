function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split("").reverse().join("");
  return reversedWord === word;
}

/* 
  Add your pseudocode here
  const letters = word.split("")
  const reverse = letters.reverse();
  if(word === reverse.join("")){
  return true;
  
  }else {
  return false
}
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));
}

module.exports = isPalindrome;
