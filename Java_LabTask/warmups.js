

const name = "Asila" ;// Declare	const for my name

let num = 0; // Declare	a num , let mean can reassign variable twice

// Reassign	variable	twice
console.log(typeof num); // number

num = "Hi";
console.log(typeof num); // string


console.log("10" == 10);  // true , becuaue it go for the value 10 even if the type deiiferent
console.log("10" === 10); // false , it goes for the type 


const message = "";  // it be falsy because the string is null

if (!mesage) {
console.log("The message is empty");
}


const grades	=	[85,	92,	58,	73,	40]; 
// for...of inside it (if/else)
for	(const	grade	of	grades)	{
if (grade >= 60) {
    console.log(`${grade}: Pass`);
} 
else {
    console.log(`${grade}: Fail`); }
}


//switch
const score = 85;
switch (true) {
case score >= 90:
    console.log("Grade: A");
    break;

case score >= 80:
    console.log("Grade: B");
    break;

case score >= 70:
    console.log("Grade: C");
    break;

default:
    console.log("Grade: F");
}


// function declaration
function checkEven1(number) {
if (number % 2 === 0) {
    return true;
} else {
    return false;
}
}

// function expression
const checkEven2 = function (number) {
if (number % 2 === 0) {
    return true;
} else {
    return false;
}
};

// Arrow function
const checkEven3 = (number) => {
if (number % 2 === 0) {
    return true;
} else {
    return false;
}
};

// Same input gives the same output
const testNumber = 12;

console.log(checkEven1(testNumber));
console.log(checkEven2(testNumber));
console.log(checkEven3(testNumber));


// Function with a default parameter
function welcome(name = "Student") {
return `Welcome, ${name}`;
}

console.log(welcome("Asila"));
console.log(welcome());

//function with a rest parameter
function calculateTotal(...values) {
let total = 0;

for (const value of values) {
    total = total + value;
}

return total;
}

console.log(calculateTotal(5, 10, 15, 20));



const student = {
name: "Asila",

// Regular function
getName: function () {
    return this.name;
},

// Arrow function
getNameArrow: () => {
    return this.name;
}
};

console.log(student.getName());
console.log(student.getNameArrow());