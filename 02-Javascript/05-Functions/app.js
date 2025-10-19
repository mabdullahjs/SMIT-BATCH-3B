// console.log("hello world");

// function testing() {
//     console.log("hello world");
//     console.log("hello world");
//     console.log("hello world");
//     console.log("hello world");
// }

// testing()

// function greetUser(){
//     console.log("hello abdullah");

// }

// greetUser()

// argument
// parameter

// function greetUser(username){ // parameter receive krna
//     console.log("hello " + username);

// }

// greetUser("abdullah")
// greetUser("Usman") // argument pass krna

// console.log("Hello world 1");
// console.log("Hello world 2");
// console.log("Hello world 3");
// console.log("Hello world 4");
// console.log("Hello world 5");

// alert()
// prompt()

// function reuseable() {
//   console.log("Hello world 1");
//   console.log("Hello world 2");
//   console.log("Hello world 3");
//   console.log("Hello world 4");
//   console.log("Hello world 5");
// }

// reuseable()
// reuseable()
// reuseable()

// argument
// parameter

// function greetUser(username){
//     console.log("hello " + username);

// }

// greetUser("abdullah") // argument pass krna

// greetUser("Usman")

// function greetUser(username , email , age) {
//     console.log("hello " + username + " email " + email + " age " + age);

// }

// greetUser("abdullah" , "abdullah@gmail.com" , 21)

// function sum(num1 , num2){
//     console.log("total is ==>" , num1 + num2);

// }

// sum(20 - 5 , 20)
// sum(30 , 10)

// undefined
// null

// let username = "ada";
// console.log(username);

// let username = null
// console.log(username);

// testing()

// return

// let username = prompt("enter your name");

// console.log(prompt("enter your age"));

// console.log(username);

// return ka matlb jaha function call hua ha waha return hui wi value ajayegi

// return ka baad koi code nahi likhta return func ka last ma ata ha
// return fucntion ma aik dafa hota ha

// function testing(){
//     console.log("data");
//     return "return kr rha hon"
// }

// let username = testing();

// console.log(testing());

// console.log(username);

// function greetUser(username) {
//   console.log("hello " + username);
//   return "hello " + username
// }

// greetUser("abdullah")
// console.log(greetUser("abdullah"));
















// function greetUser(username){
//     console.log("hello " + username);
//     return "hello " + username
    
// }

// let greetings = greetUser("abdullah")
// console.log(greetings);


// console.log(greetUser("usman"));


// const heading = document.querySelector("#head");
// heading.innerHTML = "Changed through js"
// // console.log(heading.innerHTML);




// const p = document.querySelector(".para");

// p.innerHTML = "testing para"



// const heading = document.querySelector("h1");

// heading.innerHTML = "hellow"


// function testing(){
//     console.log("hello world");
    
// }



// const input = document.querySelector("#input");


// function getVal(){
//     console.log(input.value);
    
// }


// const heading = document.querySelector("#state");
// const btn = document.querySelector("#btn");

// function changeState(){
//     console.log(heading.innerHTML);
//     console.log(btn.innerHTML);

//     if(heading.innerHTML === "Onn"){
//         heading.innerHTML = "Off"
//         btn.innerHTML = "Turn on"
//     } else {
//         heading.innerHTML = "Onn"
//         btn.innerHTML = "Turn off"
//     }
    
// }


// const input = document.querySelector("#input");
// const result = document.querySelector("#result");

// function greetuser(){
//     console.log(input.value);
//     result.innerHTML = "Hello " + input.value


//     input.value = ""
    
// }


// function clearScreen(){
//     result.innerHTML = ""
// }





// head.innerHTML = "change through javascript"


// const head = document.querySelector("#head");
// const input = document.querySelector("#input");


// function testing(){
//     console.log(input.value);
//     head.style.color = "white"
//     head.style.backgroundColor = "red"
    
// }




// input sa value leka neecha screen pa print krna ha
// button ka click pa turn off and turn onn krna ha

const body = document.querySelector("body")


function changeColor(color){
    console.log(color);
    body.style.backgroundColor = color
    

}