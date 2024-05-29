
const inputArray = [8, 18, 7, 63, 16];
const asciiArray = convertToASCII(inputArray);

function convertToASCII(arr) {
    return arr.map(num => String.fromCharCode(num));
  }
  
console.log(asciiArray);