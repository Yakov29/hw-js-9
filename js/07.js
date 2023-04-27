let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];
for (let i=0; i < arr7.length; i++) {
  if (arr7[i] % 2 === 0) {
    evenNumbers.push(arr7[i]);
  }
}
console.log(evenNumbers);
