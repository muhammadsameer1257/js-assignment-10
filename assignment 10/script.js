


let arr = ["2", 2, "a", 3, 6, true, false, [1, "2", [1, "a", "b", true, false], "a"], false, true];

function countCharacters(nestedArray) {

  var   countOfNum = "";
   var countOfStr = "";
   var  countOfBool = "";

    function helper(array) {
        for (let item of array) {
            if (Array.isArray(item)) {
                helper(item); // Recursively handle nested arrays
            } else if (typeof item === 'string') {
                countOfStr++ // Count characters in strings
            }else if (typeof item === 'number') {
                countOfNum++ // Count characters in strings
            }else if (typeof item === 'boolean') {
                countOfBool++ // Count characters in strings
            }
        }
    }

    helper(nestedArray); // Start the recursive function
    return countOfNum,countOfStr , countOfBool; // Return the total character count
}

console.log(`Number : ${countOfNum} "\n" String : ${countOfStr} "\n" Boolean : ${countOfBool}`);