var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var setClock = setInterval(function clock(){
    var dateNow = new Date();
    var hr = dateNow.getHours();
    var min = dateNow.getMinutes();
    var sec = dateNow.getSeconds();

    // var calc_hr = (hr * 30) + (min / 2);
    // var calc_min = (min * 6);
    // var calc_sec = sec*6;
    var calc_hr = hr * 30 + min / 2;
    var calc_min = min * 6;
    var calc_sec = sec * 6;

    // hour.style.transform = 'rotate(' + calc_hr + "deg)";
    // minute.style.transform = 'rotate(' + calc_min + 'deg)';
    // second.style.transform = 'rotate(' + calc_sec + 'deg)';
    hour.style.transform = "rotate(" + calc_hr + "deg)";
    minute.style.transform = "rotate(" + calc_min + "deg)";
    second.style.transform = "rotate(" + calc_sec + "deg)";

},1000);