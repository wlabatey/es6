// Array.prototype.filter();

// This is a very useful method which lets us add array items to a new array based on whether they 
// pass the test we use in the function we provide.

;(function() {


	var products = [

		{ name : 'cucumber', type: 'vegetable' },
		{ name : 'banana', type: 'fruit' },
		{ name: 'celery', type: 'vegetable' },
		{ name: 'orange', type: 'fruit' }

	];

	// Again, we do not want to mutate data, but create a subset. This is why we create a new array.

	var productsFiltered = [];


	// Below is an example of how we might implemenet the filter method with a for loop.

	// Again, this is not recommended as it adds an unnecessary layer of logic to what would otherwise
	// be a simple solution. It is also harder to read and figure out what is going on.

	for (var i = 0; i < products.length; i++) {
		if (products[i].type === 'fruit') {
			productsFiltered.push(products[i]);
		}
	}

	console.log(products);
	console.log(productsFiltered);


	// Below is the way we would do this with .filter();

	var filteredProducts2 = products.filter(function(product) {

		return product.type === 'fruit';

	});

	console.log(filteredProducts2);

})();


// ----------------------------------------------------

// Below is our more complicated example...

(function() {

	var products2 = [
		
		{ name : 'cucumber', type: 'vegetable' , quantity: 0, price: 1},
		{ name : 'banana', type: 'fruit', quantity: 10, price: 15 },
		{ name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
		{ name: 'orange', type: 'fruit', quantity: 3, price: 5 }

	];

	// Type is 'vegtable', quantity is greater than 0 & price less than 10

	var products2Filtered = products2.filter(function(product) {
		return 	product.type === 'vegetable' && 
				product.quantity > 0 &&
				product.price < 10;
	});

	console.log(products2Filtered);

})();

// And below is our second more complicated example.....

// For a post with a given id, we want to filter our comments and return those with a matching postId.

// This is a plausible real world example of using filter, e.g. on a social networking site.

(function() {

	// Create our post object

	var post = { id: 4, title: 'New Post' };
	
	// Create our comments array, which contain our comment objects

	var comments = 	[

					{ postId: 4, content: 'awesome post' },
					{ postId: 3, content: 'it was ok' },
					{ postId: 4, content: 'neat' }

					];

	// Declare our function, which take a post and comments parameter.

	function commentsForPost(post, comments) {
		
		// Returns the resulting array from running the .filter method on our comments array

		return comments.filter(function(comment) {

			// For every item in our comments array, only return those with a postId value
			// that matches the id value of our post object

			return comment.postId === post.id;
		}); 
	}

	// Log the result of our commentsForPost function, passing in our example post object and comments array above. 

	console.log(commentsForPost(post, comments));

})();


// ------- Coding Challenge:

// Challenging! Implementing 'reject'.

// This is a hard one!  Create a function called 'reject'.  
// Reject should work in the opposite way of 'filter' - if a function returns 'true', the item 
// should *not* be included in the new array.  Hint: you can reuse filter.

 
(function() {

	function reject(array, iteratorFunction) {
 
	  return array.filter(function(item) {

	  	// This is the best solution. Simply only return those items that 
	  	// return 'false' from our iteratorFunction.

	      return !iteratorFunction(item);
	   });
	}

	// My original working solution is below, which uses two new arrays...


	// function reject(array, iteratorFunction) {
	  
	//  var failedTest = array.filter(function(item) {
	//       return iteratorFunction(item);
	//    });
	  
	//   var passedTest = [];
	  
	//   array.filter(function(item) {
	//     failedTest.includes(item) ? false : passedTest.push(item);
	//    });
	 
	//   return passedTest;
	// }


	var numbers = [10, 20, 30];
  
	var lessThanFifteen = reject(numbers, function(number) {
		return number > 15;
	});

	console.log(lessThanFifteen); // [10]

})();