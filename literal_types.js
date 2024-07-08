// let changingString = "Hello World";
// changingString = "Olá Mundo";
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system
// changingString;
export {};
// let changingString: string;
// const constantString = "Hello World";
// // Because `constantString` can only represent 1 possible string, it
// // has a literal type representation
// constantString;
// const constantString: "Hello World";
// Try;
// let x: "hello" = "hello";
// // OK
// x = "hello";
// // ...
// x = "howdy";
// Type '"howdy"' is not assignable to type '"hello"'.
/*

It’s not much use to have a variable that can only have one value!

But by combining literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values:

*/
// Combining literals into unions in TypeScript allows you to define a type that can only be one of a specific set of values. This is particularly useful for functions that should only accept certain predefined values, providing better type safety and reducing errors.
// Example: Literal Union Types
// Let's start with a basic example. Suppose you have a function that should only accept the colors "red", "green", or "blue":
// type Color = "red" | "green" | "blue";
// function printColor(color: Color) {
//   console.log(`The color is ${color}`);
// }
// printColor("red");   // Valid
// printColor("green"); // Valid
// printColor("blue");  // Valid
// printColor("yellow"); // Error: Argument of type '"yellow"' is not assignable to parameter of type 'Color'.
/*

Advantages

Type Safety: You get compile-time checks, ensuring that only the allowed values can be passed to the function. This helps catch errors early during development.
Autocomplete: Many IDEs can provide autocomplete suggestions for the allowed values, making it easier to use the function correctly.
Documentation: The allowed values are clearly documented by the type definition, making the code easier to understand.

More Complex Example

Literal unions can be used with other types to create more complex types. For example, you might have a function that only accepts specific combinations of strings and numbers:

*/
// type Size = "small" | "medium" | "large";
// type Status = "active" | "inactive";
// type Item = {
//   size: Size;
//   status: Status;
// };
// function createItem(size: Size, status: Status): Item {
//   return { size, status };
// }
// const item1 = createItem("small", "active");   // Valid
// const item2 = createItem("medium", "inactive"); // Valid
// const item3 = createItem("extra-large", "active"); // Error: Argument of type '"extra-large"' is not assignable to parameter of type 'Size'.
// const item4 = createItem("small", "pending"); // Error: Argument of type '"pending"' is not assignable to parameter of type 'Status'.
// Combining with Enums
// You can also use literal unions in combination with enums for even more structured and readable code:
// enum Direction {
//   Up = "UP",
//   Down = "DOWN",
//   Left = "LEFT",
//   Right = "RIGHT"
// }
// type Move = Direction.Up | Direction.Down | Direction.Left | Direction.Right;
// function moveCharacter(direction: Move) {
//   console.log(`Moving ${direction}`);
// }
// moveCharacter(Direction.Up);   // Valid
// moveCharacter(Direction.Left); // Valid
// moveCharacter("UP"); // Error: Argument of type '"UP"' is not assignable to parameter of type 'Move'.
/*

Summary
Combining literals into unions in TypeScript allows you to:

Define types that accept only a specific set of values.
Provide better type safety and catch errors at compile time.
Enhance code readability and maintainability.
Improve the development experience with features like autocomplete and clear documentation.
This approach is particularly useful for functions that should only accept certain predefined values, ensuring that they are used correctly throughout your code.


*/
