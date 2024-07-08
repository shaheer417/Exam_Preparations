/*

what is the difference b/w union type and type aliases


Union types and type aliases are both features in TypeScript (and some other programming languages) that help with type definitions, but they serve different purposes and have different uses.

Union Types

A union type allows a variable to be one of several types. It’s defined using the | (pipe) symbol. Union types are useful when a value can be one of several types and you want to capture all the possible types it can take.

*/

// Union code example:-

// let value: string | number | boolean | number[];
// value = 10;
// value = "Wajeeha";
// value = true;
// value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// Narrowing Code:-

// if (typeof value === "number") {
//   let total = value * 10;
//   console.log(total);
// } else if (typeof value === "string") {
//   console.log((value as string).toUpperCase());
// } else if (typeof value === "boolean") {
//   console.log(`${value} is logged in`);
// } else if (Array.isArray(value)) {
//   let filter = value.filter((val) => val % 2 !== 0);
//   console.log(filter);
// } else {
//   console.log("check the type");
// }

// function processValue(
//   value: string | number | boolean | number[]
// ): string | number | boolean | number[] {
//   if (typeof value === "number") {
//     let total = value * 10;
//     return total;
//   } else if (typeof value === "string") {
//     return value.toUpperCase();
//   } else if (typeof value === "boolean") {
//     return `${value} is logged in`;
//   } else if (Array.isArray(value)) {
//     let filter = value.filter((val) => val % 2 !== 0);
//     return filter;
//   }
//   return value;
// }

// // Example usage:console.log(processValue(10)); // Output: 100
// console.log(processValue("Wajeeha")); // Output: WAJEEHA
// console.log(processValue(true)); // Output: true is logged in
// console.log(
//   processValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
// ); // Output: [1, 3, 5, 7, 9, 11, 13, 15]

/////////////////////////////////////////////////////////////////////////////////////////
/*

Type Aliases

Type aliases allow you to create a new name for a type. This can make your code more readable and easier to manage, especially for complex types. You can create a type alias using the type keyword.

*/

// type StringOrNumber = string | number;

// let value: StringOrNumber;
// value = "hello"; // valid
// value = 42;      // valid

/*

Key Differences

Purpose:

Union Types: Specifically denote that a variable can be one of several types.

Type Aliases: Create a new name for any type, which can include primitive types, union types, intersection types, tuples, and more.

Usage:

Union Types: Directly specify multiple types for a variable or a function parameter.

Type Aliases: Define a reusable type that can be used throughout your code.
Complexity:

Union Types: Typically used directly when the types are simple and few in number.

Type Aliases: Often used for more complex types or when a type is reused in multiple places to avoid repetition and improve readability.

*/

// type Point = {
//   x: number;
//   y: number;
//   z: (num1: number, num2: number) => number;
// };

/*

There are a few syntax issues in your type definition. Here’s the corrected version:

In TypeScript, the type definition should not include the function implementation, just the type of the function.

*/

// type Shape = Point | { radius: number };

// let shape: Shape = {
//   x: 10,
//   y: 9,
//   z: (num1: number, num2: number): number => {
//     return num1 * num2;
//   },
// };

// console.log(shape.z(shape.x, shape.y));
// console.log(Object.keys(shape));
// console.log(Object.values(shape));

// let shape2 = {
//   radius: 4,
// };

// console.log(shape2.radius);

/*

Here, Point and Shape are type aliases that help define more complex types. Shape is a union type alias that can be either a Point or an object with a radius property

*/

// ======>>>>>> Different types created using type aliases in TypeScript <<<<<<=============

// ===>>> 1. Primitive Types

// You can create a type alias for a single primitive type.

// type myType = number; // single primitive type.

// let myNumber: myType = 4;
// console.log(myNumber.toFixed(2));

// ===>>> 2. Union Types

// You can use a type alias to define a union type.

// type myUnionType = string[] | number[];

// // let myVariable: myUnionType = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let myVariable: myUnionType = ["Shaheer", "Arooj", "Wajeeha"];

// // if(Array.isArray(myVariable) &&  typeof "number"){
// // }

// if (
//   Array.isArray(myVariable) &&
//   myVariable.every((element) => typeof element === "number")
// ) {
//   let myArr = myVariable.map((item) => item * 2);
//   console.log(myArr);
// } else if (
//   Array.isArray(myVariable) &&
//   myVariable.every((element) => typeof element === "string")
// ) {
//   let myStr = myVariable.join(" ");
//   console.log(myStr);
// }

//====>>> Correction code <<<<=======

