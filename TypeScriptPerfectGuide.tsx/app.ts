let variable = "Hello World";

let ageWithType : number = 0;
ageWithType = 10;

let testString: string = "Hello World";

let testBoolean: boolean = true;

// Union Types using | for multiple types such as string or number
let testStringOrNumber: string | number;
testStringOrNumber  = "Hello World";
testStringOrNumber = 10;

// Array Types
let names = ["John", "Jane", "Jack"];
names.push("Julie");
// names.push(10); // Error

let numbers = [1, 2, 3];
numbers.push(4);
// numbers.push("Hello"); // Error

let testStringArray : string[];
testStringArray = ["Hello", "World"];
// testStringArray = [1, 2, 3]; // Error

let testNumberArray : number[];
testNumberArray = [1, 2, 3];
// testNumberArray = ["Hello", "World"]; // Error

let testStringOrNumberArray : (string | number)[];
testStringOrNumberArray = ["Hello", "World"];
testStringOrNumberArray = [1, 2, 3];
testStringOrNumberArray = ["Hello", 1];
// testStringOrNumberArray = [true, false]; // Error

// Object Types
let user = {
    username: "John",
    age: 30,
    isAdmin: false,
}

user.username = "Jane";
// user.age = "ten"; // Error
user.age = 29;
// user.isAdmin = "true"; // Error
user.isAdmin = true;

// user.phone = "1234567890"; // Error

let userObj: {
    username: string,
    age: number,
    isAdmin: boolean,
}

userObj = {
    username: "John",
    age: 30,
    isAdmin: false,
}

// userObj = {
//     username: "Jane",
//     age: "29",
//     isAdmin: true,
//     phone: "1234567890",
// } // Error: phone property does not exist

let userObj2: {
    username: string,
    age: number,
    isAdmin: boolean,
    phone?: string,
}

userObj2 = {
    username: "John",
    age: 30,
    isAdmin: false,
    phone: "1234567890",
}

// ANY Type
let testAny: any;
testAny = "Hello World";
testAny = 10;
testAny = true;
testAny = ["Hello", "World"];
testAny = {};

let testAnyArray: any[];
testAnyArray = ["Hello", "World", 1, 2, 3, true, {}];


// FUNCTIONS TYPES

// Function with no return value: void type  
let sayHi = () => {
    console.log("Hello World");
}   

// Function with return value: String type
let funcReturnString = (): string => {
    return "Hello World";
}

// Function with parameter type and return value type: Number type for both parameter and return value
let multiple = (num: number): number => {
    return num * 2;
}

// Function with multiple parameters and return value type: Number type for both parameters and return value
let sum = (num1: number, num2: number): number => {
    return num1 + num2;
}

let sum2 = (num1: number, num2: number, anotherNum?: number): number => {
    if (anotherNum) {
        return num1 + num2 + anotherNum;
    } else {
        return num1 + num2;
    }
}

// Function with optional parameter
let sayHiToUser = (username: string, age?: number): string => {
    if (age) {
        return `Hello ${username}, you are ${age} years old`;
    } else {
        return `Hello ${username}`;
    }
}
sayHiToUser("John");
sayHiToUser("Jane", 30);

// Function with default parameter
let sayHiToUserWithDefaultAge = (username: string, age: number = 30): string => {
    return `Hello ${username}, you are ${age} years old`;
}   
sayHiToUserWithDefaultAge("John");
sayHiToUserWithDefaultAge("Jane", 30);

// Function with optional parameter and default parameter but too long to write
let longFunction = (user: { username: string, age: number, isAdmin: boolean, phone?: string }): string => {
    return `Hello ${user.username}, you are ${user.age} years old`;
}

// TYPE ALIAS: create a new type based on existing types
type UserType = {
    username: string,
    age: number,
    phone?: string,
}
 
  
let betterFunc = (user:UserType) => {
    console.log(`Hello ${user.username}, you are ${user.age} years old`);
}

// Function Prototype: define the type of a signature function
type myFunc = (a: number, b:string) => void

let write: myFunc = (num, str) => {
    console.log(num + " times " + str);
}

// Type Aliases with Union Types
type UserType2 = {
    username: string,
    age: number,
    phone?: string,
    theme: "dark" | "light",
}

const userWithTheme: UserType2 = {
    username: "John",
    age: 30,
    // theme: "blue", // Error
    theme: "dark",
}

// Function Overloading: define multiple function signatures for a function
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}


// INTERFACES: a contract that defines the properties and methods that a class or object must have
// Difference between Type Aliases and Interfaces: 
// 1. Type Aliases can be used for primitive types, union types, tuples, and any other types that you’d otherwise write by hand.
// 2. Interfaces can only be used for objects and classes.
// 3. Type Aliases are initialized synchronously, but Interfaces are initialized lazily.
// 4. Interfaces can be extended, but Type Aliases no.

// IF NEED TO EXTEND ANY TYPE, USE INTERFACE INSTEAD OF TYPE ALIAS

interface UserInterface {
    username: string,
    email: string,
    age: number,
    phone?: string,
}

// Interfaces can be extended by other interfaces just like INHERITANCE in classes OOP
interface EmployeeInterface extends UserInterface {
    employeeId: number,
    salary: number,
    position: string,
}


const employee1: EmployeeInterface = {
    username: "John",
    email: "johnsnow@gmail.com",
    age: 30,
    employeeId: 1,
    salary: 100000,
    position: "Developer",
}

const client: UserInterface = {
    username: "Jane",
    email: "janedoe@gmail.com",
    age: 30,
}


// GENERICS: a way to create reusable components
// Generics allow us to create a component that can work over a variety of types rather than a single one.

interface AuthorInterface {
    id: number;
    username: string;
}

interface CategoryInterface {
    id: number;
    title: string;
    instock?: boolean;
}

// PostInterface is a generic type that can be either AuthorInterface or CategoryInterface
interface PostInterface {
    id: number;
    title: string;
    description: string;
    extra: AuthorInterface[] | CategoryInterface[];
}

// BUT BETTER SOLUTION: use Generics
// <T> is a generic type that can be either AuthorInterface, CategoryInterface, or anything in the future.

interface BetterPostInterface<T> {
    id: number;
    title: string;
    description: string;
    extra: T[];
} 

const postExample1: BetterPostInterface<String> = {
    id: 1,
    title: "Post 1",
    description: "Post Description 1",
    extra: ["Post", "Example", "1"],
}

//  EVEN BETTER SOULTION: use Generics with extends
interface EvenBetterPostInterface<T extends object> {
    id: number;
    title: string;
    description: string;
    extra: T[];
}

const postExample2: EvenBetterPostInterface<{id: number, username: string}> = {
    id: 2,
    title: "Post 2",
    description: "Post Description 2",
    extra: [{id: 1, username: "John"}, {id: 2, username: "Jane"}], // at least one object
}

// OR using Author or Category Interface
const postExample3: EvenBetterPostInterface<AuthorInterface> = {
    id: 3,
    title: "Post 3",
    description: "Post Description 3",
    extra: [{id: 1, username: "John"}, {id: 2, username: "Jane"}], // at least one object
}

const postExample4: EvenBetterPostInterface<CategoryInterface> = {
    id: 4,
    title: "Post 4",
    description: "Post Description 4",
    extra: [{id: 1, title: "Category 1"}, {id: 2, title: "Category 2", instock: false}], // at least one object
}


