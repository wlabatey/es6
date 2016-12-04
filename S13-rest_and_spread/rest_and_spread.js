// Rest and Spread

const line = "-".repeat(100);

(function() {

	// An example of using the rest parameter to represent an indefinite number of arguments.

	function addNumbers(...numbers) {
		console.log(numbers);
		return numbers.reduce((sum, number) => {
			return sum + number;
		}, 0);
	}

console.log(addNumbers(1,2,3,4,5,6,7));

console.log(line);

})();

// More examples...

// In this example, imagine we are building an application where we are putting together
// a colour pallete and display it to our users.

// Imagine we have some default colours, and a list of colours our user has entered themselves.

(function() {

	const defaultColors = ['red', 'green'];
	const userFavouriteColours = ['orange', 'yellow'];
	const fallColors = ['fire red', 'fall orange'];

	// One option for joining these two arrays together is the .concat array helper method..

	console.log(defaultColors.concat(userFavouriteColours));

	console.log(line);

	console.log(['green', 'blue', ...fallColors, ...defaultColors, ...userFavouriteColours]);

	// In this second option, we first create a new array with the array literal [] syntax.

	// We then use the ... spread operator to take all the items of the original arrays
	// and add them individually to our new array.

	// Note the difference between using spread as above, and the below...

	console.log(line);

	// This becomes a new array object with our two seperate arrays inside it.

	console.log([defaultColors, userFavouriteColours]); 

	// One reason we might choose to use the ... spread operator to join our two new arrays
	// into one single array is that is is clearer to read and figure out what is happening.

	// It is also easier to mix and match single additional items to add to an array along with
	// existing arrays, as on line 40 above. 

	console.log(line);

})();

// One more example...

(function() {

	// A simple shopping list function that checks to see if we have milk on our list.

	// If we do not, then add it to our list and return the list as a new array.

	function validateShoppingList(...items) {

		if (items.indexOf('milk') === -1) {
			return [ 'milk', ...items];
		}

		return items;

		// Check list to make sure it always has milk.

	}

	console.log(validateShoppingList('oranges', 'bread')); // ['milk', 'oranges', 'bread']
	console.log(validateShoppingList('milk')); // ['milk']

})();

// When would we actually want to use rest and spread?

(function() {

	// Imagine we are creating an open source javascript library that does fancy math calculations...

	const MathLibrary = {

		// Imagine we had a method called calculateProduct which simply multiplies two numbers together.

		// And then our library got really popular, but we wanted to change this method name.

		// Simply changing it might break a lot of other people's code as they depend on this method
		// being called calculateProduct. 

		// So how would we go about fixing this?

		// We can create a new method called multiply and then edit our calculateProduct method
		// to simply return the result of invoking multiply.

		// This means we don't have duplicate logic in our codebase, and we can simply pass all the arguments
		// along to the updated method using rest and spread.

		calculateProduct(...rest) { 
			console.log(rest);
			console.log('Please use the multiply method instead.');
			return this.multiply(...rest);
		},

		multiply(a, b) { 
			return a * b;
		}
	};

	// The below will simple multiply the first two arguments

	console.log(MathLibrary.calculateProduct(2,3,4,5)); // 6

	console.log(MathLibrary.multiply(2,3,4)); // 6 aswell

})();
