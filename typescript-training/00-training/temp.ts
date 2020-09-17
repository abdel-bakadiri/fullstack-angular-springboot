const prices = [10, 20, 30, 40];
let total = 0;
// for (let elt of prices) {
//   total += elt;
// }
// console.log(total);
// prices.forEach((price) => (total += price));
// console.log(total);
total = prices.reduce((accum, current) => accum + current);
console.log(total);
