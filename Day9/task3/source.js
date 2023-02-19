var pageHour = document.getElementById("hours");
var pageMinutes = document.getElementById("minutes");
var pageSeconds = document.getElementById("seconds");


const getWeekday = () => ['Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'][new Date().getDay()];

function setMyPageSeconds () {
    pageSeconds.innerHTML = `<span>${new Date().getSeconds()}</span>`;

}
function setMyPageMinutes () {
    pageMinutes.innerHTML = `<span>${new Date().getMinutes()}</span>`;
}
function setMyPageHour () {
    pageHour.innerHTML = `<span>${new Date().getHours()}</span>`;
    setMyPageDay();
}

function setMyPageDay () {
    let myDay = getWeekday () ;
    let day = document.getElementById(`${myDay}`);
    day.classList.add('active');
}

setInterval(setMyPageSeconds,1000);
setInterval(setMyPageMinutes,1000);
setInterval(setMyPageHour,1000);

