// Array.prototype.every() 
// Array.prototype.some()

// The every() method tests whether all elements in the array pass the test implemented by the provided function.

// The some() method tests whether some element in the array passes the test implemented by the provided function.

(function() {

var computers = [

				{ name: 'Apple', ram: 24 },
				{ name: 'Compaq', ram: 4 },
				{ name: 'Acer', ram: 32 }

				];

// First we start with a generic for loop implementation, to show 
// how tedious it can be to try and do it this way.

// For loops are very flexible, but again, they cna be hard to read.

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

	for (var i =0; i < computers.length; i++) {
		var computer = computers[i];

		if (computer.ram < 16) {
			allComputersCanRunProgram = false;
		} else {
			onlySomeComputersCanRunProgram = true;
		}
	}

console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);

console.log("--------------- 1 ");

// Below is how we use the .every method to achieve the same result as above.

var allComputers2 = computers.every(function(computer) {
	return computer.ram > 16;
});

console.log(allComputers2);

// And we also use the .some method to achieve the same result.

var someComputers2 = computers.some(function(computer) {
	return computer.ram > 16;
});

console.log(someComputers2);

console.log("--------------- 2 ");

})();

// Below is another simple example of how we might use the .every and .some array helper methods.

(function() {

	var names = [

				"Alexandra",
				"Matthew",
				"Joe"

				];

	var everyName = names.every(function(name) {
		return name.length > 4;
	});

	console.log(everyName);

	var someName = names.some(function(name) {
		return name.length > 4;
	});

	console.log(someName);

console.log("--------------- 3 ");

})();

// -------------------------------------------------------------

// Another example of when we might use .every / .sum.

// In this case, we are validating a user's input on a login form to check that something has been entered.

(function() {

	function Field(value) {
		var self = this;
		self.value = value;
	}

	// We create a method called validate and attach it to 
	// the prototype of our Field objects.

	// This prototype is inherited by all Field objects created using the new keyword.

	Field.prototype.validate = function() {

		return this.value.length > 0;

	};

	var username = new Field("2cool");
	var password = new Field("my_password");
	var birthdate = new Field("10/10/2010");

	console.log(username.validate());

	var fields = [username, password, birthdate];

	console.log(fields);

	var formIsValid = fields.every(function(field) {
		return field.validate();
	});

	console.log(formIsValid);

	if (formIsValid) {
		// allow user to submit
	} else {
		// show error message
	}

})();

// --------------------------------------

// Coding exercise: Finding submitted uers

// Given an array of users, return 'true' if every user has submitted a request form.  
// Assign the result to the variable 'hasSubmitted'.

(function() {

	var users = [
				  { id: 21, hasSubmitted: true },
				  { id: 62, hasSubmitted: false },
				  { id: 4, hasSubmitted: true }
				];

	var hasSubmitted = users.every(function(user) {
   
    	return user.hasSubmitted;
    
	});

})();

// --------------------------------------

// Coding exercise: In Progress Network Requests

// Given an array of network objects representing network requests, 
// assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'. 


(function() {

	var requests = 	[

					{ url: '/photos', status: 'complete' },
					{ url: '/albums', status: 'pending' },
					{ url: '/users', status: 'failed' }

					];

	var inProgress = requests.some(function(request) {
		
		return request.status === 'pending';
	
	});

})();



