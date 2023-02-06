// Create JS script to be run in web browser , 
// User will enter his Username , Password 
// If username = “admin” and password = “421$$” 
// Show him message “Welcome login success”
// If he entered incorrect username or password
// Tell him which data entered wrong

const userCertificate = { userName : "admin" , userPassword : "421$$" } ;
const userNameInput = prompt ("Enter your name :");
const userPasswordInput = prompt ("Enter your Password :");

if (  userNameInput === userCertificate["userName"] && userPasswordInput === userCertificate["userPassword"] ) {
    confirm (" Welcome login success ") ;
}
else if ( userNameInput != userCertificate["userName"] ) {
    confirm ("Your { user name } does not exists !");
}
else {
    confirm ("Your { password } does not exists !");
}

