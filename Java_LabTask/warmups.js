

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

for	(const	grade	of	grades)	{
console.log(grade); }

