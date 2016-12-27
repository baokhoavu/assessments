// # Arrays

// Given the following array
var list = [1, 2, 3, 4, 5];
// Remove one from the beginning of the array and add it to the end
list.splice(0, 5, 2, 3, 4, 5, 1)

// # Objects

// Create an object with key value pairs for
// `name` - a string,
// `isAlive` - a boolean,
// and `hobbies` an array.
// Assign the object to the variable `user`
user = {
  name: 'Sam',
  isAlive: true,
  hobbies: ['running', 'eating'];
}


// Add 'golf' to the `user`'s `hobby` array.
user.hobbies.push('golf');

// # Functions

// Define a function `sayHello` that takes a name string and returns "Hello" plus that name and an exclamation point.
// Example:

// sayHello('Mer') // "Hello Mer!"
var sayHello = function(name) {
  return 'Hello ' + name + '!';
}

// Define a function `createRange` that takes `min` and `max` as parameters and returns an array with all the numbers
// between min and max
// Example:

// createRange(4, 8) // [4, 5, 6, 7, 8]
createRange = function (min, max) {
  list = [];
  for(var i = min; i <= max; i++) {
    list.push(i);
  }
}

// # Bonus Callbacks

// Given the following array...

// use `.filter` to select only odd numbers
// then `.map` to double each filtered number
// then `.reduce` to sum the doubled numbers
// Set the answer to #answer in the DOM.

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var oddz = list.filter(function(n) {
  return n % 2 !=0;
});

var doublez = oddz.map(function(n) {
  return n * 2;
});

var sumz = doublez.reduce(function(n, y) {
  return n + y;
});

//Scope

/* Create a variable in the global scope called name, then write a function called thisName,
   which creates another variable inside the function called name, and returns name. What do
   you think the output would be when you invoke the function thisName? What happens to the variable
   name in the global scope?
*/
var name = 'sam'
thisName = function(name) {
  var name = 'john';
  return name;
}

john gets returned
