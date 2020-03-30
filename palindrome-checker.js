function palindrome(str) {
// first we split the input string into an array of every single character and we create two empty arrays we will fill and compare
  let arr = str.split("");
  let alphaNumOne = [];
  let alphaNumTwo = [];

// then we create a regex that will help us match only letters and digits
  let regex = /[A-Z0-9]/i;

// now we use this regex to filter characters - every letter and digit gets pushed to one of our empty arrays as a lowercase
  for (let i = 0; i < arr.length; i++) {
    if (regex.test(arr[i]) == true) {
      alphaNumOne.push(arr[i].toLowerCase());
    }
  }

// then we iterate from the end of filtered characters and push them one by one to second empty array
  for (let i = 0; i < alphaNumOne.length; i++) {
    alphaNumTwo.push(alphaNumOne[alphaNumOne.length - 1 - i]);
  }

// now we compare if the sentence is indeed a palindrome - we take first and last letter, if they fit - then 2nd and 2nd-last, etc. First letter that doesn't fit returns false and we finish the loop. If loop finishes without problem - it does nothing. ;)
  for (let i = 0; i < alphaNumOne.length; i++) {
    if (alphaNumOne[i] === alphaNumTwo[i]) {
      // do nothing
    } else {
      return false;
    }
  }

// lastly, if whole loop went through without returning false - we return true, because our sentence is a palindrome
  return true;
}
