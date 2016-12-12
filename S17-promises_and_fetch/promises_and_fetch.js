// Promises and Fetch

// The Promise object is used for asynchronous computations. 

// A Promise represents a value which may be available now, or in the future, or never.

// The three states of promises:

// - 'unresolved' - waiting for something to finish
// - 'resolved' - something finished and it went okay
// - 'rejected' - something finished and it went wrong

// Promises allow us to assign a callback function to execute 
// when the promise returns a status of 'resolved' or 'rejected'.

{
	let promise = new Promise((resolve, reject) => { 

		// resolve(); // .then() functions are executed

		// reject(); // .catch() functions are executed.

		setTimeout(() => {
			resolve();
		}, 3000);

	});

	promise
		.then(() => console.log('finally finished!'))
		.then(() => console.log('and then I ran!'))
		.catch(() => console.log('something went wrong!'));
}

{
	const url = "https://jsonplaceholder.typicode.com/posts123456/";

	// The Fetch API provides an interface for fetching resources (including across the network). 
	// It will seem familiar to anyone who has used XMLHttpRequest, but the new 
	// API provides a more powerful and flexible feature set.

	// If the server returns a status code higher than 300, it does NOT enter the catch case
	// when we use fetch.

	// This is not the same as any other ajax library, where if the promise fails it will 
	// enter the catch phase.

	// Fetch only enters the catch case when the network request fails to be issued at all.

	fetch(url)
		.then(response => console.log(response))
		.catch(error => console.log('BAD', error));
}