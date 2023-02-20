let username = document.getElementById("username");
let email = document.getElementById("email");
let moblie = document.getElementById("moblie");

function checkName (event) {
    
    let ragex = /[0-9]/g ;
    let str =  event.target.value ;
    let checkPatterns = ragex.test(str);
    console.log(checkPatterns);
    if (checkPatterns && !this.parentNode.querySelector('span')) {
        let spanElement = document.createElement("span");
        spanElement.classList.add("red");
        spanElement.innerText = "Not allowed";
        this.parentNode.appendChild(spanElement);
    }
    else if (!checkPatterns) {
        this.parentNode.querySelector('span').remove();
    }
    
}

function checkEmail (event) {
    let ragex = /\@/g ;
    let str =  event.target.value ;
    let checkPatterns = ragex.test(str);
    console.log(checkPatterns);
    if (!checkPatterns && !this.parentNode.querySelector('span')) {
        let spanElement = document.createElement("span");
        spanElement.classList.add("red");
        spanElement.innerText = "Not allowed";
        this.parentNode.appendChild(spanElement);
    }
    else if (checkPatterns) {
        this.parentNode.querySelector('span').remove();
    }
}

function checkPhone (event) {
    let ragex = /[^0-9]/g ;
    let str =  event.target.value ;
    let checkPatterns = ragex.test(str);
    console.log(checkPatterns);
    if (checkPatterns && !this.parentNode.querySelector('span')) {
        let spanElement = document.createElement("span");
        spanElement.classList.add("red");
        spanElement.innerText = "Not allowed";
        this.parentNode.appendChild(spanElement);
    }
    else if (!checkPatterns) {
        this.parentNode.querySelector('span').remove();
    }
}

username.addEventListener('input', checkName);
email.addEventListener('input',checkEmail);
moblie.addEventListener('input',checkPhone);