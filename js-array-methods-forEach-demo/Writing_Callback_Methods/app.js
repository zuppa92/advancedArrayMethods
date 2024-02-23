function holler() {
	console.log('HELLO Loud shout!');
}

const whisper = function() {
	console.log('talking in a quiet voice, whisper');
};

function add(x, y) {
	return x + y;
}
function subtract(x, y) {
	return x - y;
}

function multiply(x, y) {
	return x * y;
}
function divide(x, y) {
	return x / y;
}
function power(x, y) {
	return x ** y;
}

//We can store functions in an array (not that common really, but we can!)
//This works because functions are just regular old values in JavaScript!
const mathFuncs = [ add, subtract, multiply, divide, power ];

//This function expects the 3rd argument to be a function:
function doMath(a, b, mathFunc) {
	return mathFunc(a, b);
}

doMath(5, 20, add); //25
doMath(10, 12, multiply); //120

doMath(3, 4, function(a, b) {
	console.log(a ** b);
});

//This function calls every function in an array of functions
function doAll(a, b, funcs) {
	for (let func of funcs) {
		console.log(func(a, b));
	}
}

doAll(3, 3, mathFuncs);
//6 (from add)
//0 (from subtract)
//9 (from multiply)
//1 (from divide)
//27 (from power)
