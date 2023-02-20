let add = document.getElementById("Add");
let getContainer =  document.getElementById("tasks-container");

function addTask (event) {
    let getText = document.getElementById('myTextId').value;
    let myDiv = document.createElement('div');
    let mySpan = document.createElement('span');
    let doneBtn  = document.createElement("button");
    let removeBtn = document.createElement("button");
    doneBtn.classList.add('done');
    doneBtn.innerText = 'R';
    removeBtn.classList.add('remove');
    removeBtn.innerText = 'D'
    mySpan.innerText = getText ;
    myDiv.appendChild(mySpan);
    myDiv.appendChild(doneBtn);
    myDiv.appendChild(removeBtn);
   
    getContainer.appendChild(myDiv);
}

function delegate (event) {

    if (event.target.matches('.done')) {
        event.target.parentElement.childNodes[0].style.background = 'green';
    }
    else if (event.target.matches('.remove')) {
        event.target.parentElement.remove();
    }
} 

add.addEventListener('click',addTask);
getContainer.addEventListener('click',delegate);
