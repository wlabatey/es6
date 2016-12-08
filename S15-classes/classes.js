// Classes in ES6

// JavaScript classes introduced in ECMAScript 6 are syntactical sugar 
// over JavaScript's existing prototype-based inheritance. 

// The class syntax is NOT introducing a new object-oriented inheritance model to JavaScript. 

// JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance.


// We are going to use the example of a car object and then create another objetc that inherits from it.


(function() {

	function Car(options) {
		this.title = options.title;
	}

	Car.prototype = {
		drive() {
			console.log('vroom');
		}
	};

	const car = new Car({ title: 'Focus' });

	console.log(car);
	car.drive();

})();