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

// function displayInfo() {
// 	let res = prompt("what is your name?");
// 	let yr = prompt("what is your age?");
// 	alert("Hello, " + res + " you are " + yr + " years old");
// }

// displayInfo();

// objects
// let car = {
// 	name: "Range Rover",
// 	model: "Sports",
// 	year: 2020,
// 	used: true,

// 	start() {
// 		return "vrummmm!!!";
// 	},
// };

// dot notation
// alert(car.start());

//
// let person = {
// 	name: "Maurice",
// 	gender: "Male",
// 	height: 7.2,

// 	laugh() {
// 		return "hahahahaaa";
// 	},
// };

// person.height = 7.5;
// alert(person["height"]);

// property accessor and assignment
// let laptop = {
// 	manufacturer: "Hp",
// 	HardDriveType: "SSD",
// 	RAM: "12GB",
// 	Graphics: "NVIDIA",
// };

// alert( laptop.Graphics );

// Arrays
// let scores = [15, 20, 54, 44, 90];
// alert(scores[0]);

// let myself = ["Victor", 50, 8.5, "Female", false];
// alert(myself[3]);

// let people = [
// 	{ name: "Maurice", age: 20 },
// 	{ name: "Daniel", age: 13 },
// 	{ name: "Ama", age: 28 },
// ];

// alert(people[2].name);

// let endOfTerm = {
// 	scores: [50, 20, 85, 45],
// 	subjects: ["Math", "English", "Science"],
// };

// alert(endOfTerm.scores[1]);

// Conditionals

// kahoot.it

// let age = 15;

// if (age > 15) {
// 	alert("above 15");
// } else {
// 	alert("not above 15");
// }

// let date = new Date();
// alert(date.getFullYear());

// alert even numbers up to 13

// loops

// while loops
// for loops

// let grade = [57, 68, 55, 78, 40, 89];
// let sum = 0;

// for (index in grade) {
// 	sum = sum + grade[index];
// }

// alert(sum);

let score = 0;
let num = 3;

while (true) {
	if (num % 3 === 0) {
		let a = prompt("Please input a multiple");
		score += num;
		num = parseInt(a);
	} else {
		alert("Game over, your score: " + score);
		break;
	}
}
