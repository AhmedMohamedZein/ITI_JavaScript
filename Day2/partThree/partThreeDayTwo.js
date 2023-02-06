


function convertClock (myClock) { // returns string 
    let myClockString = null ;
    if (myClock >= 12 ) {
        myClockString = `${myClock - 12} PM` ; 
    }
    else {
        myClockString = `${myClock} AM` ;
    }
    return myClockString ;
} 



let userInput = prompt ("Enter the time to convert ");
if ( !isNaN ( Number(userInput) )  ) {
    // it's a Number 
    let convertedClock =  convertClock( Number(userInput) ); // string 
    alert (`Your converted clock = ${convertedClock}`);
}    
else {
    alert ("You entered invalid Number {Time} !");
}
 