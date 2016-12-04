
// Arrow Functions

// An arrow function expression has a shorter syntax compared to function expressions 
// and does not bind its own this, arguments, super, or new.target. 

// Arrow functions are always anonymous. 

// These function expressions are best suited for non-method functions and they can not be used as constructors.


// ES5 Functions

(function() {

const add = function(a,b) {
	return a + b;
};

console.log(add(1,2));

})();


// ES6 Fat Arrow Functions

(function() {

const add = (a, b) => a + b; 	// With a single expression, we can enjoy an implicit return.
								// This means we do not need to use the return keyword or curly braces.
console.log(add(2, 2));

})();

// ES6 IIFE

(global => {

	const a = "ES6 IIFE!";
	console.log(a);

})(window);


// -----------------------------------

// Advanced use of arrow functions

(function() {

	// ES5 function

	const double = function(number) {
		return 2 * number;
	};

	console.log(double(8));

})();

(function() {

	// ES6 function

	// If the function only takes a single argument, we can drop the parens and write it as below.

	// This is the most concise way to use arrow functions.

	const doubleNew = number => 2 * number;

})();

(function() {

	// Another example of refactoring a function using fat arrows.

	// The ES5 original....

	const numbers = [1,2,3];

	const a = numbers.map(function(number) {
		return 2 * number;
	});

	console.log(a);

	// As we only have one argument, we can drop the parens
	// and as we only have one expression inside the function,
	// we can drop the curly braces and the return statement.

	// Compare how concise this line of code is with not only the ES5 equivalent above,
	// but also against writing an entire for loop instead of using the .map array helper method!

	const b = numbers.map(number => 2 * number);

	console.log(b);

})();


// When to use arrow functions

// Arrow functions fix what was considered a longterm bug of the 'this' keyword in javascript.

// Until arrow functions, every new function defined its own 'this' value, which can
// be confusing as it is not always what you would expect.

// In ES5, a workaround was to assign the value of this to a variable that could
// then be referenced to get the correct result, e.g. var self = this;

// With arrow functions, this is no longer needed.

(function() {

	const team = {
		members: ['Jane', 'Bill'],
		teamName: 'Super Squad',
		teamSummary: function() { 
			return this.members.map(member => 
				`${member} is on team ${this.teamName}`);
		}
	};

	console.log(team.teamSummary());

})();
