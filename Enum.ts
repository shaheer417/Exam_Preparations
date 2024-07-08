/*

Enums (short for "enumerations") in TypeScript are a way to define a set of named constants. Enums can be numeric or string-based, and they help in making code more readable and maintainable by grouping related values under a single entity. Let's delve into numeric enums and their usage.

*/

// ========>>>>> Numeric Enums

// A numeric enum is a collection of related constants represented by numbers. Here’s how you can define and use numeric enums in TypeScript:

// enum Direction {
//   Up = 1,
//   Down,
//   Left,
//   Right,
// }

/*

In this example:

Up is explicitly initialized to 1.
Down, Left, and Right are auto-incremented from the value of Up.
Direction.Up has the value 1
Direction.Down has the value 2
Direction.Left has the value 3
Direction.Right has the value 4
*/

// =====>>>>> Auto-Incrementing Numeric Enum

// You can also define an enum without explicitly initializing any values:

// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }

/*

In this case:

Up is initialized to 0 by default.
Down, Left, and Right are auto-incremented from Up.
Direction.Up has the value 0
Direction.Down has the value 1
Direction.Left has the value 2
Direction.Right has the value 3

*/

// ============>>>>  Using Numeric Enums

// You can access an enum member and use it in your code:

// enum UserResponse {
//   No = 0,
//   Yes = 1,
// }

// function respond(recipient: string, message: UserResponse): void {
//   console.log(recipient, message);
// }

// respond("Princess Caroline", UserResponse.Yes);

// ======>>>>>  Restrictions with Numeric Enums

/*

When defining enums, you can mix constant and computed members, but there are rules to follow. Enums without initializers need to be first or come after members initialized with numeric constants. Here’s an example that isn’t allowed:

*/

// function getSomeValue(num:number){
//     return num
// }

// enum E {
//   A = getSomeValue(2), // Error: Computed enum member must have initializer.
//   B, // Enum member must have initialize
// }

/*

In the example above:

A is initialized with a value returned from the getSomeValue function, which is a computed value.
B does not have an initializer, which means it should auto-increment from A.
However, since A is computed, TypeScript requires that B must have an explicit initializer to define its value.

*/

// To fix this, you should provide an explicit value for B or ensure all members before it are constant:

// enum E {
//   A = getSomeValue(), // Computed value
//   B = 2, // Explicit value
// }

// OR

// enum E {
//   A = 1, // Constant value
//   B, // Auto-incremented value (2)
// }





