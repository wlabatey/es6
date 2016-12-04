// Default Function Arguments

// Default function parameters allow formal 
// parameters to be initialized with default values if no value or undefined is passed.

(function() {


	// Example ajax request function in ES5.

	function makeAjaxRequest(url, method) {

		// If no method argument is passed in, set it to 'GET' as the default.

		if (!method) {
			method = 'GET';
		}

		// logic to make the request.

		console.log(method);
	
	}

	// -------------------------------------------------------

// Both of these would return the same result

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'GET');

})();

(function() {

	// Same example as above in ES6 with default parameters:

	function makeAjaxRequest(url, method = 'GET') {

		// Do stuff to make request...

		console.log(method);
	
	}

	makeAjaxRequest('google.com'); // GET
	makeAjaxRequest('google.com', 'POST'); // POST

	console.log("----------------------------------------------");

})();

// --------------------------------------

// A more complicated example....

(function() {


	function User(id) {
		this.id = generateId();
	}

	function generateId() {
		return Math.floor(Math.random() * 99999999);
	}

	function createAdminUser(user) {
		user.admin = true;

		return user;
	}

	// Ugly way to create a new user object, assign random id and make an admin.

	createAdminUser(new User(generateId()));

	const a = new User(1);

	console.log(a);

	console.log("----------------------------------------------");

})();

// Instead of the above, we can do something like below, which uses default values to make our
// createAdminUser function a lot easier to use.

(function() {

	function User(id) {
		this.id = generateId();
	}

	function generateId() {
		return Math.floor(Math.random() * 99999999);
	}

	// Instead of the above 

	function createAdminUser(user = new User(generateId)) {
		user.admin = true;

		return user;
	}

	const a = createAdminUser();

	const b = new User();

	console.log(a);

	console.log(b);

	// We can also use the createAdminUser to make an existing user object into an admin.

	createAdminUser(b);

	console.log(b);

})();
