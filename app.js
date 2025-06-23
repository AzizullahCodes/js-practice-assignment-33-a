// js-practice-assignment-33
// ____________________________________
// ques no 1
//  Display Input Value
// Create:
// An <input> box
// A <button>
// A <p> tag
// When you click the button:
// Get the input value using .value
// Show it inside the <p> tag using .innerHTML
// ___________________________
// ans 
// function pushValue(){let x = document.getElementById('inp').value;
//     document.getElementById('pp').innerHTML = x;
// }
// ==================================================================================================
// ques no 2 
// Create:
// Two <input> boxes for numbers
// A <button>
// A <p> tag to show the result
// When you click the button:
// Get both input values
// Add them
// Show the result in the <p> tag
// =================
// ans 
// function calculator(){let num1 = Number(document.getElementById('inp1').value);
//     let num2 = parseFloat(document.getElementById('inp2').value);
//     let result = num1 + num2;
//     document.getElementById('pp').innerHTML = result;
// }
// ===========================================================================================
// ques no 3
// Create:
// An <h1> with any text
// A <button>
// When you click the button:
// Use .getElementById and .innerHTML to change the <h1> text
//  to “Hello JavaScript!”
// =======================
// ans 
// function changeText(){document.getElementById('heading').innerHTML = 'Hello JavaScript';}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ques no 4
//  Show Message on Button Click
// Create:
// A <button>
// A <div>
// When you click the button:
// Use .innerHTML to show “You clicked the button!” in the <div>
// ==========================
// ans 
// function push(){document.getElementById('div').innerHTML = 'You clicked the button!';}
// ---------------------------------------------------------------------------------------------
// ques no 5
// Create:
// An <input> box with some text in it
// A <button>
// A <p> tag
// When you click the button:
// Get the input value
// Show it in the <p> tag
// Then clear the input box (.value = "")
// ==============
// ans 
// function pushClear(){let x = document.getElementById('div').value;
//     document.getElementById('pp').innerHTML = x;
//     document.getElementById('div').value = '';
    
// }
// ====================================================================================
// ques no 6
// Show Name in Uppercase
// Create:
// An <input> box for a name
// A <button>
// A <p> tag
// When you click the button:
// Get the name from the input
// Convert it to UPPERCASE
// Show it in the <p> tag using .innerHTML
// ===============
// ans 
// function push(){let a = document.getElementById('inp').value;
//        a = a.toUpperCase();
//     document.getElementById('pp').innerHTML = a;
// }
// --------------------------------------------------------------------------------------
// ques no 7
// Show Length of Text
// Create:
// An <input> box
// A <button>
// A <p> tag
// When you click the button:
// Get the input value
// Calculate its length
// Show “Length: [number]” in the <p> tag
// ====================
// ans 
// function lengthCalculator(){let a = document.getElementById('inp').value;
//                           let b = a.length;
//                           document.getElementById('pp').innerHTML = b;
// }
// ===========================================================================================
// ques no 8
//  Greeting Function
// Question:
// Write a function named greetUser that takes one argument name and prints 
// Hello, [name]!.
// ✅ Example:
// greetUser("Azizullah") → should print Hello, Azizullah!
// ______________________
// ans 

