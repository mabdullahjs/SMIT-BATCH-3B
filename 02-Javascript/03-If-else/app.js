// console.log("hello world");

// && ||


// var age = 10;

// // block | scope
// if(age >= 18){
//     console.log("admission milgaya");
// } else {
//     console.log("admission nahi mila");
    
// }




// else if

// var age = 18;

// 15 ya 15 sa 17 ka darmiyaan ha to usko 1000 zyada deka admission dedo 18 sa bara ha to admission dedo 15 sa chota ha to admission mat do

// if(age >= 15 && age <= 17){
//     console.log("1000 zyada do admission lo");   
// } else if (age >= 18 ){
//     console.log("welcome to the gym");
    
// } else {
//     console.log("bhai kaam kro apna.");
    
// }


// nested


// var age = 68

// if(age >= 18){
//     console.log("gym ma admission milaiga");

//     if(age >= 60){
//         console.log("kiya tum krskta ho bhai?");
        
//     } else {
//         console.log("ajao tum 60 sa chota ho");
        
//     }
    
// } else {
//     console.log("admission nahi milaiga");
    
// }



















// var speed = 50;

// if(speed <= 30){
//     console.log("Too slow");
    
// } else if(speed > 30 && speed <= 60){
//     console.log("Safe speeding");
    
// } else if(speed > 60 && speed <= 100){
//     console.log("Speeding");
    
// } else {
//     console.log("Dangerously Fast");
    
// }


// var returnBook = 15

// if(returnBook === 0){
//     console.log("Koi fine nahi");
// } else if(returnBook >= 1 && returnBook <= 5){
//     console.log("$1 ka fine lagaiga ==> $" , returnBook * 1);
// } else if(returnBook >= 6 && returnBook <= 10){
//     console.log("$2 ka fine lagaiga ==> $" , returnBook * 2);
// } else {
//     console.log("$5 ka fine lagaiga ==> $" , returnBook * 5);
// }



// var ticket = true;
// var age = 12;

// if(ticket && age >= 18){
//     console.log("Welcome to our event");
    
// } else {
//     console.log("Hooo kon bhai tum! kisna bulaya ha");
    
// }



// var battery = -2;

// if(battery >= 80 && battery <= 100){
//     console.log("Fully charge");
    
// } else if(battery >= 50 && battery <= 79){
//     console.log("Good Battery");
    
// } else if(battery >= 20 && battery <= 49){
//     console.log("low battery");
    
// } else if(battery <= 20 && battery >= 0){
//     console.log("Charge krla bhai!");
    
// } else {
//     console.log("kiya chah rha ha");
    
// }



// var customerType = "student";
// var age = 20;

// if(customerType === "senior" && age >= 60){
//     console.log("30% ka discount miljayega");
    
// } else if(customerType === "student" && age >= 20){
//     console.log("Bacha ha tu 20% discount lela");
    
// } else {
//     console.log("lena ha to loo warna aga brho.");
    
// }







// var temperature = -10;

// if(temperature <= 10){
//     console.log("Heavy jacket");
    
// } else if(temperature > 10 && temperature <= 20){
//     console.log("sweater");
    
// } else if(temperature > 20 && temperature <= 30){
//     console.log("Tshirt");
    
// } else {
//     console.log("chaddi banyaan");
    
// }






// 7. Water Intake Reminder
// Based on activity level, suggest water intake:

// Sedentary: 2L
// Moderate: 2.5L
// Active: 3L+
// 8. Exam Result Evaluation
// Given three subject marks, print:

// "Pass" if all marks are 40 or above
// "Fail" if any mark is below 40
// 9. App Theme Selection
// Based on time of day (0–23), select theme:

// 6–17: Light Mode
// Otherwise: Dark Mode
// 10. Meal Type Identifier
// Based on time of day (0–23), identify meal:

// 6–10: Breakfast
// 12–14: Lunch
// 18–21: Dinner
// Any other time: Snack




var age = 12;
var country = "Pakistan";
var ban = false;



// if(age >= 18 && age <= 35 && (country === "Pakistan" || country === "India") && !ban){
//     console.log("eligible");
    
// } else {
//     console.log("not eligible");
    
// }





// if(age >= 18 && age <= 35){
//     if(!ban && (country === "Pakistan" || country === "India")){
//         console.log("eligible");
//     } else {
//         console.log("not eligible due to country or ban");
        
//     }
    
    
// }else {
//     console.log("not eligible");
    
// }