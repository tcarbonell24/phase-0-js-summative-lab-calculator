//Hostory variable stores the result of each calculation as an object
let history = [];
//Sets the variables for the two operands
let a;
let b;


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
function displayHistory() {
    console.log(history)
    alert(history)
}


function calculate() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let operation = document.getElementById("operation").value;
    
    switch(operation) {
        case "+" : 
            add(a, b);
            
            break;
        case "-" : 
            subtract(a, b);
            break;
        
        case "*" : 
            multiply(a, b);
            break;
        case "/" : 
            divide(a, b);
            break;
    }

}