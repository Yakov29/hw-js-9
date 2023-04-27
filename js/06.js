let arr6 = [3, 55, 120, 1, 8, 30, 14, 27, 49, 9];
let max = arr6[0];
for (let i=1; i < arr6.length; i++) {
  if (arr6[i] > max) {
    max = arr6[i];
  }
}
console.log(max);