// function greetUser(){let a = document.getElementById('inp').value;
//     alert('Hello',a)
// }
// _________________________________________________________________________________
// ques no 9
//  Find Square
// Question:
// Make a function findSquare that takes a number and returns its square.
// ✅ Example:
// findSquare(5) → should return 25
// _________________
// ans 
// function square(){let num = document.getElementById('inp').value;
//                     num = Number(num);
//                     let result = num * num;
//                    document.getElementById('div').innerHTML = result;
// }
// ________________________________________________________________________________
// ques no 10
// Check Number Type and Sign
// Question:
// Write a program that takes a number.
// If it’s greater than zero, check if it’s even or odd.
// If it’s zero, print “Zero”.
// If it’s less than zero, print “Negative number”.
// Example:
// Input: 4 → Output: Positive and Even
// Input: -3 → Output: Negative number
// Input: 0 → Output: Zero
// ____________
// ans 
// function nested(){let num = Number(document.getElementById('inp').value);
//     if(num > 0){if(num % 2 === 0){console.log('positive and even')}
// else{console.log('odd Number')}}
//     else{console.log('zero')}
// }
// _________________________________________________________________________________________
// ques no 11
// Check Grade
// Question:
// Write a program that takes a percentage:
// If it’s 90 or above, print “Grade A”.
// If it’s 80–89, print “Grade B”.
// If it’s 70–79, print “Grade C”.
// If it’s below 70, print “Fail”.
// Use nested if to check ranges.
// Example:
// Input: 85 → Output: Grade B
// __________________
// ans 
// function grade(){let percent = Number(document.getElementById('inp').value);
//     if(percent >= 90){document.write('Grade A')}
//     else if(percent >= 80 && percent <=89){document.write('Grade B')}
//     else if(percent >= 70 && percent <= 79){document.write('Grade C')}
//     else{document.write('Fail')}
// }
// _________________________________________________________________________________________
// ques no 12
//  Password Strength Checker
// Question:
// Write a program that checks a password:
// If length is at least 8
// If it contains a number, print “Strong Password”
// Else, print “Weak Password: add numbers”
// Else, print “Password too short”
//_________________________
// ans 
// let password = prompt("Enter your password:");

// if (password.length >= 8) {
//   // Check if it contains a number
//   if (/\d/.test(password)) {
//     console.log("Strong Password");
//   } else {
//     console.log("Weak Password: add numbers");
//   }
// } else {
//   console.log("Password too short");
// }

// function check() {
//       // Get value from input
//       let password = document.getElementById("passwordInput").value;

//       // Check conditions
//       if (password.length >= 8) {
//         if (/\d/.test(password)) {
//           document.getElementById("result").innerHTML = "Strong Password";
//         } else {
//           document.getElementById("result").innerHTML = "Weak Password: add numbers";
//         }
//       } else {
//         document.getElementById("result").innerHTML = "Password too short";
//       }
//     }
    // function check(){let password = document.getElementById('passWordInput').value;
    //     if(password.length >= 8){if(/\d/.test(password)){
    //         document.getElementById('result').innerHTML = 'strong password'
    //     }else{document.getElementById('result').innerHTML = 'weak password add number'}}
    //     else{document.getElementById('result').innerHTML = 'short password'}
    // }
    // ____________________________________________________________________________________
    // ques no 13
//      Round a number
// Question:
// Create a variable price = 25.6789.
// Use .toFixed() to round it to 2 decimal places.
// Print the result.

// Expected Output:
// 25.68
// ________________
// ans 
// let number = Number(prompt('enter number'))
// let result = number.toFixed(2);
// document.write(result);
// ____________________________________________________________________________
// ques no 14
// ____________________
// ans 
// Write a program that takes a radius from the user 
// (using prompt or an input field) and calculates the circumference 
// of a circle using the formula:

// Circumference = 2 × Math.PI × radius
// Expected output:
// Show the result in the console or on the webpage.
// ______________
// ans 
// function calculates(){let radius = parseFloat(document.getElementById('inp').value);
//     let circumference = 2 * Math.PI * radius;
//          circumference = circumference.toFixed(2);
//     document.getElementById('pp').innerHTML = circumference + ' ' + 'meter';
// }
// __________________________________________________________________________________
// ques no 15 
// Create a number variable. Convert it to a string using .toString(). Display both the original number and the converted string on the HTML page.

// Expected Output:
// Shows:
// Number: 123  
// String: "123"
// ___________________
// ans 
// function string(){let num = Number(document.getElementById('inp').value);
//                  let type = typeof num;
//                  document.getElementById('p1').innerHTML = type; 
//                  let str = num + '';
//                  document.getElementById('p2').innerHTML = str;
//                  let type2 = typeof str;
//                  document.getElementById('p3').innerHTML = type2;

