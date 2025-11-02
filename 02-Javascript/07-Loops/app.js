// console.log("hello Loops");

// for, while, dowhile

// initialization
// condition check
// increment

// for(let i = 0; i < 10; i++){
//     console.log("hello world from loop" , i);
// }

// console.log("console after loop");

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// `` backtic string ES6 Ecma script

// let username = "mabdullah"
// let age = 21;
// let city = "karachi";

// username is (mabdullah) user age is (21) and he live in (karachi)

// console.log("username is " + username + " user age is " + age + " live in " + city);

// console.log(`username is ${username} and user age is ${age} live in ${city}`);

// console.log("adsdas
//     asd
//     ");

// console.log(`

//     asdas

//     asd`);

// i ka matlb iteration
// let num = 7;

// for(let i = 1; i <= 10; i++){
//     console.log(`${num} x ${i} = ${num*i}`);

// }

// nested loop

// for(let i = 1; i <= 5; i++){
//     console.log("outer loop i" , i);

//     for(let j = 1; j <= 5; j++){
//         console.log("inner loop j" , j);

//         for(let k = 1; k <= 3; k++){
//             console.log("d inner k" , k);

//         }
//     }

// }

// console.log("console after loop");

// let num = 0

// for(let i = 1; i <= 1000; i++){
//     console.log(i);
//     num += 1

//     for(let j = 1; j <= 20; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//         num += 1

//     }

// }

// console.log(num);

// console.log(fruit[0]);
// console.log(fruit[1]);
// console.log(fruit[2]);
// console.log(fruit[3]);

// for(let i = 0; i < fruit.length)

// let sentence = "Learning Javascript is fun and rewarding!"

// function parameter and argument
// array ka push and splice method
// DOM manipulation (input value, innerhtml)

// let num = 10;

// for (let i = 0; i < 1000; i++) {
//     num += 1;
//     console.log("value of num is " , num);

// }

// while loop

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++
// }

// dowhile aik dafa laazmi chalaiga

// let i = 100;
// do {
//     console.log(i);
//     i++
// } while(i < 10)

// let fruit = ["apple", "banana", "orange", "mango"];

// console.log(fruit[0]);
// console.log(fruit[1]);
// console.log(fruit[2]);
// console.log(fruit[3]);
// console.log(fruit[4]); // undefined

// for(let i = 0; i < fruit.length; i++){
//     console.log(fruit[i]);

// }
const ol = document.querySelector("#ol");
const div = document.querySelector(".container");

// // 1. Fruits
// const fruits = [
//   "Apple", "Banana", "Mango", "Pineapple", "Grapes",
//   "Orange", "Strawberry", "Kiwi", "Papaya", "Watermelon"
// ];

// for(let i = 0; i < fruits.length; i++){
//     ol.innerHTML += `<li>${fruits[i]}</li>`
// }

// // 2. Vegetables
// const vegetables = [
//   "Carrot", "Broccoli", "Spinach", "Potato", "Tomato",
//   "Cabbage", "Onion", "Garlic", "Peas", "Cauliflower"
// ];

// for(let i = 0; i < vegetables.length; i++){
//     console.log(vegetables[i]);
//     div.innerHTML += `<p>${vegetables[i]}</p>`

// }

// // 3. Colors
// const colors = [
//   "Red", "Blue", "Green", "Yellow", "Purple",
//   "Orange", "Pink", "Black", "White", "Brown"
// ];

// // 4. Animals
// const animals = [
//   "Dog", "Cat", "Elephant", "Lion", "Tiger",
//   "Giraffe", "Zebra", "Monkey", "Bear", "Horse"
// ];

// // 5. Countries
// const countries = [
//   "USA", "Canada", "Brazil", "Germany", "France",
//   "India", "Japan", "Australia", "China", "Mexico"
// ];

// // 6. Car Brands
// const carBrands = [
//   "Toyota", "Ford", "BMW", "Mercedes", "Honda",
//   "Tesla", "Audi", "Hyundai", "Nissan", "Volkswagen"
// ];

// // 7. Programming Languages
// const programmingLanguages = [
//   "JavaScript", "Python", "Java", "C++", "C#",
//   "PHP", "Ruby", "Go", "Swift", "TypeScript"
// ];

// // 8. Sports
// const sports = [
//   "Football", "Basketball", "Tennis", "Cricket", "Baseball",
//   "Golf", "Hockey", "Volleyball", "Rugby", "Boxing"
// ];

// // 9. Planets
// const planets = [
//   "Mercury", "Venus", "Earth", "Mars", "Jupiter",
//   "Saturn", "Uranus", "Neptune", "Pluto", "Ceres"
// ];

// // 10. Days of the Week
// const daysOfWeek = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// for (let i = 0; i < daysOfWeek.length; i++) {
//     console.log(daysOfWeek[i]);
//     ol.innerHTML += `<li>${daysOfWeek[i]}</li>`
    
// }


// let sentence = "Learning Javascript is fun and rewarding!"
// let vowel = 0;
// for(let i = 0; i < sentence.length; i++){
//     console.log(sentence[i]);
//     if(sentence[i] === 'a' || sentence[i] === 'e' || sentence[i] === 'i' || sentence [i] === 'o' || sentence[i] === "u"){
//         vowel += 1
//     }
    
// }

// console.log(vowel);



// let numbers = [23, 45, 12, 67, 34, 89, 21];
// let num = 0

// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
//     if(num < numbers[i]){
//         num = numbers[i]
//     }
    
// }

// console.log("maximum number is " , num);



// for(let i = 1; i <= 10; i++){
//     console.log(`square of ${i} is ${i**2}`);
    
// }


// let word = "Hello, welcome to the world of loops!"
// let count = 0
// for(let i = 0; i < word.length; i++){
//     console.log(word[i]);
//     if(word[i] === "l"){
//         count += 1
//     }
    
// }

// console.log('count of l ===>' , count);


// let i = 10;
// while(i > 0){
//     console.log(i);
//     i--
    
// }


// let num = 36

// for(let i = 0; i <= 36; i++){
//     if(36 % i === 0){
//         console.log(i , "is divisble by 36 ");
        
//     }
// }


// let words = ["apple", "banana", "grapefruit", "fig", "watermelon"];

// for(let i = 0; i < words.length; i++){
//     if(words[i].length > 5){
//         console.log(words[i]);
        
//     }
// }





// 10
// 10+9+8+7+6+5+4+3+2+1+0

// let num = 0

// let userInput = +prompt("number likhda bhai.")
// for(let i = userInput; i > 0; i--){
//     console.log(i);
//     num += i
// }

// console.log("sum of given number upto 1 is " , num);



// let items = [4, 7, 1, 3, 9, 7, 2]
// let target = 7

// for(let i = 0; i < items.length; i++){
//     if(items[i] === target){
//         console.log(i);
//         break
        
//     }
    
// }


// break and continue


// for(let i = 0; i < 10; i++){
//     if(i === 4){
//         break
//         continue
//     }

//     console.log(i);
    
// }