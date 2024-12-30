setTimeout(showClock, 1000);
setInterval(myClock, 1000);

function showClock() {
    const clock_div = document.getElementById('clock');
    const date_div = document.getElementById('date');
    date_div.style.display = "block";
    clock_div.style.display = "block";
}

function myClock() {
    const date = new Date();
    const min = date.getMinutes().toString().padStart(2, '0');
    const sec = date.getSeconds().toString().padStart(2, '0');
    const hour = date.getHours();
    const day = date.getDate();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    let hour_new = 0;
    let am_pm = "";

    if (hour === 0) { 
        hour_new = 12;
        am_pm = "AM";
    } else if (hour < 12) {
        hour_new = hour;
        am_pm = "AM";
    } else {
        hour_new = hour % 12 || 12;
        am_pm = "PM";
    }

    document.getElementById("hours").innerHTML = hour_new.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
    document.getElementById("am_pm").innerHTML = am_pm;

    document.getElementById("day").innerHTML = day.toString().padStart(2, '0');
    document.getElementById("month").innerHTML = month;
    document.getElementById("year").innerHTML = year;
}