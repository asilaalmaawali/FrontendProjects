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

// Destructuring

const	order	=	{	id:	101,	customer:	"Sara Ahmed",	total:	249.99,	status:	"Shipped"	};
// destructure	customer	and	total
const	{	customer,	total	}	=	order;
console.log("Customer:", customer);
console.log("Total:", total);


const numbers = [10, 20, 30, 40, 50]; // Array with at least 4 numbers

const [first, second, ...remaining] = numbers;  // Destructure the first two numbers and collect everything else

console.log("First:", first);
console.log("Second:", second);
console.log("Remaining:", remaining);


// Destructure the order directly in the function parameters
function Order({ id, customer, total, status }) {
    return `Order ${id} for ${customer}: $${total} — ${status}`;
}

console.log(Order(order));


// Two different arrays of order IDs
const onlineOrders = [101, 102, 103];
const inStoreOrders = [201, 202, 203];

const allOrders = [...onlineOrders, ...inStoreOrders]; // Combine both arrays using spread (...)

console.log("Online orders:", onlineOrders);
console.log("In-store orders:", inStoreOrders);
console.log("All orders:", allOrders);

//add an object
const order1 = { id: 101, customer: "Sara Ahmed", total: 249.99,status: "Shipped"};

const updateOrder = { ...order1 , status :"Cancelled"};

//original	and	the copy	to	confirm	the	original's	status	didn't	change
console.log("Original order:", order1);
console.log("Updated copy:", updateOrder);

console.log("Original status:", order1.status);
console.log("Updated status:", updateOrder.status);


function collectOrderTotals(...totals) {
    return totals;
}

const orderTotals = collectOrderTotals(25.50, 100, 49.99, 75);

console.log(orderTotals);


// Array have 8 order object
const orders = [
    { id: 11, customer: "Asila", total: 249.99, status: "Shipped" },
    { id: 12, customer: "Ali", total: 75.00, status: "Pending" },
    { id: 13, customer: "Noor", total: 120.00, status: "Shipped" },
    { id: 14, customer: "Ahmed", total: 310.00, status: "Cancelled" },
    { id: 15, customer: "Hilal", total: 45.50, status: "Shipped" },
    { id: 16, customer: "Suad", total: 199.99, status: "Processing" },
    { id: 17, customer: "Fatma", total: 500.00, status: "Shipped" },
    { id: 18, customer: "Salim", total: 80.00, status: "Cancelled" }
];


// reduce 
const combinedTotal = orders.reduce( (sum, order) => sum + order.total,0);
console.log("Combined total:", combinedTotal.toFixed(2));  //to print and converted to string

//filter
const shippedOrders = orders.filter(order => order.status === "Shipped");
console.log("Shipped orders:", shippedOrders);

//map
const customerNames = orders.map(order => order.customer);
console.log("Customer names:", customerNames);

//find 
const firstOrder = orders.find(order => order.total > 200);
console.log("First order over $200:", firstOrder);

//some  , for any cancelled order
const CancelledOrder = orders.some(order => order.status === "Cancelled");
console.log("Any cancelled order?", CancelledOrder);

//every, all order totals are greater than 0
const allTotals = orders.every(order => order.total > 0);
console.log("Are all totals greater than 0?", allTotals);

// sort: highest total first
const sortedOrders = [...orders].sort((a, b) => b.total - a.total);
console.log("Orders from highest to lowest:", sortedOrders);


// filter and map
const shippedCustomerNames = orders.filter(order => order.status === "Shipped")
                                    .map(order => order.customer);
console.log("Shipped customer names:", shippedCustomerNames);