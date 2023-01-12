//set time every 1000ms
setInterval(setTime, 1000);

function setTime() {
    let clockText = document.getElementById("clock");

    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    let am_or_pm = "AM";
    if (hour > 12) {
        hour -= 12;
        am_or_pm = "PM";
    } else if (hour === 0) {
        hr = 12;
        am_or_pm = "AM";
    }

    //fill 0 in the front of hour/minute/second
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    clockText.innerText = hour + ":" + min + ":" + sec + " " + am_or_pm;
}

//initialize time
setTime();
