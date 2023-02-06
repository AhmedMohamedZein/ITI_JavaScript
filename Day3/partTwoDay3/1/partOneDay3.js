// Calculate the Sum and average Of the user entered values
// Ask the user to enter how many number he wants to get the sum of
// Save the number in array
// Show him the sum and average of the entered values
function isValidate (number) {

    if ( isNaN ( Number ( number ) ) ) {
        let checkUserDecision = confirm ("You entered { not a number value please re-enter this value }");
        if (!checkUserDecision) return false ;
    }
    
    return true ;
    
}

let summation = 0 ;
const userWantToEnter = prompt ("How many value you want to enter !");
let check = isValidate(userWantToEnter);

for (let i = 0 ; i < Number(userWantToEnter) ; i++ ) {

    let userInput = prompt (`Enter the ${i+1}'s number :`);
    if ( isValidate(userInput) ) {
        summation += Number(userInput) ;
    }
    else {
        break ; //user pressed cancel 
    }
}

confirm (` The summation = ${summation} and the average = ${ summation / Number(userWantToEnter) } !`);