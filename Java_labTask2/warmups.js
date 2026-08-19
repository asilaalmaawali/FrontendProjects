const cities = ["Muscat", "Salalah" , "Nizwa" , "Sohar" ,"Sur" , "Ibri"];

cities.push("Seeb");  // add another city in the end of array
console.log(cities);

cities.pop();  // remove from the end ("seeb")

cities.shift(); // reomve from the beginning ("Muscat")

cities.unshift("Barka"); // adding at the first "Barka"

//before duplicate
console.log("Length before duplicate:", cities.length);

//adds a duplicate city
cities.push("Sohar");
console.log("After adding duplicate Sohar:", cities);  // allowed duplicate 

console.log("Length after duplicate:", cities.length);

//classic loop
console.log("classic loop:");
for	(let i	=	0;	i	<	cities.length;	i++)	{
console.log(cities[i]);
}

//for ..of loop
console.log("for ..of:");
for	(const	city of	cities)	{
console.log(city);
}