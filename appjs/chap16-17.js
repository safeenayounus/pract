// ...........................1.........................
// let multi = [];
// ..........................2..............
// let multiArr = [
//     [0,1, 2, 3],
//     [1, 0, 1,2],
//     [2,1,0,1]
// ];
// console.log(multiArr);
//   ..................................3...................................

// for (let i = 0; i <= 10; i++){
//     console.log(i);
// }
// ............................4...............................
// let num = parseInt(prompt("Enter an integer: "));
// let len = parseInt(prompt("Enter an lenght: "));

// for (let i = 1; i <= len; i++) {
//     let result = i * num;
//     console.log(`${num} * ${i} = ${result}`);
// }
// ............................5............................
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// .................................6.................................
// // A
// for (let i = 0; i <= 15; i++){
//     console.log(i);
// }
// // b
// for (let i = 15; i >= 0; i--){
//     console.log(i);
// }
// c

// let i = 1;
// while (i<=20){
//   if(i%2==0){
//   console.log(i)
//   }
//   i++
// }
// d
// let i = 1;
// while (i<=20){
//   if(i%2==1){
//   console.log(i)
//   }
//   i++
// }
// e

// let i = 1;
// while (i<=20){
//   if(i%2==0){
//   console.log(i +"K")
//   }
//   i++
// }
// ...........................7............................
// let arr = ["cake", "apple pie", "cookie", "chips", "patties"];
//   let userInput = prompt("Enter an item to search:");

//   if (arr.includes(userInput)) {
//     alert("is available in list");
//   } else {
//     alert("Item not found in the list.");
// }
// ...........................8............................
// let arr = [24, 53, 78, 91, 12,1000];
// let larNum = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > larNum) {
//     larNum = arr[i];
//   }
// }

// console.log("largest number in  array is: " + larNum);

// ....................9.............................

// let arr = [24, 53, 78, 91, 12,1000];
// let smNum = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] <smNum) {
//     smNum = arr[i];
//   }
// }
// console.log("smaller no is: "+smNum);
  
// ............................10.............................
// let n = 5;
//     for (let i = 1; i <= 10; ++i)
//         console.log(n + " * " + i +
//             " = " + n * i);
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
  