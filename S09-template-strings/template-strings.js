// Template Literals

// Template literals are string literals allowing embedded expressions. 
// You can use multi-line strings and string interpolation features with them. 
// They were called "template strings" in prior editions of the ES2015 / ES6 specification.


// ES5

(function() {

	function getMessage() {
	const year = new Date().getFullYear();

	return "The Year is " + year;
}

console.log(getMessage());

})();


// ES6 with template strings

(function() {

	function getMessage() {
		return `The year is ${new Date().getFullYear()}`;
	}

console.log(getMessage());

})();


// Template literals come in very handy when concatenating long strings and variable names.

(function() {

	const device_id = 4;
	const guid = 20;
	const username = "Hello";

	// ES5 way... very hard to read...
	// const data = '{"device_id":"' + device_id + '","guid":"' + guid + '","username":"' + username + '","}';

	// ES6 way:
	const data = `{ "device_id": "${device_id}", "guid": "${guid}", "username": "${username}"," }`;

	console.log(data);

})();

