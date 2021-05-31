function displayTime() {
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();

    if (hour == 24) {
        hour = 0;
    }
    else if (hour > 12) {
        hour = hour - 0;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }

    var headTime = document.getElementById("time");
    headTime.innerHTML = hour + ":" + min;
}
displayTime();

function renderTime() {
    var date = new Date();
    var year = date.getFullYear();
    if (year < 1000) {
        year += 1900;
    }
    var day = date.getDay();
    var month = date.getMonth();
    var daym = date.getDate();
    var monthArr = new Array("Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec");
    var dayArr = new Array("Sunday", "Monday", "wednesday", "Thursday", "Friday", "Saturday");

    // Time
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    if (hour == 24) {
        hour = 0;
    }
    else if (hour > 12) {
        hour = hour - 0;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    var showtime = document.getElementById("time2");
    showtime.innerHTML = hour + ":" + min + ":" + sec;

    var showday = document.getElementById("day");
    showday.innerHTML = "" + dayArr[day] + "";

    var showdate = document.getElementById("date");
    showdate.innerHTML = daym + " " + "" + monthArr[month] + " " + "" + year;

    setTimeout("renderTime()", 1000);
}
renderTime();