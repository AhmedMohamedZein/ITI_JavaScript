
let checkAcceptance = confirm ("It's the first relase of a calculator that only has summation feature");


if (checkAcceptance) {

    let firstNumber = prompt("Enter your first number :");
    let secondNumber = prompt("Enter your second number :");
    if ( isNaN( Number  (firstNumber) ) || isNaN( Number  (secondNumber) ) ) {

        alert("you entered an invalid value for the first or the seocnd number !");

    } else {

        let result  = Number (firstNumber) + Number ( secondNumber ) ;    
        alert (`${firstNumber} + ${secondNumber} = ${result}`);
    }
}
else {
    alert ("You pressed cancel so you will not use my calculator !"); 
}