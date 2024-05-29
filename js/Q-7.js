
let numbers = [51, 45, 65, 18, 8, 27, 54, 9, 17, 15, 21];

console.log("Original Array");
console.log( numbers);

let ascendingOrder = numbers.slice().sort((a, b) => a - b);
console.log("Ascending order:", ascendingOrder);

let descendingOrder = numbers.slice().sort((a, b) => b - a);
console.log("Descending order:", descendingOrder);


let myColor = ["Red", "orange", "Green", "Blue"];

console.log("Original Array");
console.log( myColor);

let ascendingColor = myColor.slice().sort();
console.log("Ascending order:", ascendingColor);

let descendingColor = myColor.slice().sort().reverse();
console.log("Descending order:", descendingColor);



