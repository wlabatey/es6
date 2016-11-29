// Array.prototype.find()

// The find() method returns a value of the first element in the array that satisfies 
// the provided testing function. Otherwise undefined is returned.

(function() {

	var users = [

				{ name: 'Jill' },
				{ name: 'Alex' },
				{ name: 'Bill' }

				];


	var user;

	// This is a generic for loop implementation of the find method.

	// If we did not include the break statement, beware that this loop
	// would continue iterating over the entire array, even after it had found the
	// object we were looking for.

	for (var i = 0; i < users.length; i++) {
		if (users[i].name === 'Alex') {
			user=users[i];
			break;
		}
	}

	console.log(user);

	// This is how we would use the .find method on the array instead.

	// Be aware that this method returns only the first result it finds.

	var user2 = users.find(function(user) {
					return user.name === "Alex";
				});

	console.log(user2);

})();


// More complicated example of using the find method below.......

// ---------------------------------

(function() {

	function Car(model) {
		this.model = model;
	}

	var cars = 	[
					new Car('Buick'),
					new Car('Camaro'),
					new Car('Focus')
				];

	console.log(cars);

	var foundCar = cars.find(function(car) {
		return car.model === 'Focus';
	});

	console.log(foundCar);

})();

// Another more complicated example using our comment / post idea from previous lesson.....

// ------------------------------------------------------------------

(function() {

	var posts = [
					{ id: 1, title: 'New Post' },
					{ id: 2, title: 'Old Post' }
				];

	var comment = { postId: 1, content: 'Great Post' };

	function postForComment(posts, comment) {
		return posts.find(function(post) {
			return post.id === comment.postId;
		});
	}

	console.log(postForComment(posts, comment));

})();

// Coding exercise 1 - Finding Admin Users

// Find the user in the user's array who is an admin. Assign this user to the variable 'admin'.

(function() {

	var users = [
		{ id: 1, admin: false },
	 	{ id: 2, admin: false },
	 	{ id: 3, admin: true }
	];

	var admin = users.find(function(user) {
		return user.admin === true;
	});

	console.log(admin);

})();


// Coding exercise 2 - What's your balance?

// Find the account with a balance of 12 and assign it to the variable 'account'.

(function() {

var accounts = [
	{ balance: -10 },
	{ balance: 12 },
	{ balance: 0 }
];

var account = accounts.find(function(account) {

	return account.balance === 12;

});

console.log(account);

})();


// Really Challenging: Custom findWhere Helper

// This is a tough one. The most common find operatio nis to an object that has a given property.

// Rather than writing out a full function every time, 
// it would be great if we had a shorthand syntax to find an object like this:

// findWhere(ladder, { height: '20 feet' });

// Your goal: 

// -> Write a findWhere function that achieves this shorthand approach.
// -> findWhere() should return the found object.

(function() {

	var ladders = 	[

					{ id: 1, height: 20 },
					{ id: 3, height: 25 }

					];

	function findWhere(array, objCriteria) {

		// Accepts an array and object with criteria, e.g. findWhere(ladders, { height: 25 });

		// Takes height from objCriteria and searches ladders for property

		// If found, compares the property's value to check if equal to the one we passed in

		// If equal, we return the object.


		var property = Object.keys(objCriteria)[0];

		console.log(property);

		var result = ladders.find(function(element) {
			return element[property] === objCriteria[property]; 
		});

		return result;
	}

console.log(findWhere(ladders, { height: 25 } ));
console.log(findWhere(ladders, { height: 20 } ));

})();
