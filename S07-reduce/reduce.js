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

	console.log("------------------- 3");
 
})();


// -------------------------------------------------------

// Coding exercise 1 - Distance travelled

// Use the reduce helper to find the sum of all the distances travelled. 
// Assign the result to the variable 'totalDistance'.

(function() {

	var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

	var totalDistance = trips.reduce(function(previous, trip) {
    	return trip.distance += previous;
	}, 0);


	console.log(totalDistance);

	console.log("------------------- 4");

})();


// Coding exercise 2 - Reducing properties

// Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  
// The object returned should have the form '{ sitting: 3, standing: 2 }'.  
// The initial value has been provided to you.
// Hint: Don't forget to return the accumulator object (the first argument to the iterator function)


(function() {

	var desks = [

				{ type: 'sitting' },
				{ type: 'standing' },
				{ type: 'sitting' },
				{ type: 'sitting' },
				{ type: 'standing' }

				];

	var totals = { sitting: 0, standing: 0 };

	var deskTypes = desks.reduce(function(previous, desk) {

		if (desk.type === 'sitting') { console.log("Sitting!"); previous.sitting++; }
		if (desk.type === 'standing') { console.log("Standing!"); previous.standing++; }
		return previous;
		
	}, { sitting: 0, standing: 0 });

	console.log(deskTypes);

})();


// Coding exercise 3 - Hard mode - Custom 'unique' helper

// Write a function called 'unique' that will remove all duplicate values from an array.

// For example, given the following array:

// var numbers = [1, 1, 2, 3, 4, 4];

// Your function should return [1, 2, 3, 4]

(function() {

	var numbers = [1, 1, 2, 3, 4, 4];

	function unique(array) {

		// Create a new blank array that will be returned

		// Check array for number of occurences of each item,
		// If item occurs more than once, add to the accumulator
		// If accumulator is greater than 0, do NOT add current item to new array

		// If it occurs more than once, only add it once to new array 


		var newArr = [];

		array.map(function(element) {			// my first solution (doesn't work for objects)
												// doesn't use reduce / find.
			if (!newArr.includes(element)) { 
				newArr.push(element);
			} 
		});

		return newArr;
	}

	var numbers2 = [1,3,5,7,3,4,3,3, "hi", "hi", true, true, {id: 1}, {id: 1}, 3,2,1,0,0,0];

	function unique2(array) {
		var newArr = [...new Set(array)];		// An interesting solution (without using find/reduce)
		return newArr;							// This uses the rest and Set.	
	}											

	console.log(unique(numbers));
	console.log(unique(numbers2));

	console.log(unique2(numbers));
	console.log(unique2(numbers2));


})();

(function() {

// Another solution that works and uses reduce and find.

	function unique(array) {
    return array.reduce(function(acc, number) {
        var numberInAcc = acc.find(item => item === number);
        if (numberInAcc === undefined) {
            acc.push(number);
        }
        return acc;
    }, []);
}

})();
