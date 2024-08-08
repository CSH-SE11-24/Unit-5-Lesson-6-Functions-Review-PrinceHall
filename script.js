console.log("Script running...")

// SECTION 1: FUNCTIONS REVIEW 
// Task 1: Define a function called `greet` that takes a name as a parameter and logs "Hello, [name]!" to the console.

function greet(name) {
  console.log(`Hello, ${name}`)
}


// Call the greet function with your name (as a string)

greet("prince")

// Prompt the user to enter their name

let user = prompt("Enter Name")


// Call the greet function with their name

greet(user)

// Task 2: Define a function called `add` that takes two parameters `a` and `b` and returns the sum of `a` and `b`.


function add(a, b) {
  console.log(a + b)
}

// Call the add function with any two numbers. Console log the result to check it.

add(2, 4)

// Task 3: Define a function called `passwordChecker` that takes two parameters `user` (object) and `passwordGuess` (string) and returns true if the user's password is equal to `passwordGuess`, otherwise returns false


function passwordChecker(userrep, passwordGuess) {
  if (userrep.password == passwordGuess) {
    console.log("true")
  }
  else {
    console.log("false")
  }

}

// Define a user object that has username and password attributes.

let user2 = {
  username: "username",
  password: "mustcomedown"
}


// Call the passwordChecker function with the user object and the correct password. Console log the result to check it.

passwordChecker(user2, 'mustcomedown')


// Call the passwordChecker function with the user object and the incorrect password. Console log the result to check it.

passwordChecker(user2, 'mustcomessdown')

// SECTION 2: Arrow functions 
// Task 0: Read the W3Schools page on arrow functions (https://www.w3schools.com/js/js_arrow_function.asp)
// You can also watch a video or use other resources
// Task 1:  Define an ARROW function called `multiply` that takes two parameters `a` and `b` and returns the product of `a` and `b`.

let multiply = (a, b) => a * b;


// Call the multiply function with any two numbers. Console log the result to check it.

console.log(multiply(5,5))



// Task 2: Define an ARROW function called `printArray` that takes an array parameter and loops through the array to print each element.

let printArray = (a) => {while(friends.length>a){console.log(friends[a]); a++}}



// Define a friends array and define it to have at least 3 friends (they can be imaginary if you can't think of 3...). 

let friends = ["Jayden", "Joel", "John"]

// Call the printArray function. You shouldn't have to console log the result.

printArray(0)

// SECTION 3: Callback Functions
// Task 0: Read about callback functions at the following link:
// https://www.programiz.com/javascript/callback


// Task 1: Define a greeter function that prints "Hello world"

function greeter() {
  console.log("Hello World")
}



// Call setTimeout to run the greeter function after 2000 ms

setTimeout



// Task 2: Define a repeatCaller function that takes in a callback function and a number. It should call the callback function that number of times.


function repeatCaller(number) {

  let i = 0

  while(i<number){
  i++
  greeter()
  }
}

repeatCaller(2)

// Call repeatCaller with greeter 4 times 



// Task 3: Read about anonymous functions in JS. Try to call setTimeout with an anonymous function that console logs "See ya later!"




