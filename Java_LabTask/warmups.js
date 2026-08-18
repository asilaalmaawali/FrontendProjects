

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


