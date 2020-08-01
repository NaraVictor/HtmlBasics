// variable declarations
// cannot use a keyword - reserved
// cannot start with a number
// must not contain spaces
// case sensitive

// let a = 100;
// var b = 500;
// let sum = a + b;

// let first = "Victor";
// let last = "Nara";

// console.log(first + last);
// console.log(sum);

// let fullName = "Victor @#$.   Nara";
// let fullname = "Stephen Azaago";

// console.log(fullName);
// console.log(fullname);

// data types
// numbers
// strings
// booleans

//operators
// +
// *
// /
// -
// %
// ^
// ==    equality
// >
// <
// <=
// >=
// ===  strict equality
// !    negation
// =    assignment

// console.log("true or false:", "0" === 0);

// let age = 15;
// alert("Hello, I am " + age + " years old");

// D.R.Y. - DON'T REPEAT YOURSELF

// funtion signature (structure)

// function functionname (parameters){
// your code here
// }

function displayInfo() {
	let res = prompt("what is your name?");
	let yr = prompt("what is your age?");
	alert("Hello, " + res + " you are " + yr + " years old");
}

displayInfo();
