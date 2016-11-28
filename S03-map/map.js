// Array.prototype.map();

var numbers = [1,2,3];

// In large javascript applications, we want to avoid mutating (changing) data as much as possible.

// It is common practise to output data to a new array rather than changing the original version, 
// as this can lead to bugs down the road.

var doubledNumbers = [];

// This is how we might implement the map array helper using a for loop.

for (var i = 0; i < numbers.length ; i++) {
	doubledNumbers.push(numbers[i] * 2);
}


var doubled = numbers.map(function(number) {

	// It is critical to use the return keyword inside a mapping function,
	// otherwise the resulting array would be [undefined, undefined, undefined]

	return number * 2;

});


console.log(doubledNumbers);
console.log(doubled);

// ---------------------------------------------------

// Continued....

var cars = 	[ 
				{ model: 'Buick', price: 'CHEAP' },
				{ model: 'Camaro', price: 'expensive' }
			];


// This operation is frequently referred to as a 'pluck', as it is plucking
// a particular property off of each item in the array.

// This is quite common in client side rendering frameworks like Angular and React.

var prices = cars.map(function(car) {
	return car.price;
});

console.log(prices); // ["CHEAP", "expensive"]

//