// }
// __________________________________________________________________________________________
// ques no 16 
// Write a program that takes a string from the user and displays its 
// first character using .charAt().
// Example:
// Input: "Hello"
// Output: H
// function charat(){let str = document.getElementById('inp').value;
//                let firstChar = str.charAt();
//                document.getElementById('pp').innerHTML = firstChar;
// }
// _________________________________________________________________________________________
// ques no 17
//  Capitalize User Input
// Write a program that:
// Takes a user’s name using prompt().
// Converts the whole name to uppercase using .toUpperCase().
// Shows the result using alert() or console.log().
// Input: "john doe"  
// Output: "JOHN DOE"

// function capitalize(){let name = document.getElementById('inp').value;
//              let result = name.toLowerCase();
//              document.getElementById('pp').innerHTML = result;
// }
// _______________________________________________________________________________
// QUES ON 18 
// Round a User’s Age
// Ask the user to enter their age as a decimal number (e.g., 23.7).
// Use Math.round() to round it to the nearest whole number.
// Show the rounded age using alert or console.log.
// Example:
// Input: 23.7  
// Output: 24
// _______________
// ans 
// function round(){let age = document.getElementById('inp').value;
//                  let result = Math.round(age);
//                  document.getElementById('pp').innerText = result;
// }
// _________________________________________________________________________________
// ques no 19 
// Write a program that:
// Takes a number input from the user using prompt().
// Uses Math.sqrt() to find its square root.
// Displays the result using alert().
// Example:
// Input: 25
// Output: The square root of 25 is 5
// _______________________________
// ans 
// function sqrt(){ let num = document.getElementById('it').value;
//                  let result = Math.sqrt(num);
//                  document.getElementById('ph').innerText = result
// }
// ____________________________________________________________________________________
// ques no 20 
// Write a program that takes two numbers from the user.
// Calculate the absolute difference between them and display the result using Math.abs().

// Example:
// Input: 7 and 12  
// Output: The absolute difference is 5
// ____________
// ans 
// function abs(){let num1 = document.getElementById('it1').value ;
//     let num2 = document.getElementById('it2').value;
//     let difference = num1 - num2;
//     document.getElementById('ph1').innerText = difference;
//     let result = Math.abs(difference);
//     document.getElementById('ph2').innerHTML = result;
// }
// _________________________________________________________________________________________
// ques no 21
// Write a program that takes three numbers from the user (using prompt) and shows the largest number using Math.max.
// Show the result using alert.
// Example:
// If the user enters: 5, 12, 9 — it should alert: The maximum number is 12.
// function max(){let num1 = document.getElementById('it1').value;
//     let num2 = document.getElementById('it2').value; 
//     let num3 = document.getElementById('it3').value; 
//     let largest = Math.max(num1,num2,num3);
//     document.getElementById('ph').innerHTML = largest;
// }
// ___________________________________________________________________________
// ques no 22 
// Create an array of 5 numbers. Use Math.max with the ... (spread) operator to find and log the largest number to the console.

