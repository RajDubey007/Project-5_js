let arr = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log("Sum using for loop:", sum);
document.querySelector("h1").innerHTML = "Sum using for loop:" + sum;
sum = 0;

arr.forEach((el) => sum += el);
console.log("Sum using forEach loop:", sum);
document.querySelector("h2").innerHTML = "Sum using forEach loop:"+ sum;