// string methods

// tolowercase
// touppercase
// slice
// split
// join
// replace
// replace all

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  "Strawberry",
  "Blueberry",
  "Raspberry",
  "Watermelon",
  "Papaya",
  "Kiwi",
  "Grapes",
  "Cherry",
  "Peach",
  "Pear",
  "Plum",
  "Guava",
  "Lemon",
  "Lychee",
  "Coconut",
  "Pomegranate",
];

const allFruitsList = document.querySelector(".allFruits");
const deleteItemList = document.querySelector(".deletedItems");
const deletedItem = []

function renderItem() {
  allFruitsList.innerHTML = "";
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    allFruitsList.innerHTML += `<li>${fruits[i]} <button onclick="deleteitem(${i})">delete</button></li>`;
  }
}

renderItem();

function deleteitem(index) {
  deletedItem.push(fruits[index]);
  fruits.splice(index, 1);
  renderItem();

  deleteItemList.innerHTML = ""
  for(let i = 0; i < deletedItem.length; i++){
    deleteItemList.innerHTML += `<li>${deletedItem[i]}</li>`
  }

}