// Example
// let numbers = [15, 8, 22, 5, 10];
// // Use Math.max to find the largest and log it
// Expected console output: The maximum number is 22
// _____________
// ans 
// let numbers = [4,3,55,9,32];
// let largest = Math.max(...numbers);
// console.log(largest);
// -----------------------------------------------------------------------------------
// ques no 23
// find max number of array by for loop 
// __________________
// ans 
// let array = [4,1,6,8,0];
// let greatestNumber = array[0];
// for(var i = 0; i < array.length; i++){if(array[i] > greatestNumber){ greatestNumber = array[i]}}
// console.log(greatestNumber)
// ____________________________________________________________________________________
// ques no 24
// Create an array of 6 numbers. Use the spread operator with Math.max() 
// to find and print the largest number.
// Expected output: The maximum number is ... (the biggest number from your 
// array).
// ans 
// let array = [7,3,8,9,55,0];
// let maxNumber = array[0];
// for(var i = 0; i < array.length; i++){if(array[i]> maxNumber){
//     maxNumber = array[i]
// }}
// console.log(maxNumber)
// ___________________________________________________________________________________
// ques no 25
// Find the Minimum in an Array
// Task:
// Create an array of 6 numbers. Use the spread operator with 
// Math.min() to find and print the smallest number.
// Expected output: The minimum number is ... (the smallest
//  number from your array).
// ____________
// ans 
// let array = [7,3,9,33,8];
// // let min = Math.min(...array);
// // console.log(min)
// let minNumber = array[0];
// for(var i = 0; i < array.length; i++){if(array[i]< minNumber)
// {minNumber = array[i]}
// }
// console.log(minNumber)
// ___________________________________________________________________________________
// ques no 26 
// Random Number between 1 and 10
// Question:
// Use Math.random() to generate a random integer between 1 and 10. Log it.
// Expected Output Example:
// Random integer between 1 and 10: 7
// _____________________
// ans 
// function random(){let random = Math.random()*10;
//     random = random + 1;
//     random = Math.floor(random);
//     document.getElementById('ph').innerText = random;
// }
// _________________________________________________________________________________
// ques no 27 
// reate a global variable message with value "Hello World".
// Write a function changeMessage that declares a local variable message 
// with value "Hello JavaScript" and logs it.
// After calling the function, log the global message again.
// Expected Output:
// Hello JavaScript  
// Hello World
// __________________
// ans 
// var message = 'hello world';
// function changeMessage(){var message = 'Hello javascript';
//     console.log('local',message);
//     window.message = 'i love js';
// }
// changeMessage();
// console.log('global',message)
// _________________________________________________________________________________
// ques no 28
// Modify Global Variable
// Create a global variable count with value 10.
// Write a function increaseCount that adds 5 to the global count.
// Call the function and then log count.
// Expected Output:
// 15
// ___________________
//  var count = 10;
// function increaseCount(){count = count + 5;
//     console.log(count);
// }
// increaseCount()
// ___________________________________________________________________________________
// ques no 29 
// Create a global variable price with value 100.
// Write a function addTax that calculates price + 20 and logs it.
// Do not declare a local price inside the function.
// Expected Output:
// 120
// _________________
// ans 
// function addTax(){let update = document.getElementById('it').value;
//     update = Number(update);
//                 let newUpdate = update + 20;
//                 document.getElementById('ph').innerHTML = newUpdate;
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ques no 30 
// Create a global variable name with value "Alice".
// Write a function greet that declares a local variable name with value 
// "Bob" and logs "Hello Bob".
// Outside the function, log "Hello Alice".
// Expected Output:
// Hello Bob  
// Hello Alice
// ________________
// ans 
// let name = 'Alice';
// function greet(){let name = 'Bob';
//     console.log('Hello',name);
// }
// greet();
// console.log('Hello',name)
// _________________________________________________________________________________________
// ques no 31
// Add Two Numbers
// Task:
// Write a function addNumbers that takes two numbers as parameters, adds 
// them, and returns the sum.
// Expected Output:
// let result = addNumbers(5, 7);  
// console.log(result); // 12
// ________________
// ans 
// function addNumbers(){let num1 = document.getElementById('it1').value;
//     let num2 = document.getElementById('it2').value;
//     let sum = Number(num1) + Number(num2);
//     document.getElementById('ph').innerHTML = sum;
// }
// ____________________________________________________________________________________
// ques no 32
// Write a function findMax that takes two numbers and returns the
//  larger number.
// Expected Output:
// console.log(findMax(10, 20)); // 20
// console.log(findMax(15, 5));  // 15
// ____________
// ans 
// function findMax(){let num1 = document.getElementById('it1').value;
//     let num2 = document.getElementById('it2').value;
//     let large = Math.max(num1,num2);
//     document.getElementById('ph').innerHTML = large;
// }
// ___________________________________________________________________________________________
// ques no 33
// Use an image of a fan (one still image and one with fan blades blurred to look like it’s spinning). Add a button to turn the fan on/off.
// Expected behavior:
// Fan Off → Button shows Turn On
// Fan On → Button shows Turn Off
// _______________________
// ans 
// let heading = document.getElementById('heading');
// let button = document.getElementById('btn');
// let fanImg = document.getElementById('fan');

