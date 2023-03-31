// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 

function greeting() {
    return "Hey! What'up?"
  };
  console.log(greeting());

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function customGreeting(name) {
    return `Ciao ${name}!`
  };
  console.log(customGreeting("Teresa"));
  

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetPerson(firstName, middleName, lastName) {
    return `Nice to meet you ${firstName} ${middleName} ${lastName}!`
  };
  console.log(greetPerson("Haley", "Forest", "Young"));
  

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

function square(num1) {
    var result = num1**2
    return `Your number squared would be ${result}`;
  }
  console.log(square(5))
  console.log(square(10));


// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock (quantity, item) {
    if (quantity >= 4) {
        return `${item} is stocked`
    } else if (quantity < 4 && quantity > 0) {
        return `${item} - running LOW`
    } else if (quantity === 0) {
        return `${item} - OUT OF STOCK`
    }
}

console.log(checkStock(4, "Coffee"));
console.log(checkStock(3, "Tortillas"));
console.log(checkStock(0, "Cheese"));
console.log(checkStock(1, "Salsa"));
