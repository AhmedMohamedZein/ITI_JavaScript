// Create JS script to be run in web browser , 
// User will enter first number
// Then enter an operation (sum,multi,subtract,division,moduls)
// Then enter second number
// Then do the operation and show the result to user

function isValidate (number) {

    if ( isNaN ( Number ( number ) ) ) {
        let checkUserDecision = confirm ("You entered { not number value please re-enter this value }");
        if (!checkUserDecision) return false ;
    }
    
    return true ;
    
}

const firstNumber = prompt ("Enter the first number :");
const secondNumber = prompt ("Enter the second number :")
let check = isValidate (firstNumber);
check = isValidate (secondNumber);
if (check) {
    let op = prompt ("Enter operation \n + \n - \n * \n /");
    switch (op) {
        case '+' : confirm (`The summation ${ Number (firstNumber) + Number( secondNumber ) }`);
        break;
        case '-' : confirm (`The substration ${ Number (firstNumber) - Number( secondNumber ) }`);
        break;
        case '*' : confirm (`The multiplication ${ Number (firstNumber) * Number( secondNumber ) }`);
        break;
        case '/' : confirm (`The division ${ Number (firstNumber) / Number( secondNumber ) }`);
        break;
        default : confirm ("You entered an invalid operation !");
    }
}