// let isOn = false;
// function fanOnOff(){if(isOn){isOn = false;
//     heading.innerHTML = 'fan on'
//     fanImg.src = './assets/fan-blades-blureed.jpg'
//     button.innerHTML = 'fan off'
// }
// else{isOn = true;
//     heading.innerHTML = 'fan off';
//     fanImg.src= './assets/stop fan.jpg'
//     button.innerHTML = 'fan on';
// }

// }
// ________________________________________________________________________________________
// ques no 34
// Create a simple page with a background color and text. Add a button to 
// toggle between light mode and dark mode.
// Expected behavior:
// Light Mode → Button shows Dark Mode
// Dark Mode → Button shows Light Mode
// _____________
// ans 
// let heading = document.getElementById('heading');
// let themeImg = document.getElementById('picture');
// let button = document.getElementById('btn');
// var isApeared = false;
// function themeChanger(){if(isApeared){
//     isApeared = false;
//     heading.innerText = 'Light Theme';
//     themeImg.src = './assets/lightThreeImg.jfif';
//     button.innerHTML = 'Dark Theme';
// }else{isApeared = true;
//     heading.innerHTML  = 'Dark Themes';
//     themeImg.src = './assets/themeImgThree.jfif' ;
//     button.innerHTML = 'Light Themes'
// }}
// ___________________________________________________________________________________
// ques no 35
//  a cute emoji (😃). Add a button to hide/show it.
// Expected behavior:
// Emoji visible → Button says Hide Emoji
// Emoji hidden → Button says Show Emoji
// _________________
// ans 
// let heading = document.getElementById('heading');
// let picture = document.getElementById('emoji');
// let button = document.getElementById('btn');
// let isApeared = false;
// function emojiFunction(){if(isApeared){isApeared = false;
//     heading.innerHTML = 'Show emoji';
//     button.innerHTML = 'show emoji';
//     picture.src = '';

// }else{isApeared = true;
//     heading.innerHTML = 'Hide emoji';
//     button.innerHTML = 'Hide  emoji';
//     picture.src = './assets/emoji.jfif';

// }}
// _____________________________________________________________________________
// ques no 36
// When the user moves the mouse over the image, change the image to a 
// different picture. When the mouse moves out, change it back to the original.

// Expected Output:
// Hover: Image changes to another image.
// Mouse out: Image changes back to the first image.
// ________________
// ans 
// let heading = document.getElementById('heading');
// let pic = document.getElementById('emoji');
// let button = document.getElementById('btn');
// let isApeared = true;
// function hide(){
//     pic.src = '';
//     button.innerHTML = 'emoji is hidden'
// }

// function show(){
//     pic.src = './assets/emoji.jfif';
//     button.innerHTML = 'emoji is shown';
// }
// __________________________________________________________________________________
// ques 37 
// bulb on off function
// ____________________
// ans 
// let heading = document.getElementById('heading');
// let picture = document.getElementById('bulb');
// let button = document.getElementById('btn');
// let isOn = false;

