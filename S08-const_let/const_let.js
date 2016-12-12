// Const & Let Keywords

// The let statement declares a block scope local variable, optionally initializing it to a value.

// let allows you to declare variables that are limited in scope to the block, statement,
//  or expression on which it is used. 

// This is unlike the var keyword, which defines a variable globally, 
// or locally to an entire function regardless of block scope.

// Variables declared by let have as their scope the block in which they are defined, 
// as well as in any contained sub-blocks. In this way, let works very much like var. 
// The main difference is that the scope of a var variable is the entire enclosing function:

function varTest() {
	var x = 1;
	if (true) {
		var x = 2; // same variable
		console.log(x); // 2
	}
	console.log(x); // 2
}

function letTest() {
	let x = 1;
	if (true) {
		let x = 2; // different variable
		console.log(x); // 2
	}
	console.log(x); // 1
}

// --------------------------

// Constants are block-scoped, much like variables defined using the let statement. 
// The value of a constant cannot change through re-assignment, and it can't be redeclared.

// This declaration creates a constant that can be either global or local to the function in which it is declared. 
// An initializer for a constant is required; that is, you must specify its value in the same statement in which 
// it's declared (which makes sense, given that it can't be changed later).

// The const declaration creates a read-only reference to a value. It does not mean the value it holds is immutable, 
// just that the variable identifier cannot be reassigned. 
// For instance, in case the content is an object, this means the object itself can still be altered.

// All the considerations about the "temporal dead zone" that apply to let, also apply to const.

// A constant cannot share its name with a function or a variable in the same scope.