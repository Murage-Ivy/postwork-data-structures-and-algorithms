function reverseString(str) {
  if (typeof str !== "string") {
    return "A string is required";
  }

  if (str.length === 0) {
    return str;
  }

  let length = str.length - 1;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[length];
    length--;
  }
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");

  console.log("Expecting: 'A string is required'");
  console.log("=>", reverseString(12345));

  console.log("");

  console.log("Expecting: 'Length of string should be greater than zero'");
  console.log("=>", reverseString(""));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
