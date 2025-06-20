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