// if (isNumberArray(myVariable)) {
//   let myArr = myVariable.map((item) => item * 2);
//   console.log(myArr);
// } else if (
//   Array.isArray(myVariable) &&
//   myVariable.every((element) => typeof element === "string")
// ) {
//   let myStr = myVariable.join(" ");
//   console.log(myStr);
// } else {
//   // Handle unexpected type for myVariable (optional)
//   console.error("myVariable is not an array of strings or numbers!");
// }

// if (Array.isArray(myVariable)) {
//   if (
//     (myVariable as number[]).every((element) => typeof element === "number")
//   ) {
//     let myArr = myVariable.map((item) => item * 2); // Now item is inferred as number
//     console.log(myArr);
//   } else if (myVariable.every((element) => typeof element === "string")) {
//     let myStr = myVariable.join(" ");
//     console.log(myStr);
//   }
// }

// =====>>> 3. Intersection Types

// You can use a type alias to define an intersection type, combining multiple types into one.

// type Parents = {
//   father: string;
//   mother: string;
// };

// type Child = {
//   daughter: string;
// };

// let family: Parents & Child = {
//   father: "Shaheer",
//   mother: "Arooj",
//   daughter: "Wajeeha",
// };

// ===>>> 4. Object Types

// You can use a type alias to define an object type.

// type Point = {
//   x: number;
//   y: number;
// };

// let point: Point;
// point = { x: 10, y: 20 }; // valid

// ===>>> 5. Tuple Types

// You can use a type alias to define a tuple type.

// type Coordinate = [number, number];

// let coordinate: Coordinate;
// coordinate = [10, 20]; // valid

// ===>>> 6. Function Types

// You can use a type alias to define a function type.

// type Greet = (name: string) => string;

// let greet: Greet;
// greet = (name) => `Hello, ${name}`; // valid

// ===>>> 7. Array Types

// You can use a type alias to define an array type

// type StringArray = string[];

// let fruits: StringArray;
// fruits = ["Apple", "Banana", "Cherry"]; // valid

// ===>>> 8. Generics

// You can use a type alias with generics to define a reusable type.

// type Container<T> = {
//   value: T;
// };

// let stringContainer: Container<string>;
// stringContainer = { value: "Hello" }; // valid

// let numberContainer: Container<number>;
// numberContainer = { value: 42 }; // valid

// ========>>> DIFFERENCE B/W TYPE ALIAS & INTERFACE <<<=============

// Type aliases and interfaces in TypeScript both serve the purpose of defining custom types, but they have some differences in terms of features and usage. Here's a detailed comparison:

// Type Aliases

// Type aliases create a new name for a type. They can define primitive types, union types, intersection types, tuples, and even function types.

// type StringOrNumber = string | number;
// type UserTuple = [number, string];
// type Greet = (name: string) => string;

// ===>>> Reusability:

// Can be used to create reusable and complex types.

// type Container<T> = { value: T };

// ===>>> Union and Intersection Types:

// Type aliases can define union and intersection types.

// type NameOrAge = string | number;
// type Person = HasName & HasAge;

/*

Limitations:

Declaration Merging:
Type aliases do not support declaration merging.
If you try to redefine a type alias, it will result in an error.

*/

/*

Interfaces

Definition:

Interfaces are used to define the shape of an object. They are more powerful in terms of object type definition and can extend other interfaces.

*/

// ====>>> 1- Object Shape Definition:-

// Primarily used for defining the shape of objects.

// interface User {
//   name: string;
//   age: number;
// }

// ====>>> 2- Declaration Merging:

// Interfaces support declaration merging, allowing the same interface name to be used multiple times and merged into a single definition.

// ====>>> 3- Extending:

// Interfaces can extend other interfaces, making it easy to create complex types from simpler ones.

// interface Person {
//   name: string;
// }

// interface Employee extends Person {
//   employeeId: number;
// }

// ====>>>> 4- Implements Keyword:

// Classes can implement interfaces to ensure they adhere to a specific contract.

// class Manager implements Employee {
//   name: string;
//   employeeId: number;
//   constructor(name: string, employeeId: number) {
//     this.name = name;
//     this.employeeId = employeeId;
//   }
// }

/*

Limitations:

Union and Intersection Types:
Interfaces cannot directly define union or intersection types.

*/

/*

When to Use Each
Use Type Aliases When:

Defining union or intersection types.
Defining primitive types, tuples, or function types.
Creating reusable and complex types that don't require extension or merging.
Use Interfaces When:

Defining the shape of an object, especially for classes.
Needing declaration merging.
Extending other interfaces to create complex object types.

*/




///////////////////////////////////////////////////////////////////////////////////////////////
//=========================================================================================
/////////////////////////////////////////////////////////////////////////////////////////////

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// function getUser(): User {
//   return { id: 1, name: "Alice", email: "alice@example.com" };
// }

