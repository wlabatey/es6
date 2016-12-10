// We start with an example of for... of loops.

// This quite similar to the array helper methods we looked at when starting the course.

// The for...of statement creates a loop iterating over iterable objects (including Array, Map, 
// Set, String, TypedArray, arguments object and so on), invoking a custom iteration hook with statements 
// to be executed for the value of each distinct property.

const colors = ['red', 'green', 'blue'];

for (let color of colors) {
	console.log(color);
}

const numbers = [1,2,3,4];

let total = 0;
for (let number of numbers) {
	total += number;
	console.log(total);
}

// Generators let us run some code, return a value and then return to the function and continue executing code.

// From MDN:

// Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.

// Calling a generator function does not execute its body immediately; an iterator object for the function is returned instead. 
// When the iterator's next() method is called, the generator function's body is executed until the first yield expression, 
// which specifies the value to be returned from the iterator or, with yield*, delegates to another generator function. 
// The next() method returns an object with a value property containing the yielded value and a done property which indicates 
// whether the generator has yielded its last value as a boolean. Calling the next() method with an argument will resume 
// the generator function execution, replacing the yield statement where execution was paused with the argument from next(). 

function* shopping() {
	
	// stuff on the sidewalk

	// walking down the sidewalk

	// go int othe store with cash
	yield 'cash';
}

// Stuff happening in the store

const gen = numbers2();
console.log(gen.next()); // { "done": false }
console.log(gen.next()); // { "done": true }

