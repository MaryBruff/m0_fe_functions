// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
  console.log("Hello, what is your name?");
}

askForName();

//I moved the console.log to next line and make sure to indent it. I added another curly bracket to the next line. 
//This lets Java know this is the end of the block code.
//I also added semicolons to the end of the parentheses to separate the statements I am asking to be run.

// EX 2:

function addThreeNums(first, second, third) {
  var sum = first + second + third;
  console.log(sum);
}

addThreeNums (1,2,3);
addThreeNums(4,2,7)

//I corrected the return function because when I would print the code it went nowhere. 
//By changing the return value to console.log I could print the values. 6 and 13 
//I also removed the extra spaces for the curly bracket on line 26.

// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto();
 
//Simple fix. Corrected func to function. If the function is not entirely written out we are not defining what we want our code to do -
//which is to list the ingredients and directions for making fresh pesto.

//  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
    
  return avg
  }
  console.log(average(1,2))

  //Moved the curly bracket to be at the end of the syntax for line 51.
  //Removed the spacing on var avg to be lined up with var sum so the formatting matched.
  //Added a console.log after return average to print out the average of our variables num1 and num2. 