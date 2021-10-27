var time = document.getElementById("time");
var date = document.getElementById("date");
var today = new Date();

function startTime() { //Shows current time and date

    //config


    var h = today.getHours();
    var m = today.getMinutes();
    var d = today.getDate();
    var month = new Array(); //Creates Array for months
    month[0] = "JAN";
    month[1] = "FEB";
    month[2] = "MAR";
    month[3] = "APR";
    month[4] = "MAY";
    month[5] = "JUN";
    month[6] = "JUL";
    month[7] = "AUG";
    month[8] = "SEP";
    month[9] = "OCT";
    month[10] = "NOV";
    month[11] = "DEC";

    var n = month[today.getMonth()];
    m = checkTime(m);
    d = checkTime(d);
    h = checkTime(h);
    // s = checkTime(s);
    time.innerHTML =
        h + ":" + m;

    date.innerHTML =

        d + " " + n;




}

function checkTime(i) {
    if (i < 10) { i = "0" + i }; // adds zero in front of numbers < 10
    return i;
}
var t = setTimeout(startTime, 500);