// function printUser(user: User): void {
//   console.log(`User: ${user.name}, Email: ${user.email}`);
// }

// type Result = { success: true; value: any } | { success: false; error: string };

// function process(input: string): Result {
//   if (input === "valid") {
//     return { success: true, value: 42 };
//   } else {
//     return { success: false, error: "Invalid input" };
//   }
// }

// function handleResult(result: Result): void {
//   if (result.success) {
//     console.log(`Value: ${result.value}`);
//   } else {
//     console.log(`Error: ${result.error}`);
//   }
// }

/*

// 1. Basic Types

type ID = number;

let userId: ID = 123;

// 2. String Alias
type Username = string;

let name: Username = "Alice";

// 3. Union Type

type Status = "success" | "error";

let currentStatus: Status = "success";

// 4. Object Type

type Point = {
  x: number;
  y: number;
};

let point: Point = { x: 10, y: 20 };

// 5. Array Type

type StringArray = string[];

let names: StringArray = ["Alice", "Bob", "Charlie"];

// 6. Function Type

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

// 7. Optional Properties

type User = {
  id: number;
  name: string;
  age?: number;
};

let user: User = { id: 1, name: "Alice" };

// 8. Readonly Properties

type ImmutablePoint = {
  readonly x: number;
  readonly y: number;
};

let p: ImmutablePoint = { x: 10, y: 20 };

// 9. Intersection Types

type HasName = { name: string };
type HasAge = { age: number };

type Person = HasName & HasAge;

let person: Person = { name: "Alice", age: 25 };

// 10. Tuple Type

type StringNumberPair = [string, number];

let pair: StringNumberPair = ["Alice", 25];

// 11. Recursive Type

type TreeNode = {
  value: string;
  children?: TreeNode[];
};

let tree: TreeNode = {
  value: "root",
  children: [
    { value: "child1" },
    { value: "child2", children: [{ value: "grandchild1" }] },
  ],
};

// 12. Enum-Like Union

type Direction = "north" | "south" | "east" | "west";

let travelDirection: Direction = "north";

// 13. Type Alias with Interface

interface Car {
  make: string;
  model: string;
}

type ElectricCar = Car & { batteryCapacity: number };

let myCar: ElectricCar = {
  make: "Tesla",
  model: "Model 3",
  batteryCapacity: 75,
};

// 14. Discriminated Unions

type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; size: number };

type Shape = Circle | Square;

let myShape: Shape = { kind: "circle", radius: 10 };

// 15. Nullable Types

type MaybeString = string | null;

let optionalName: MaybeString = "Alice";

// 16. Generic Type Alias

type Result<T> =
  | { success: true; value: T }
  | { success: false; error: string };

let numberResult: Result<number> = { success: true, value: 42 };

// 17. Alias for Complex Type

type HTTPResponse = {
  status: number;
  data: any;
  error?: string;
};

let response: HTTPResponse = { status: 200, data: { message: "OK" } };

// 18. Alias for Callback Function

type Callback = () => void;

function registerCallback(cb: Callback) {
  cb();
}

registerCallback(() => console.log("Callback executed"));

// 19. Alias for Dictionary

type Dictionary<T> = { [key: string]: T };

let scores: Dictionary<number> = { Alice: 90, Bob: 85 };

// 20. Alias for Promises

type AsyncResult<T> = Promise<
  { success: true; data: T } | { success: false; error: string }
>;

async function fetchData(): AsyncResult<string> {
  return { success: true, data: "Hello, world!" };
}


*/

/*

In TypeScript, a type alias is like giving a nickname to an existing type. It doesn't create a new, separate type, but just another name for the same type.

*/

// type UserInputSanitizedString = string;

// function sanitizeInput(str: string): UserInputSanitizedString {
//   return sanitize(str);
// }

// // Create a sanitized input
// let userInput = sanitizeInput(getInput());

// // Can still be re-assigned with a string though
// userInput = "new input";

// =====>>>> Documentation code <<<<========

// type Point = {
//   x: number;
//   y: number;
// };

// // Exactly the same as the earlier example
// function printCoord(pt: Point) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }

// printCoord({ x: 100, y: 100 });

/////////////////////////////////////////////////////////////////////////////////////////////

// ====>>> Sir Zia repo <<<=======

// anonymous

// let teacher : {name: string, exp: number} = {
//     name: "Zeeshan",
//     exp: 10
// }

// // Aliased Object Type
// type Student = {
//     name: string,
//     age?: number
// }

// let student: Student = {
//     name: "Hira",
//     age: 30
// }

// console.log(student["name"]);
// console.log(student.age);

// // Interfaces

// interface Manager {
//     name: string,
//     subordiates?: number
// }

