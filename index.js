//Hostory variable stores the result of each calculation as an object
let history = [];
//Sets the variables for the two operands
let a = 8;
let b = 0;

//accepts 2 variables and adds them then 
//logs result to console and pushes calculation to history
function add(a, b) {
    //if statement checks to see if a and b are both numbers
    //print error if either is not a number
    if(typeof a !== "number"|| typeof b !== "number") {
        console.log("Error: Both operands must be a number")
        return;
    }
    const operation = "Addition";
    let x = a + b;
    pushHistoryArray(operation, a, b, x);
    console.log(a + " + " + b + " = " + x);
}

//accepts 2 variables and subtracts the second from the first then 
//logs result to console and pushes calculation to history
function subtract(a, b) {
    //if statement checks to see if a and b are both numbers
    //print error if either is not a number
    if(typeof a !== "number"|| typeof b !== "number") {
        console.log("Error: Both operands must be a number")
        return;
    }
    const operation = "Subtraction";
    let x = a - b;
    pushHistoryArray(operation, a, b, x);
    console.log(a + " - " + b + " = " + x);
}

//accepts 2 variables and adds them then
//logs result to console and pushes calculation to history
function multiply(a, b) {
    //if statement checks to see if a and b are both numbers
    //print error if either is not a number
    if(typeof a !== "number"|| typeof b !== "number") {
        console.log("Error: Both operands must be a number")
        return;
    }
    const operation = "Multiplication";
    let x = a * b;
    pushHistoryArray(operation, a, b, x);
    console.log(a + " * " + b + " = " + x);
}

//accepts 2 variables and divides the first by the second then
//logs result to console and pushes calculation to history
function divide(a, b) {
    //if statement checks to see if a and b are both numbers
    //print error if either is not a number
    if(typeof a !== "number"|| typeof b !== "number") {
        console.log("Error: Both operands must be a number")
        return;
    }
    const operation = "Division";
    if (b != 0){
        let x = a / b;
        pushHistoryArray(operation, a, b, x);
        console.log(a + " / " + b + " = " + x);
    }else{
        console.log("Error: b cannot be 0")
    }
}

//creates a new object to be stored as an index in history[]
function pushHistoryArray(operation, a, b, x) {
    history.push({"operation": operation, "operands": [a, b], "result": x });
}

//displays the calculation history
function displayHistory(history) {
    console.log(history)
}


add(a,b);
subtract(a,b);
multiply(a,b);
divide(a,b);
displayHistory(history);