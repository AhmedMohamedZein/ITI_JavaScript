function countVowels (myString) {
    let counter = 0 ;
    let myVowelsArray = { 'a' : 1 , 'e' : 1 , 'o' : 1 , 'u' : 1 , 'i' : 1 };
    for (let i = 0 ; i < myString.length ; i++) {
        if ( myVowelsArray[ myString[i] ] ) counter++; 
    }
    return counter ;
}



let userInput = prompt("Enter your string !");
if ( isNaN ( Number(userInput) )  ) {
    // it's a string 
    let counter =  countVowels(userInput);
    alert (`Number of Vowels = ${counter}`);
}
else {
    alert ("You entered invalid string !");
}