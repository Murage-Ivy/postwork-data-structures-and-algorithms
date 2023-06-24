function findFirstDuplicate(arr) {
  let result = -1;
  if (arr.length === 0) {
    result;
  }
  // type your code here
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.indexOf(arr[i])) {
      return arr[i];
    }
  }
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 4, 3, 2, 3, 4, 5]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4, 4]));

  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
