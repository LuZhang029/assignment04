// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operration) {
    let result;
    switch (operation) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            if (y === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = x / y;
            break;
        default:
            alert("Invalid operation. Please choose +, -, *, or /.");
            return;
    }
            result = "Invalid operation";
}

function startCalculator() {
    let validOperation = false;
    do {
      // COLLECT FIRST NUMBER FROM USER
         let x = parseFloat(prompt("Enter the first number:"));
         if (isNaN(x)) {
          alert("Invalid input. Please enter a number.");
          return;
        }

      // COLLECT SECOND NUMBER FROM USER
        let y = parseFloat(prompt("Enter the second number:"));
        if (isNaN(y)) {
           alert("Invalid input. Please enter a number.");
           return;
        }

      // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
        let operation = prompt("Enter the operation to perform (+, -, *, /):");

        if (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
            validOperation = true;
            calculate(x,y, operation);
        } else {
            alert("Invalid operation. Please enter +, -, *, or /.");
            return;
        }
      }while (!validOperation); 
    } 

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
 startCalculate();
 alert(`The result of ${operation}ing ${x} and ${y} is: ${result}`);
