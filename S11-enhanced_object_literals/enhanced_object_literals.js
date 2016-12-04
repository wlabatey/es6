// Enhanced Object Literals

function createBookShop(inventory) {
	return {
		

		// ES5..

		// inventory: inventory,

		// ES6:

		// When a key and value have the exact same value, we can just write it once like below.

		inventory,


		// ES5..

		// inventoryValue: function() {

		// ES6:

		// We can now add methods just by using the method name, parens and openign curly brace.
		// This saves us having to use the colon and function keyword.

		inventoryValue() {

			console.log("Test inventory value");
			
			// Use .reduce on inventory to iterate through each book:
			// - add item.price to accumulator
			// - Return total price

			// ES5 syntax

			return this.inventory.reduce(function(total, book) {

				return total + book.price;

			}, 0);

		},

			// Same this as above, but with arrow functions.

		inventoryValueES6() {

			console.log("Inventory value es6");

			return this.inventory.reduce((total, book) => total + book.price, 0);

		},

		// Use .find on inventory to find first item that satisfies our provided function.

		// Return the price of that item

		priceForTitle(title) {

			console.log("Test price for title");
			
			// Get book price from a given title

			return this.inventory.find(function(book) { 
				
				return title === book.title;	
				
			}).price;
		},

		// Same as above, but using arrow functions. Notice again how concise the code is.

		priceForTitleES6(title) {

			console.log("Test price for title es6");

			return this.inventory.find((book) => title === book.title).price;

		}
	};
}

const inventory = [
	{ title: 'Harry Potter', price: 10 },
	{ title: 'Eloquent Javascript', price: 15}
];

const bookShop = createBookShop(inventory);

console.log(bookShop);

// --------------------------------------------------------------

// When to use enhanced object literals...

(function() {

// We are going to use jQuery to post data / make an http request to some remote place

// This is just an example to look at the syntax.

	function saveFile(url, data) {

		// Take some data and make a http request with jQuery.

		$.ajax({ 
			url, 
			data, 
			method: 'POST' 
		});
 	}

	const url = "http://fileupload.com";
	const data = { color : "red" };

	saveFile(url, data);

})();






