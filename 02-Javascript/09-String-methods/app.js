

// const fruits = [
//   "Apple",
//   "Banana",
//   "Orange",
//   "Mango",
//   "Pineapple",
//   "Strawberry",
//   "Blueberry",
//   "Raspberry",
//   "Watermelon",
//   "Papaya",
//   "Kiwi",
//   "Grapes",
//   "Cherry",
//   "Peach",
//   "Pear",
//   "Plum",
//   "Guava",
//   "Lemon",
//   "Lychee",
//   "Coconut",
//   "Pomegranate",
// ];

// const allFruitsList = document.querySelector(".allFruits");
// const deleteItemList = document.querySelector(".deletedItems");
// const deletedItem = []

// function renderItem() {
//   allFruitsList.innerHTML = "";
//   for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
//     allFruitsList.innerHTML += `<li>${fruits[i]} <button onclick="deleteitem(${i})">delete</button></li>`;
//   }
// }

// renderItem();

// function deleteitem(index) {
//   deletedItem.push(fruits[index]);
//   fruits.splice(index, 1);
//   renderItem();

//   deleteItemList.innerHTML = ""
//   for(let i = 0; i < deletedItem.length; i++){
//     deleteItemList.innerHTML += `<li>${deletedItem[i]}</li>`
//   }

// }



// string methods

// tolowercase
// touppercase
// slice
// char at
// split
// join
// replace
// replace all


// let username = "Abdullah";
// console.log(username.toLowerCase());
// console.log(username.toUpperCase());



// let city = prompt("enter city name").toLowerCase();

// if(city === "quetta"){
//   console.log("you live in the best city");
  
// }else {
//   console.log("nothing");
  
// }



let username = "Abdullah";
// console.log(username[2]);
// console.log(username.slice(2 , 5));


// console.log(username.charAt(2));

// let sentence = "Babar azam is the best player in the world. Recently Babar azam scored a century after 88 innings. Babar azam is the most run scorer player in Pakistan"

// console.log(sentence.split(" ").reverse().join(" "));


// console.log(sentence.replace("Babar azam" , "Azam khan"));
// console.log(sentence.replaceAll("Babar azam" , "Azam khan"));
