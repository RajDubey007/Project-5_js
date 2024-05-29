words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

const ans = words.filter((word) => word.length > 8);

console.log(ans);
document.querySelector("h1").innerHTML = ans;
