let firstName = prompt("Enter your first name :");
let lastName = prompt("Enter your last name :");
let birthDay = null ;
let currentYear = 2023 ;
 // check if the first name and last name are valid 
if ( !isNaN( Number  (firstName) ) || !isNaN( Number  (lastName) ) ) {

    alert("you entered an invalid value for the first or the last name ");
        
}
else {

    birthDay = prompt ("Enter your birth year");
    if ( isNaN( Number  (birthDay) ) ) {
        alert("you entered a invalid value for your birth year");
    }
    else {
        alert (`Welcome ${firstName} ${lastName} you are ${currentYear - Number(birthDay)} years old`);
    }
}
