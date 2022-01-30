setInterval(setClock, 1000);

var hour = document.querySelector("[data-hour-hand]");
var min = document.querySelector("[data-min-hand]");
var sec = document.querySelector("[data-sec-hand]");


function setClock() {
    const currentDate = new Date();
    const secRatio = currentDate.getSeconds() / 60;
    const minRatio = (secRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minRatio + currentDate.getHours()) / 12;

    setRotation(sec, secRatio);
    setRotation(min, minRatio);
    setRotation(hour, hourRatio);
}

function setRotation(hand, rotationRatio) {
    hand.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();
