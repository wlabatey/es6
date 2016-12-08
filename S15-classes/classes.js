// Classes in ES6

// JavaScript classes introduced in ECMAScript 6 are syntactical sugar 
// over JavaScript's existing prototype-based inheritance. 

// The class syntax is NOT introducing a new object-oriented inheritance model to JavaScript. 

// JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance.


(function(global) {

// We use the typical example of a 'Car' object and then use different brands to inherit different properties.

	const Car = function(options) {
	
		// Borrowing from jQuery and the Greetr project, we return a 
		// new Car.init object to avoid using 'new' all the time.

		return new Car.init(options);
	};


	// The car prototype is where our methods and properties will live.

	Car.prototype = {

		drive() {
			console.log('vroom');
		}

	};


	// Our init function creates a new car object.

	const init = Car.init = function(options) {
		this.title = options.title;
	};


	// Set the prototype of objects created from our Car.init function constructor to 
	// the prototype of Car.prototype.

	Car.init.prototype = Car.prototype;

	// Expose Car object to the global object for use as window.Car or window.C$

	global.Car = global.C$ = Car;


// Set global to window

})(window);

const carA = C$({title:"Focus"});
console.log(carA);