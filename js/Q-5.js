const numbers = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
const positive = Negative(numbers);

function Negative(arr) {
    return arr.filter(num => num >= 0);
  }
  

  document.querySelector("h1").innerHTML = positive;
  