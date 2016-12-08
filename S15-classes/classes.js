// Classes in ES6

// JavaScript classes introduced in ECMAScript 6 are syntactical sugar 
// over JavaScript's existing prototype-based inheritance. 

// The class syntax is NOT introducing a new object-oriented inheritance model to JavaScript. 

// JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance.


// We are going to use the example of a car object and then create another objetc that inherits from it.


// ---------------------------------

// Eric Elliott argues that using class inheritances in Javascript is not ideal.

// In JavaScript, class inheritance piggybacks on top of the very rich, flexible prototypal inheritance features
// built into the language a long time ago, but when you use class inheritance — even 
// the ES6+ `class` inheritance built on top of prototypes, you’re not using the full power & flexibility 
// of prototypal OO. In fact, you’re painting yourself into corners and opting into all of the class 
// inheritance problems.

// See here: https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9#.yb1afcwtx

// ---------------------------------

(function() {


	function Car(options) {
		this.title = options.title;
	}

	// Stephen argues that using .prototype is confusing and difficult when compared to the way ES6
	// handles prototypal inheritance with classes.

	Car.prototype = {
		drive() {
			console.log('vroom');
		}
	};

	const car = new Car({ title: 'Focus' });

	console.log(car);
	car.drive();


	// Again, below is the boilerplate code required to allow our new Toyota object to inherit properties
	// from our Car object.

	function Toyota(options) {
		Car.call(this,options); // We call the Car function constructor to initialise our Toyota object with a title property.
		this.color = options.color;
	}


	// Object.create() allows us to create a new object with a specified protoype object.
	// We set the prototype of Toyota to a new empty object which has Car.prototype as its prototype.
	// This way, our Toyota objects will be able to access the methods and properties of our Car object.

	Toyota.prototype = Object.create(Car.prototype);

	// We set the constructor property of Toyota.property to our constructor function.

	Toyota.prototype.constructor = Toyota;

	// We add the honk method to Toyota's prototype object

	Toyota.prototype.honk = function() {
		console.log('beep');
	};


	// -----------------------------------

	// Stephen's point with going through the above code is to show how complicated the boilerplate code can be
	// when setting up objects and inheritance in ES5.


	const toyota = new Toyota({color: 'red', title: 'Daily Driver'});
	console.log(toyota);
	toyota.honk();
	toyota.drive();

	console.log("------------------------------------------");

})();


// Now we are going to refactor the above code using ES6 classes.

// We have created equivalent functionality to the above, but using far less boilerplate code.

(function(){

	// This gives us a new class object of Car

	class Car {

		// The constructor method is a special method for creating and 
		// initializing an object created with a class.

		constructor({ title }) {
			this.title = title;
		}


		// We can add methods to our Car object by using ehanced object literal syntax, like below.

		drive() {
			console.log('vroom');
		}
	}

	class Toyota extends Car {

		constructor(options) {
			super(options); // The super keyword allows us to call a method of 
							// the exact same name on the parent class.

							// This is equivalent of calling Car.constructor();

			this.color = options.color;
		}

		honk() {
			console.log('beep');
		}
	}

	const car = new Car({title: 'Focus'});
	const toyota = new Toyota({title: 'Toyota', color: 'red'});

	console.log(car); // An empty Car object
	console.log(toyota);
	car.drive();
	toyota.drive();
	toyota.honk();


})();