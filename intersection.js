// =================>>>>>> INTERSECTION IN TS <<<<<<=============================
export {};
// Intersection types allow you to combine multiple types into one. The resulting type has all the properties of the intersected types.
//  =======>>>> Basic Intersection Type
// Combining two simple object types:
// type Name = {
//   name: string;
// };
// type Age = {
//   age: number;
// };
// type Person = Name & Age;
// let person: Person = {
//   name: "Alice",
//   age: 30,
// };
// ========>>>> Intersection with Additional Properties
// Combining types with additional properties:
// type Name = {
//   name: string;
// };
// type Age = {
//   age: number;
// };
// type Address = {
//   street: string;
//   city: string;
// };
// type Employee = Name &
//   Age &
//   Address & {
//     employeeID: number;
//   };
// let employee: Employee = {
//   name: "Bob",
//   age: 40,
//   street: "123 Main St",
//   city: "Anytown",
//   employeeID: 101,
// };
// =======>>>>> Intersection with Interfaces
// Combining interfaces using intersections:
// interface HasName {
//   name: string;
// }
// interface HasAge {
//   age: number;
// }
// interface HasAddress {
//   street: string;
//   city: string;
// }
// type FullPerson = HasName & HasAge & HasAddress;
// let fullPerson: FullPerson = {
//   name: "Charlie",
//   age: 25,
//   street: "456 Oak St",
//   city: "Hometown",
// };
// =========>>> Intersection with Union Types
// Combining intersection types with union types:
// type Admin = {
//   adminLevel: number;
// };
// type User = {
//   userId: number;
// };
// type AdminUser = (Admin | User) & {
//   name: string;
//   email: string;
// };
// let admin: AdminUser = {
//   adminLevel: 1,
//   name: "Admin",
//   email: "admin@example.com",
// };
// let user: AdminUser = {
//   userId: 123,
//   name: "User",
//   email: "user@example.com",
// };
////////////////////////////////////////////////////////////////////////////////////////////////
// interface Student {
//   student_id: number;
//   name: string;
// }
// interface Teacher {
//   Teacher_Id: number;
//   teacher_name: string;
// }
// type intersected_type = Student & Teacher;
// let obj1: intersected_type = {
//   student_id: 3232,
//   name: "rita",
//   Teacher_Id: 7873,
//   teacher_name: "seema",
// };
// console.log(obj1.Teacher_Id);
// console.log(obj1.name);
////////////////////////////////////////////////////////////////////////////////////////////
// interface A {
//   feauA: string;
//   feauB: string;
// }
// interface B {
//   feauA: number;
//   feauB: string;
// }
// type AB = A & B;
// let obj1: AB;
// let obj2: AB;
// // Error, Type '20' is not assignable
// // to type 'string & number'
// obj1.feauA = 20;
// console.log(obj1.feauA);
// obj2.feauB = "c";
// console.log(obj2.feauB);
//////////////////////////////////////////////////////////////////////////////////////////
// interface A { 
// prop1: String; 
// } 
// interface B { 
// prop2: String; 
// } 
// interface C { 
// prop3: String; 
// } 
// let obj1: A & B = { prop1: "length", prop2: "width" }; 
// let obj2: B & A = { prop1: "length", prop2: "width" }; 
// let obj3: A & (B & C) = { prop1: "", prop2: "", prop3: "" }; 
// let obj4: (A & B) & C = { prop1: "", prop2: "", prop3: "" }; 
// obj3.prop3 = "height"; 
// console.log(obj3.prop3); 
// obj4.prop1 = "length"; 
// console.log(obj4.prop1); 
// console.log(obj3 == obj4); // false 
// console.log(typeof obj3 == typeof obj4); // true 
// console.log(typeof obj1 == typeof obj2); // true
