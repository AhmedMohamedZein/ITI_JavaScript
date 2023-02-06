function getUserAge () {

    let age = prompt("Enter your age");
    if (age === null ) return null ; 
    if ( isNaN ( Number (age) )  ) return false ; // enter an invalid age string or what so ever or cancled
    if ( Number (age) <= 0 ) return false ;
    return Number (age) ;
}   

do {

    let age = getUserAge () ;
    if (age){
        if (age >= 1 && age <= 10 ) alert ("Your status is Child !");
        if (age >= 11 && age <= 18 ) alert ("Your status is Teenager !");
        if (age >= 19 && age <= 50 ) alert ("Your status is Grown up !");
        if (age > 50 ) alert ("Your status is Old !");
    }
    else if (age === false ) {
        alert ("You entered invalid age string may be or negative value !"); 
    }
    else {
        break ;
    }

}while (true);