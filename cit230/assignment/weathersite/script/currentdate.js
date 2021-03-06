function setCurrentDate(){
    var today = new Date();

    var dayOfWeek = new Array(7);
        dayOfWeek[0] = "Sunday";
        dayOfWeek[1] = "Monday";
        dayOfWeek[2] = "Tuesday";
        dayOfWeek[3] = "Wednesday";
        dayOfWeek[4] = "Thursday";
        dayOfWeek[5] = "Friday";
        dayOfWeek[6] = "Saturday";

    var weekDay = dayOfWeek[today.getDay()];

    var dateOfMonth = today.getDate();

    var monthOfYear = new Array(12);
        monthOfYear[0] = "January";
        monthOfYear[1] = "February";
        monthOfYear[2] = "March";
        monthOfYear[3] = "April";
        monthOfYear[4] = "May";
        monthOfYear[5] = "June";
        monthOfYear[6] = "July";
        monthOfYear[7] = "August";
        monthOfYear[8] = "September";
        monthOfYear[9] = "October";
        monthOfYear[10] = "November";
        monthOfYear[11] = "December";

    var month = monthOfYear[today.getMonth()];

    var year = today.getFullYear();

    document.getElementById('currentdate').innerHTML = weekDay + ", " + dateOfMonth + " " + month + " " + year;
}