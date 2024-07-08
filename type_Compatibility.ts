// let items = [1, 2, 3];

// items.forEach((item, index, array) => {
//   console.log(`Item: ${item}, Index: ${index}, Array: ${array}`);
// });


// function example(callback:number) {
//   callback(1, 2, 3);
// }

// // Using all parameters
// example((a, b, c) => {
//   console.log(`a: ${a}, b: ${b}, c: ${c}`);
// });

// // Using only the first parameter
// example((a) => {
//   console.log(`a: ${a}`);
// });


//=================================================================

// In JavaScript, it's common for functions to provide more parameters than you might actually use. When this happens, you can choose to ignore the extra parameters. This is often seen in functions like Array.prototype.forEach, which calls a provided callback function once for each element in an array, passing the following arguments to the callback:

// The current element being processed.
// The index of the current element.
// The array forEach was called upon.
// You don't have to use all these parameters in your callback function. You can choose to use only the ones you need.

// Example: Using All Parameters
// Here’s an example where we use all the parameters provided by forEach:


// let items = [1, 2, 3];

// items.forEach((item, index, array) => {
//   console.log(`Item: ${item}, Index: ${index}, Array: ${array}`);
// });

// Example: Ignoring Extra Parameters
// Here’s an example where we only use the first parameter, item, and ignore the rest:








