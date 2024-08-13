// Ex 1

// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.
// Your code here

const numbers = nums.map(num => num * 2);

console.log(numbers);

// EX 2

// Given the following array, use destructuring to pull out the first and second values and place them into variables. 
// Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [firstTopping, secondTopping] = pizzaToppings;

console.log(firstTopping);
console.log(secondTopping);

// Ex 3

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
};

// Your code here
// Destructure the object to create variables `make` and `model`
const { make, model } = car;

console.log(make);  // Logs 'Audi'
console.log(model); // Logs 'q5'

// Ex 4

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. 
// Then, log the variable.

const pizzaToppingz = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const controversialPizzaToppings = [...pizzaToppings];

console.log(controversialPizzaToppings);

// Ex 5

// Duplicate the following object and spread its values into a new variable `myCar`.
// Your code here
const cars = {
    make: 'Audi',
    model: 'q5',
}

const myCar = { ...cars, model: 'q7' };

console.log(cars);
console.log(myCar);

// Ex 6

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
const userProfile = {};

// Define a variable to be used as a dynamic key
const propertyName = 'username';

// Use the variable as a dynamic key and assign a value
userProfile[propertyName] = 'john_doe';

console.log(userProfile);  // Logs: { username: 'john_doe' }


// Ex 9

// Convert the following `if...else` statement in to a ternary:

// let pizza = 'tasty';

// if (pizza === 'tasty') {
//     console.log('yum');
// } else {
//     console.log('yuck');
// }

// Your code here

let pizza = 'tasty';

pizza === 'tasty' ? console.log('yum') : console.log('yuck');

// Ex 10

// 1. SET LANGUAGE
// Construct a single line of code that assigns a default value using the logical OR operator.
// This line should match the logic of the following statement: 
// "LANG is equal to localLangConfig or the default value of English."
// const localLangConfig = null;  
// Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG and assign it the value of localLangConfig or 'en' as a default
const LANG = localLangConfig || 'en';

// Log the result
console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME
//const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
const userSavedTheme = null;  // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default
const USER_THEME = userSavedTheme || 'light';

// Log the result
console.log('User theme setting:', USER_THEME);

// Ex 11

// Now check for `cat.age` on `adventurer`. 
// See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

// const adventurer = {
//     name: 'Alice',
// };

// let cat; 

// Your code here
const adventurer = {
    name: 'Alice',
};

let cat = adventurer.cat?.age;  

console.log(cat);  




