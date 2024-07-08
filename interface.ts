// Interfaces
// An interface declaration is another way to name an object type:

// interface Point {
//   x: number;
//   y: number;
// }

// function printCoord(pt: Point) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }

// printCoord({ x: 100, y: 100 });

// Just like when we used a type alias above, the example works just as if we had used an anonymous object type. TypeScript is only concerned with the structure of the value we passed to printCoord - it only cares that it has the expected properties. Being concerned only with the structure and capabilities of types is why we call TypeScript a structurally typed type system.

// Let's break down this explanation to make it more understandable.

// Key Concepts

// Type Alias: A type alias gives a new name to a type.

// Anonymous Object Type: An anonymous object type is a type defined directly in the type annotation without giving it a name.

// Structural Typing: TypeScript cares about the shape (structure) of the data, not the name of the type.

// Example Breakdown
// Using a Type Alias
// Suppose you define a type alias for a coordinate:

// type Point = { x: number; y: number };

// This creates a new name Point for the type { x: number; y: number }.

// Using an Anonymous Object Type:-

// Alternatively, you could write the type directly in a function without giving it a name:

// function printCoord(pt: { x: number; y: number }) { // Anonymous Object Type
//   console.log(`x: ${pt.x}, y: ${pt.y}`);
// }

// TypeScript's Structural Typing

// TypeScript only cares about the structure of the type, not the name. This means if you pass an object with the correct structure (has properties x and y, both numbers), TypeScript will accept it.

// type Point = { x: number; y: number };

// function printCoord(pt: Point) {
//   console.log(`x: ${pt.x}, y: ${pt.y}`);
// }

// const myPoint = { x: 10, y: 20 };
// printCoord(myPoint);  // This works because myPoint has the right structure

// Even if you didn't use the Point alias, it would still work as long as the structure matches

// function printCoord(pt: { x: number; y: number }) {
//   console.log(`x: ${pt.x}, y: ${pt.y}`);
// }

// const myPoint = { x: 10, y: 20 };
// printCoord(myPoint);  // This also works because myPoint has the right structure

/*

Summary
Type Alias: Gives a name to a type (e.g., type Point = { x: number; y: number }).
Anonymous Object Type: Uses the type directly without naming it (e.g., { x: number; y: number }).
Structural Typing: TypeScript checks that the structure (properties and types) matches, not the name of the type.
TypeScript's structural typing system ensures that as long as the shape of the data matches what is expected, it doesn't matter if you use a type alias or an anonymous object type. This is why TypeScript is called a structurally typed system.

*/

// ===========>>>>>> Differences Between Type Aliases and Interfaces <<<<============

// In TypeScript, both type aliases and interfaces can be used to describe the shape of an object, but there are some key differences between them. Here are the main distinctions:

// Type Alias:

// type Point = {
//   x: number;
//   y: number;
// };

// Interface:

// interface Point {
//   x: number;
//   y: number;
// }

// Extending/Inheritance:-

// Interface: Interfaces can be extended using the extends keyword.

// interface Point {
//   x: number;
//   y: number;
// }

// interface Point3D extends Point {
//   z: number;
// }

// Type Alias: Type aliases can be extended using intersections:-

// type Point = {
//   x: number;
//   y: number;
// };

// type Point3D = Point & {
//   z: number;
// };

// Merging Declarations:-

// Interface: Interfaces can be merged, meaning you can define an interface multiple times, and TypeScript will combine them.

// interface Point {
//   x: number;
// }

// interface Point {
//   y: number;
// }

// // Point is now { x: number; y: number }

// Type Alias: Type aliases cannot be merged. You can only define a type alias once.

// type Point = {
//   x: number;
// };

// // Error: Duplicate identifier 'Point'.
// type Point = {
//   y: number;
// };

// Type Alias: Type aliases can be used for any type, including primitives, unions, intersections, tuples, and more.

// type ID = string | number;

// type Coordinate = [number, number];

// Interface: Interfaces are primarily used to define object shapes. They cannot be used for primitive types or tuples directly.

// interface Person {
//   name: string;
//   age: number;
// }

// Implementing Types

// Interface: Interfaces can be implemented by classes.

// interface Point {
//   x: number;
//   y: number;
// }

// class MyPoint implements Point {
//   x = 0;
//   y = 0;
// }

// Type Alias: Type aliases cannot be implemented by classes directly.

// type Point = {
//   x: number;
//   y: number;
// };

// // Error: A class can only implement an object type or interface.
// class MyPoint implements Point {
//   x = 0;
//   y = 0;
// }

/*

Use Cases
Type Alias:

When you need to define complex types like unions, intersections, or tuples.
When you need to alias primitive types or functions.
When you prefer a simpler syntax for defining types.
Interface:

When you need to define the shape of an object.
When you need to take advantage of declaration merging.
When you need to use extends to create hierarchical structures.
When you need to implement the type with a class.
Summary
Interfaces are best for defining object shapes and can be extended or merged.
Type Aliases are more flexible and can represent a wider variety of types, but cannot be extended or merged in the same way.
Choosing between the two depends on your specific use case and preferences. Interfaces are generally preferred for defining object structures, while type aliases are more versatile for other types.

*/



// Extending an interface

// interface Animal {
//   name: string;
// }

// interface Bear extends Animal {
//   honey: boolean;
// }

// const bear = getBear();
// bear.name;
// bear.honey;
        
// // Extending a type via intersections

// type Animal = {
//   name: string;
// }

// type Bear = Animal & { 
//   honey: boolean;
// }

// const bear = getBear();
// bear.name;
// bear.honey;
        