// function bulbOnOff(){if(isOn){isOn = false;
//     heading.innerHTML = 'Bulb on';
//     picture.src = './assets/pic_bulbon.jfif';
//     button.innerHTML = 'Bulb off';
// }
// else{ isOn = true;
//     heading.innerHTML = 'Bulb off';
//     picture.src = './assets/pic_bulboff.jfif';
//     button.src = 'Bulb on';}}
// _______________________________________________________________________________________
// ques no 38
// Create a button that, when clicked, replaces the class of
//  a <div> with a new class that changes its background color to 
// blue and text color to white.

// Expected behavior:
// Before click → no styling
// After click → <div> has blue background & white text.
// ________________
// ans 
// function styling(){let a = document.getElementById('heading');
//                   a.className = 'headingStyle';
// }
// ____________________________________________________________________________________
// ques no 39
// Create a <h1> with some text and a button. When the button is clicked:
// Add a class "highlight" that changes the text color to red.
// If clicked again, remove the class (use toggle).
// Expected behavior:
// Button toggles red color on and off.
// _________________
// ans 
// function styling(){let a = document.getElementById('heading');
//     a.classList.add('heading-heading');
// }

// function remove(){document.getElementById('heading').classList.remove('heading-heading')}

// function toggle(){document.getElementById('heading').classList.toggle('heading-heading')}
// ________________________________________________________________________________________________
// ques no 40
// style js by className
// ______________
// ans
// function styling(){document.getElementById('heading').className = 'lovely';}
// __________________________________________________________________________________________
// ques no 41 
// styling by classList 
// ___________________
// ans 
// function add(){let a = document.getElementById('heading');
//          a.classList.add('superHeading')
// }
// function remove(){let a = document.getElementById('heading');
//          a.classList.remove('superHeading')}
         
//          function toggle(){let a = document.getElementById('heading');
//          a.classList.toggle('superHeading')}
// _________________________________________________________________________________
// ques no 42
// style by js by using for loop
// __________________
// ans 
// function styling(){let get = document.getElementsByClassName('list');
    
//     for(let i = 0; i < get.length; i++){
//         get[i].className = 'listlist';
//     }
// }
// _______________________________________________________________________________________
// ques no 43 
// getElementByTagName 
// _______________
// ans 
// function add(){let a = document.getElementsByTagName('p');
//     console.log(a);
//     for(let i = 0; i < a.length; i++){a[i].classList.add('beautiful');}
    
// }
// function remove(){let a = document.getElementsByTagName('p');
//     console.log(a);
//     for(let i = 0; i < a.length; i++){a[i].classList.remove('beautiful');}
    
// }
// function toggle(){let a = document.getElementsByTagName('p');
//     console.log(a);
//     for(let i = 0; i < a.length; i++){a[i].classList.toggle('beautiful');}
    

// __________________________________________________________________________________
// ques no 44
// onfocus styling
// _________
// ans 
// function styling(){let a = document.getElementById('it');
//     a.className = 'ipt';
// }
// _______________________________________________________________________________________
// ques no 45
// onBlur styling
// ___________
// ans 
// function styling(){let a = document.getElementById('it');
//      a.className = 'ipt';
//  }
// ___________________________________________________________________________________
// ques no 46 
// switch case
// _____________
// ans 
// var month = 15; 
// switch(month){case(1):console.log('jan')
//     break;
//     case(2):console.log('feb')
//     break;
//     case(3):console.log('mar')
//     break;
//     case(4):console.log('april')
//     break;
//     case(5):console.log('may')
//     break;
//     case(6):console.log('june')
//     break;
//     case(7):console.log('july')
//     break;
//     case(8):console.log('aug')
//     break;
//     case(9):console.log('september')
//     break;
//     case(10):console.log('octo')
//     break;
//     case(11):console.log('Nov')
//     break;
//     case(12):console.log('Dec')
//     break;
//     default:console.log('plz enter valid number')
// }
// _____________________________________________________________________________________
// ques no 47
// switch case using comparison operator
// _______________
// ans
// var age = 78
// switch(true){case(age>=18 && age <= 40):console.log('eligible')
//     break;
//     default:console.log('not eligible')
// }