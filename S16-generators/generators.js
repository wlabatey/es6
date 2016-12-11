// We start with an example of for... of loops.

// This quite similar to the array helper methods we looked at when starting the course.

// The for...of statement creates a loop iterating over iterable objects (including Array, Map, 
// Set, String, TypedArray, arguments object and so on), invoking a custom iteration hook with statements 
// to be executed for the value of each distinct property.

(function(){

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

	//  ---------------------------------------------------------------------------------------------------------------------------------------
	//  ---------------------------------------------------------------------------------------------------------------------------------------

})();








// Generators let us run some code, return a value and then return to the function and continue executing code.

// From MDN:

// Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.

// Calling a generator function does not execute its body immediately; an iterator object for the function is returned instead. 
// When the iterator's next() method is called, the generator function's body is executed until the first yield expression, 
// which specifies the value to be returned from the iterator or, with yield*, delegates to another generator function. 
// The next() method returns an object with a value property containing the yielded value and a done property which indicates 
// whether the generator has yielded its last value as a boolean. Calling the next() method with an argument will resume 
// the generator function execution, replacing the yield statement where execution was paused with the argument from next(). 

(function() {

	function* shopping() {
		
		// stuff on the sidewalk

		// walking down the sidewalk

		// go int othe store with cash

		const stuffFromStore = yield 'cash';	

		// walking to laundry place

		const cleanClothes = yield 'laundry';

		// walking back home

		return [stuffFromStore, cleanClothes];
	}

	// Stuff happening in the store

	const gen = shopping(); // Invoking our generator function with parens doesn't actually do anything.

	console.log(gen); // shopping generator object

	console.log(gen.next()); // leaving our house

	// walk into the store
	// walk up and down the aisles
	// purchase our stuff

	console.log(gen.next('groceries')); // leaving the store with groceries

	console.log(gen.next('clean clothes')); // leave the laundry place with clean clothes

	//  ---------------------------------------------------------------------------------------------------------------------------------------
	//  ---------------------------------------------------------------------------------------------------------------------------------------
 
 })();







// Another example with a colors generator function.

(function(){

	function* colors() {
		yield 'red';
		yield 'blue';
		yield 'green';
	}

		// const gen = colors();
		// console.log(gen.next());
		// console.log(gen.next());
		// console.log(gen.next());

	//  ---------------------------------------------------------------------------------------------------------------------------------------
	//  ---------------------------------------------------------------------------------------------------------------------------------------
	//  ------------------------------- Stephen's "big reveal": generators work perfectly with for...of loops.  -------------------------------
	//  ---------------------------------------------------------------------------------------------------------------------------------------
	//  ---------------------------------------------------------------------------------------------------------------------------------------

	// Below is the example.

	// Our loop iterates through our generator and pushes each result into our myColors array.

	const myColors = [];

	for (let color of colors()) {
		myColors.push(color);
	}
	console.log(myColors); // ["red", "blue", "green"]

	// Generators can be used to iterate over any data structure we want, which is one of their biggest uses.

	//  ---------------------------------------------------------------------------------------------------------------------------------------
	//  ---------------------------------------------------------------------------------------------------------------------------------------

})();







// Below is another example, showing where generator functions can be useful.

// We are first creating an object that represents a software engineering team.

// We then create another object representing a testing team, which will be separate from the engineering team.

// We then combine generator functions.

(function(){

	const testingTeam = {
		lead: 'Amanada',
		tester: 'Bill'
	};

	const engineeringTeam = {

		testingTeam,
		size: 3,
		department: 'Engineering',
		lead: 'Jill',
		manager: 'Alex',
		engineer: 'Dave'

	};

	// What we might use a generator for is to create a function that only iterates through our employee keys on the above object,
	// not the size or department.

	function* TeamIterator(team) {
		yield team.lead;
		yield team.manager;
		yield team.engineer;
		const testTeamGenerator = TestTeamIterator(team.testingTeam);

		// The yield* keyword can be thought of as a trap door that lets our for..of loop fall into our TestTeamIterator generator
		// and lets it also iterate over our other yield statements in the TeamTeamIterator generator.

		// This is called Generator Delegation.

		yield* testTeamGenerator;
	}

	function* TestTeamIterator(team) {
		yield team.lead;
		yield team.tester;
	}

	const myTeam = [];

	for (let member of TeamIterator(engineeringTeam)) {
		myTeam.push(member);
	}
	console.log(myTeam);

	console.log("-----------------------------------------------------------------");

	//  ---------------------------------------------------------------------------------------------------------------------------------------
	//  ---------------------------------------------------------------------------------------------------------------------------------------

})();






// Next, we take the above code and refactor it to make it more concise.

// We use symbol iterators to do this.

// The way it helps is that it allows us to merge our Iterator generators into our two team objects.

// Symbol iterator is a special object in ES6 that teaches objects how to deal with for...of loop.

(function(){

	const testingTeam = {
		lead: 'Amanada',
		tester: 'Bill',

		// Our for...of loop discovers the key called [Symbol.iterator] and if it exists, 
		// it will use the generator function it is pointing at for iteration.

		// In ES6 we can use key interpolation by using square brackets around the key name.
		// This does not create an array, but allows us to have a dynamically generated key.

		[Symbol.iterator]: function* () {

			// We use 'this' here to refer to the testingteam object.

			yield this.lead;
			yield this.tester;
		}
	};

	const engineeringTeam = {

		testingTeam,
		size: 3,
		department: 'Engineering',
		lead: 'Jill',
		manager: 'Alex',
		engineer: 'Dave',
		[Symbol.iterator]: function* () {

			yield this.lead;
			yield this.manager;
			yield this.engineer;

			// We use yield* here to make sure that when iterating through our engineeringTeam object,
			// we also drop down into our testingTeam object and also walk through that too.

			yield* testingTeam;
		}

	};

	const myTeam = [];

	// We no longer need to use a separately defined generator function.

	// We can just pass our engineeringTeam object and our for...of loop will find the [Symbol.iterator] object
	// which will use the generator to iterate through the object and also the testingTeam object to produce
	// the same result as before.

	for (let member of engineeringTeam) {
		myTeam.push(member);
	}

	console.log(myTeam);

	console.log("-----------------------------------------------------------------");

})(); 
	

// Next we create a basic tree data structure to show how we can use a generator to iterate through an unknown
// number of nodes.

(function() {

	// We create a class of Comment, which contains content and children

	class Comment {
		constructor(author, content, children) {
			this.author = author;
			this.content = content;
			this.children = children;
		}

	// We use a symbol iterator with this specific syntax to allow a for..of loop to 
	// yield the current node's content, and then we use another for..of loop
	// to iterate over all the child nodes of our current node and yield all of each
	// child's content too.

		*[Symbol.iterator]() {
			yield this.content;
			for (let child of this.children) {
				yield* child;
			}
		}
	}

	// We create an array of child comments

	const children = [
		new Comment('will', 'good comment', []),
		new Comment('jaffathecake', 'bad comment', []),
		new Comment('Annonymous', 'meh', [])
	];

	// We Create our tree structure, with a top level comment and then use our array of child comments.

	const tree = new Comment('Dude1000', 'Great post!', children);

	const myTree = [];

	// Here we iterate over our tree and push all the values to our new content & authors array.

	for (let value of tree) {
		myTree.push(value);
	}

	console.log(myTree);
	console.log(tree);

})();