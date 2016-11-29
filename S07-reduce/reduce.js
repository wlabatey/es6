// Array.prototype.reduce()

// The reduce() method applies a function against an accumulator 
// and each value of the array (from left-to-right) to reduce it to a single value.

var numbers = [10, 20, 30];

(function() {

	var sum = 0; 

	// We start with our for loop implementation.

	for (var i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}

	console.log(sum);

	console.log("------------------- 1");

})();

(function() {

	// .reduce takes 2 params:

		// first: callback function
		// second: initial value of the first arguments for the first call of the callback function
		
			// The callback takes four arguments:

				// 1) accumulator value
				// 2) current element of the array
				// 3) index of the current element in the array
				// 4) the array reduce was called upon

	// The result is that we reduce our array into a single value, using a function that we specify.

	var  sum = numbers.reduce(function(sum, number) {
		return sum + number;
	}, 0);

	console.log(sum);

	console.log("------------------- 2");

})();

// Another example using .reduce on an array of data

// We want to end up with an array that is ['red', 'yellow', 'blue']

(function() {

	var primaryColors = [

					{ color: 'red' },
					{ color: 'yellow' },
					{ color: 'blue' }

					];

	var reducedColors = primaryColors.reduce(function(previous, currentElement) {

		previous.push(currentElement.color);

		return previous;

	}, []);

	console.log(reducedColors);

	console.log("------------------- 3");

})();

// Another practical use of .reduce below...

// This is a replication of a tech interview whiteboard question...

// Question:

// Given a string such as the examples below, write a function that decides whether the parens are 'balanced'.

// Examples:

// "()" - Balanced
// "()()()" - Balanced
// "((()))" - Balanced
// ")(" - NOT BALANCED
// "(()" - NOT BALANCED
// ")()(" - NOT BALANCED


(function() {

	function balancedParens(string) {

		// We use the not operator ! to convert the number returned into a Boolean.

		// Javascript coerces a positive or negative number to Truthy, while 0 becomes Falsy.

		return !string.split("").reduce(function(previous, char) {
    	
    		if (previous < 0) { return previous; }
    		if (char === "(") { return ++previous; }
    		if (char === ")") { return --previous; }
   			return previous; 
    	
    	}, 0);
    
  	}

	console.log(balancedParens("(()")); // false
	console.log(balancedParens("()")); // true
	console.log(balancedParens("(()())")); // true
 
})();


