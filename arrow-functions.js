/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTwoNumbers(num1,num2){
//     //code block
//     return num1+num2;
// }
// let sum = addTwoNumbers(1,2);
// console.log(sum);

// Arrow Function With Parameters

const addTwoNumbers=(num1,num2)=>{
    //code block
    return num1+num2;
}
let sum = addTwoNumbers(1,2);
console.log(sum);

// Single Line Arrow Function With Parameters

const addTwoNumbers2=(num1,num2)=>num1+num2;

// Implicit Returns

const saySomething = message =>console.log(message);
saySomething("Hello!");

const sayGoodbye=()=>console.log("Goodbye!");
sayGoodbye()

// Returning Multiple Lines

const returnMultipleLines=()=>(
    `<p>
        This is a multiline string!
        Yay!
    </p>`
);
console.log(returnMultipleLines());
