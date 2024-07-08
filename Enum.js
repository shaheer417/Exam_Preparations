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
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
function respond(recipient, message) {
    console.log(recipient, message);
}
respond("Princess Caroline", UserResponse.Yes);
export {};
