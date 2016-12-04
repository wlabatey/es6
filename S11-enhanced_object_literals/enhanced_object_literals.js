// Enhanced Object Literals

function createBookShop(inventory) {
	return {
		inventory: inventory,

		inventoryValue: function() {
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

		inventoryValueES6: function() {

			console.log("Inventory value es6");

			return this.inventory.reduce((total, book) => total + book.price, 0);

		},

		// Use .find on inventory to find first item that satisfies our provided function.

		// Return the price of that item

		priceForTitle: function(title) {

			console.log("Test price for title");
			
			// Get book price from a given title

			return this.inventory.find(function(book) { 
				
				return title === book.title;	
				
			}).price;
		},

		// Same as above, but using arrow functions. Notice again how concise the code is.

		priceForTitleES6: function(title) {

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