/*

The every method is a built-in function in JavaScript that iterates over each element in an array and tests them against a provided condition. It returns true only if all elements in the array pass the test implemented by the condition. Otherwise, it returns false as soon as it encounters a single element that fails the test.

Here's a breakdown of how it works:

*/

// array.every(callback(currentValue, index, arr), thisArg);

/*

Parameters:

array: The array on which to execute the every method.
callback(currentValue, index, arr) (required): This is a function that defines the test condition for each element in the array.
currentValue: The current element being processed in the iteration.
index (optional): The index of the current element being processed.
arr (optional): The original array that every was called upon.
thisArg (optional): This value is used as this when executing the callback function.
Return Value:

true: If the callback function returns true for all elements in the array.
false: If the callback function returns false for any element in the array.

*/

// const numbers = [1, 2, 3, 4, 5];

// // Check if all elements are even
// const allEven = numbers.every(function(number) {
//   return number % 2 === 0;
// });

// console.log(allEven); // Output: false (because 1 is odd)

/*

Key Points:

The every method stops iterating as soon as it finds an element that fails the test.
It's commonly used for validation purposes, ensuring all elements in an array meet a certain criteria.
The callback function can access the current element, its index, and the original array for flexible testing.
The thisArg parameter allows you to customize the context (this) within the callback function.
Common Use Cases:

Checking if all elements in an array are greater than a certain value.
Verifying if all items in a shopping cart have a valid quantity.
Validating user input to ensure it meets specific requirements.
Combining with other array methods like filter for more complex data manipulation tasks.
By effectively using the every method, you can write concise and efficient code to validate and work with elements within arrays in JavaScript.


*/
