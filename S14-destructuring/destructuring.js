// Destructuring

// Pretend we are creating some kind of financial application and we are 
// creating an object that represents an expense.

// ES5

const line = "-".repeat(50);

(function() {

	var expense = {
		type: 'Business',
		amount: '$45 USD'
	};

	// As we can see below, we have repeated a lot of identical words, which is something we 
	// should always seek to avoid.

	// Destructuring is something which will allow us to avoid repetition in ES6.

	var type = expense.type;
	var amount = expense.amount;

})();

// ES6

(function() {

	const expense = {
		type: 'Business',
		amount: '$45 USD'
	};

	// In ES6, we can use the below syntax to declare a variable and set it to 
	// an object property of the exact same name. This only works when the property
	// has the exact same name as the variable!

	// We can even compact this further by using commas...

	const { type, amount } = expense;
	// const { amount } = expense;

	console.log(type);
	console.log(amount);

	console.log(line);

})();

// Imagine we are creating an object representing a file on our hard disk.

(function() {

	// ES5

	var savedFile = {
		extension: '.jpg',
		name: 'repost',
		size: 14040
	};


	// function fileSummary(file) {

	// We can use destructuring in the below function to save us duplicating the same word over and over...
	
	// By using the following syntax with curly braces, we can reference object properties directly in our
	// function, so we don't need to write file.name, file.extension, etc.	

	function fileSummary({ name, extension, size }) {

		// return `The file ${file.name} ${file.extension} is of size ${file.size}.`;

		return `The file ${name}${extension} is of size ${size}.`;
	}

	console.log(fileSummary(savedFile));
 
	console.log(line);

})();

// Destructuring Arrays

// When destructuring arrays, we can use the following syntax to pull off individual elements.

// With arrays, we need to use square braces to pull out elements.

(function() {

	const companies = [
		'Google',
		'Facebook',
		'Uber'
	];

	const [ name, name2, ...name3 ] = companies; // Google, Facebook

	console.log(name); // Google
	console.log(name2); // Facebook
	console.log(name3); // ['Uber']

	console.log(line);

})();

(function() {

	const companies = [

		{ name: 'Google', location: 'Mountain View' }, 
		{ name: 'Facebook', location: 'Menlo Park' },
		{ name: 'Uber', location: 'San Francisco' }

	];

	// In ES5, if we want to access a specific property of an element in an array, we need to do this:

	// var location = companies[0].location; // 'Mountain View'

	// In ES6, we can do this...

	// Which is using square and curley braces to get the first element of the array and then get the location
	// property inside that object.

	const [{ location }] = companies;

	console.log(location);

	console.log(line);

})();

(function() {

	const Google = {
		locations: ['Mountain View', 'New York', 'London']
	};

	// In this example, we use destructuring to access the first element of the array
	// inside our Google object.

	// This syntax looks quite odd, as it is quite different from ES5.

	const { locations: [ location ] } = Google;

	console.log(location);

	console.log(line);

})();

(function() {

	// Imagine we are creating some kind of application where a user needs to sign up.

	// We start with a simple signUp function which takes a couple arguments, but later
	// in time we decide we want to add more information to it (email, DOB, city, etc.)

	// If we have a function like this with a long list of arguments, it can be quite 
	// difficult to remember the order the arguments need to go in when using it later on.

	function signUp({ username, password, email, dateOfBirth, city }) {

		// create new user

	}

	// other code
	// other code
	// other code
	// other code
	// other code
	// other code
	// other code
	// other code

	signUp('myName', 'myPassword', 'myemail@example.com', '1/1/1990', 'New York');

	// An other option is instead to create a user object and then use destructuring
	// to pass in all the properties from our user object.

	// We can't escape the fact that we must still have all the properties, but by using
	// destructuring, we no longer need the correct order.

	const user = {

		username: 'myname',
		password: 'mypassword',
		email: 'myemail@example.com',
		dateOfBirth: '1/1/1990',
		city: 'New York'

	};

	signUp(user);

	console.log(line);

})();

// Stephen was working on a project that took data from an API and presented it as a series of 
// points on a graph.

(function() {

	const points = [

	// The data he was getting was an array containing multiple arrays with the coordinates.

		[4, 5],
		[10, 1],
		[0, 40]

	];

	// But the library he was using needed the data to be represented as an array containing
	// multiple objects with x and y properties.

	//  [

	// 	{ x: 4, y: 5 },
	// 	{ x: 10, y: 1 },
	// 	{ x: 0, y: 40 }

	// ];

	// His challenge then was to change the structure of the data to work with the library he was using.

	// We can do this with ES6

	// Below, we use destructuring in the argument list to pull off the first two items of the array
	// that we pass in and then again in the function body to create a new object with x & y properties.

	const pointsList = points.map(([x, y]) => ({x, y}));

	console.log(pointsList);

	console.log(line);

})();

(function() {

	// Recursion with Destructuring

	// Use array destructuring, recursion and the rest/spread operators to create a function 'double'
	// that will return a new array with all values inside of it multiplied by two.

	// DO NOT USE ANY ARRAY HELPERS.

	// Input: double([1,2,3])

	// Output: [2,4,6]

	// Hint: Don't forget that with recursion, you must add a base case so you don't get an infinite call stack.
	// e.g. 'const [number, ...rest] = numbers' and number is undefined, do you need to keep walking through
	// the array? 


	const numbers = [1,2,3];

	function double([first, ...rest]) {

		// Must use array destructuring
		// Must use recursion
		// Must use rest/spread operators

		// Return a new array with every element doubled.

		// Add a test to check that our new array does not contain any element which is undefined.

		return rest.length ? [ first * 2, ...double(rest) ] : [ first * 2 ];

	}

	// console.log(double(numbers));
	// console.log(double([1]));

})();


// Another solution...

const numbers = [1,2,3];

function double([number, ...rest], arr = []) {
     

    console.log(`number is: ${number}`);
	console.log(`rest is: ${rest}`);
	console.log(`arr is: ${arr}`);

  if (!number && !rest.length) {
    return arr;
    }
    
    return double(rest, [ ...arr, number * 2]);
}

// This one takes an array as the first argument and then uses destructuring to assign
// the first item of the array to the parameter 'number' and the rest to an array called 'rest'

// We also have an argument called arr which acts as our accumulator (like in the .reduce array helper)
// By default, arr is set to an empty array.

// We then check to see if we have a number and rest to work with.
// If we don't, then we return arr

// If (!number && !rest.length) returns false, then we recursively call the double function...

// We return the result of calling double on the 'rest' array.

// We take everything accumulated in the current arr and spread them out into arr and then add the current number * 2.

console.log(double(numbers));

