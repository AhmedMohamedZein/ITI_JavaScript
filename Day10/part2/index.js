let add = document.getElementById("Add");
let getContainer =  document.getElementById("tasks-container");
let doneButton = document.getElementsByClassName("done");


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


add.addEventListener('click',addTask);
