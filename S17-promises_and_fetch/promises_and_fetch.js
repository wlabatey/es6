// Promises and Fetch

// The Promise object is used for asynchronous computations. 

// A Promise represents a value which may be available now, or in the future, or never.

// The three states of promises:

// - 'unresolved' - waiting for something to finish
// - 'resolved' - something finished and it went okay
// - 'rejected' - something finished and it went wrong

// Promises allow us to assign a callback function to execute 
// when the promise returns a status of 'resolved' or 'rejected'.


let promise = new Promise((resolve, reject) => { 

	// resolve(); // .then() functions are executed

	reject(); // .catch() functions are executed.

});

promise
	.then(() => console.log('finally finished!'))
	.then(() => console.log('and then I ran!'))
	.catch(() => console.log('something went wrong!'));