// let storeManager: Manager = {
//     name: "Bilal"
// }

// ====>>>> Raw Data <<<<======

// how to narrow the non primitive types in T.S 

// In TypeScript, narrowing non-primitive types involves using type guards and type assertions to refine the type of a variable within a certain scope. Here are some common methods to narrow non-primitive types:

// Using instanceof
// The instanceof operator can be used to narrow types when dealing with classes.

// class Dog {
//     bark() {
//         console.log("Woof!");
//     }
// }

// class Cat {
//     meow() {
//         console.log("Meow!");
//     }
// }

// function makeSound(animal: Dog | Cat) {
//     if (animal instanceof Dog) {
//         animal.bark();
//     } else if (animal instanceof Cat) {
//         animal.meow();
//     }
// }

// const myDog = new Dog();
// const myCat = new Cat();

// makeSound(myDog); // Output: Woof!
// makeSound(myCat); // Output: Meow!


// Using Array.isArray
// The Array.isArray method can be used to narrow the type to an array.

// function processValue(value: string | number | boolean | number[]): string | number | boolean | number[] {
//     if (typeof value === "number") {
//         return value * 10;
//     } else if (typeof value === "string") {
//         return value.toUpperCase();
//     } else if (typeof value === "boolean") {
//         return `${value} is logged in`;
//     } else if (Array.isArray(value)) {
//         return value.filter((val) => val % 2 !== 0);
//     } else {
//         return "check the type";
//     }
// }

// // Example usage:
// console.log(processValue(10)); // Output: 100
// console.log(processValue("Wajeeha")); // Output: WAJEEHA
// console.log(processValue(true)); // Output: true is logged in
// console.log(processValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])); // Output: [1, 3, 5, 7, 9, 11, 13, 15]

// Using Custom Type Guards
// You can define custom type guard functions to narrow types. A type guard function is a function that returns a type predicate.

// interface Square {
//     kind: "square";
//     size: number;
// }

// interface Rectangle {
// //     kind: "rectangle";
// //     width: number;
// //     height: number;
// // }

// // type Shape = Square | Rectangle;

// // function isSquare(shape: Shape): shape is Square {
// //     return shape.kind === "square";
// // }

// // function isRectangle(shape: Shape): shape is Rectangle {
// //     return shape.kind === "rectangle";
// // }

// // function getArea(shape: Shape): number {
// //     if (isSquare(shape)) {
// //         return shape.size * shape.size;
// //     } else if (isRectangle(shape)) {
// //         return shape.width * shape.height;
// //     } else {
// //         throw new Error("Unknown shape");
// //     }
// // }

// // const mySquare: Square = { kind: "square", size: 2 };
// // const myRectangle: Rectangle = { kind: "rectangle", width: 2, height: 3 };

// // console.log(getArea(mySquare)); // Output: 4
// // console.log(getArea(myRectangle)); // Output: 6

// Using Discriminated Unions
// If your types have a common discriminant property, you can narrow the types based on the value of that property.

// interface Circle {
//     kind: "circle";
//     radius: number;
// }

// interface Triangle {
//     kind: "triangle";
//     base: number;
//     height: number;
// }

// type Shape = Circle | Triangle | Square | Rectangle;

// function getArea(shape: Shape): number {
//     switch (shape.kind) {
//         case "circle":
//             return Math.PI * shape.radius * shape.radius;
//         case "triangle":
//             return (shape.base * shape.height) / 2;
//         case "square":
//             return shape.size * shape.size;
//         case "rectangle":
//             return shape.width * shape.height;
//         default:
//             throw new Error("Unknown shape");
//     }
// }

// const myCircle: Circle = { kind: "circle", radius: 2 };
// const myTriangle: Triangle = { kind: "triangle", base: 2, height: 3 };

// console.log(getArea(myCircle)); // Output: 12.566370614359172
// console.log(getArea(myTriangle)); // Output: 3


// 1. Type Guards Using the in Operator
// You can use the in operator to check for the presence of a property within an object.

// interface Square {
//     kind: "square";
//     size: number;
// }

// interface Rectangle {
//     kind: "rectangle";
//     width: number;
//     height: number;
// }

// type Shape = Square | Rectangle;

// function getArea(shape: Shape): number {
//     if ("size" in shape) {
//         return shape.size * shape.size; // shape is narrowed to Square
//     } else {
//         return shape.width * shape.height; // shape is narrowed to Rectangle
//     }
// }

// const square: Square = { kind: "square", size: 2 };
// const rectangle: Rectangle = { kind: "rectangle", width: 2, height: 3 };

// console.log(getArea(square)); // Output: 4
// console.log(getArea(rectangle)); // Output: 6




