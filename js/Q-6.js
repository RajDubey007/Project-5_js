
let arr = [2, 5, 6, 3, 8, 9];
let Array1 = squareArrayElements(arr);

function squareArrayElements(arr) {
    return arr.map(num => num * num);
}
  
console.log(Array1);
document.querySelector("h1 ").innerHTML = Array1;