// These two interfaces are completely
// transferrable in a structural type system:
// interface Ball {
//   diameter: number;
// }
// interface Sphere {
//   diameter: number;
// }
// let ball: Ball = { diameter: 10 };
// let sphere: Sphere = { diameter: 20 };
// sphere = ball;
// ball = sphere;
// If we add in a type which structurally contains all of
// the members of Ball and Sphere, then it also can be
// set to be a ball or sphere.
//   interface Tube {
//     diameter: number;
//     length: number;
//   }
//   let tube: Tube = { diameter: 12, length: 3 };
//   //tube = ball;//Error
//   ball = tube;
// Because a ball does not have a length, then it cannot be
// assigned to the tube variable. However, all of the members
// of Ball are inside tube, and so it can be assigned.
// TypeScript is comparing each member in the type against
// each other to verify their equality.
//=====================================================================
// Now lets do it Case By Case
//Case when "FRESH"" object literal are assigned to a variable
//Rule: When a fresh object literal is assigned to a variable or passed for a parameter of a non-empty target type,
//it is an error for the object literal to specify properties that don't exist in the target type.
//The rationale for the below two errors is that since the fresh types of the object literals are
//never captured in variables, static knowledge of the excess or misspelled properties should not be silently lost.
let myType = { name: "Zia", id: 1 };
//Case 1
myType = { id: 2, name: "Tom" }; //Case 1: can only assign a type which has the the same properties
export {};
// myType = { id: 2,  name: "Tom",age:23 };//Case 1: can only assign a type which has the the same properties
// myType = { id: 2, };//Case 1: can only assign a type which has the the same properties
//Object literals can only have properties that exist in contextual type
//Case 2a
// myType = { id: 2,  name_person: "Tom" };//Case 2a: Error, renamed or missing property
// Case 2B
// var x: { id: number; [x: string]: any };
// x = { id: 1, fullname: "Zia" };
/*

Here, x is defined with an index signature, [x: string]: any, which means x can have any number of properties with string keys and any type of values. The assignment { id: 1, fullname: "Zia" } is valid because the index signature allows additional properties (fullname in this case) beyond the explicitly declared id property.

*/
/*

Summary

====>>> Fresh Object Literals: When directly assigning an object literal to a variable, TypeScript enforces that the object has exactly the properties specified in the target type. Extra or misspelled properties are not allowed.

=====>>> Index Signatures: By using an index signature in a type definition, you can allow additional properties that are not explicitly defined in the type. This relaxes the excess property check.

=====>>>> Type Safety: These rules help catch potential bugs early by ensuring that object literals conform exactly to the expected types unless explicitly allowed otherwise via mechanisms like index signatures.

*/
// =======>>>>>>>>> Type Definition with Index Signature <<<<<<<<<====================
// var x: { id: number; [key: string]: any };
/*

This line assigns an object literal { id: 1, fullname: "Zia" } to the variable x.

The id property matches the explicitly defined property in the type { id: number, [key: string]: any }.
The fullname property is not explicitly defined but is allowed because of the index signature [key: string]: any.
The index signature [key: string]: any means that any additional properties with string keys are permitted, and their values can be of any type.

Step-by-Step Explanation
Explicit Property Check:

The object { id: 1, fullname: "Zia" } is checked against the type { id: number, [key: string]: any }.
It must have an id property of type number, which it does (id: 1).
Index Signature Check:

The type definition { id: number, [key: string]: any } allows for any other properties with string keys and values of any type because of the index signature [key: string]: any.
The object { id: 1, fullname: "Zia" } has an additional property fullname with a string key and a value of type string (which is allowed by any).
Because the object { id: 1, fullname: "Zia" } conforms to both the explicit property requirement and the index signature, the assignment is valid.

*/
// ========>>>>>>>>>>>>>>>> Practical Example <<<<<<<<<<<<<<<<<<<<<=======================
/*

Consider a real-world scenario where you want to define an object type that has some required properties but can also accommodate any number of additional properties.

*/
// interface User {
//   id: number;
//   [key: string]: any; // Allows any other properties with string keys
// }
// let user: User = {
//   id: 123,
//   name: "Alice",
//   email: "alice@example.com",
//   age: 30,
// };
// console.log(user);
/*

In this example:

id is a required property of type number.
The index signature [key: string]: any allows additional properties (name, email, age) to be added to the user object.
This flexibility is useful when dealing with objects that might have a fixed set of required properties but also need to support additional arbitrary properties.

*/
// ===============>>> Difference B/W Fresh & Stale Object <<<===================
/*

In TypeScript, "fresh" and "stale" objects are terms used to describe how TypeScript checks object literal types, especially when it comes to excess property checks.

=====>>>>> Fresh Object

A "fresh" object is an object literal that is being assigned or passed directly to a variable or function. When TypeScript encounters a fresh object, it performs strict excess property checks to ensure that the object only contains properties that exist in the target type.

====>>>>> Stale Object

A "stale" object is an object that has already been assigned to a variable. When TypeScript encounters a stale object, it does not perform excess property checks as strictly as it does for fresh objects. This is because TypeScript assumes that any extra properties in a stale object are intentional and should not raise errors.

*/
// ==========>>>>> Fresh Object <<<<<<<<=====================
// interface Person {
//   name: string;
//   age: number;
// }
// let person: Person;
// // Fresh object assignment
// person = { name: "Alice", age: 25 }; // OK, properties match the Person interface
// // Excess property check
// person = { name: "Bob", age: 30, extraProp: true }; // Error: Object literal may only specify known properties
// ==========>>>>> Stale Object <<<<<<<<=====================
// interface Person {
//   name: string;
//   age: number;
// }
// let person: Person;
// let obj = { name: "Alice", age: 25, extraProp: true }; // obj is a stale object
// // Assignment of stale object
// person = obj; // OK, no excess property check for stale objects
/*

In this example:

obj is created as an object literal with an extra property extraProp.
When obj is assigned to person, TypeScript does not perform the excess property check because obj is a stale object. This assignment is allowed even though obj has an extra property.

*/
// interface Person {
//   name: string;
//   age: number;
// }
// function greet(person: Person) {
//   console.log(`Hello, ${person.name}`);
// }
// // Passing fresh object
// greet({ name: "Alice", age: 25 }); // OK
// // Excess property check
// // greet({ name: "Bob", age: 30, extraProp: true }); // Error: Object literal may only specify known properties
// // Using stale object
// let obj = { name: "Charlie", age: 35, extraProp: true };
// greet(obj); // OK, no excess property check for stale objects
/*

In this example:

Passing a fresh object { name: "Alice", age: 25 } to the greet function is allowed.
Passing a fresh object { name: "Bob", age: 30, extraProp: true } with an extra property causes an error.
Passing a stale object obj with an extra property is allowed because excess property checks are not performed on stale objects.
Summary
Fresh Object: An object literal assigned or passed directly. Subject to strict excess property checks.
Stale Object: An object already assigned to a variable. Not subject to strict excess property checks.
These concepts help TypeScript catch potential errors in your code by ensuring that object literals conform exactly to the expected types unless explicitly allowed otherwise.

*/
// var x: { foo: number };
// x = { foo: 1, baz: 2 };  // Error, excess property `baz`
// var y: { foo: number, bar?: number };
// y = { foo: 1, baz: 2 };  // Error, excess or misspelled property `baz`
// var a: { foo: number };
// var a1 = { foo: 1, baz: 2 };
// a = a1;//No Error
// var z: { foo: number, bar?: number };
// var z1 = { foo: 1, baz: 2 };
// z = z1;//No Error
