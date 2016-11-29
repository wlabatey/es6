// Array.prototype.forEach();

// The forEach() method executes a provided function once per array element.

// We declare the variable colours and assign it to an array literal with our colour names as strings.
var colors = ['red', 'blue', 'green'];

// The reason we want to avoid writing for loops like the one below is that there is a lot of 
// unnecessary logic involved which provides more points of failue (typos, etc.) than if we just
// used a much simpler solution, like a built in helper method.
for (var  i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}


// We invoke the .forEach array helper method that is built into the array object in javascript
// and pass in an annonymous function that logs each item of the array to console.

// Our annonymous function can be referred to as an 'interator function' as it is invoked 
// in every iteration of our loop.

colors.forEach(function(color) {
	console.log(color);
});

// Stephen argues that one of the key reasons to use a helper method over a generic for loop is that 
// we can achieve the same result while writing much less logic.


// ----------------------------------------------------------

// forEach continued.

// Tasks:

// --> Create an array of numbers
var numbers = [1, 2, 3, 4, 5];

// --> Create a variable to hold the sum
var sum = 0;

// --> Loop over the array, incrementing the sum variable

// An alternative here is to define the function seperately and then pass the function into .forEach().
// If we did use a seperate function, we would not pass it with parens, which would invoke it and pass the result,
// as what we want is for the function to invoked seperately for each iteration in our array.

numbers.forEach(function(number, index){ 	// the first paramater of forEach is the callback function to execute
	console.log(index);						// for each element of the array, which takes three arguments:
	sum += number;							
});											// currentValue : The current element being processed in the array
											// index: The index of the current element being processed in the array
// --> Print the sum variable				// array: The array that forEach() is being applied to.
console.log(sum);



