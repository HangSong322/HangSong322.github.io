var high = parseFloat(document.getElementById('highTem').value);
var low = parseFloat(document.getElementById('lowTem').value);
var t = (high + low) / 2;
var s = parseFloat(document.getElementById('windSpeed').value);
var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t  * Math.pow(s, 0.16);

document.getElementById('windchill').innerHTML = "Wind Chill:  " + Math.round(f) + "&deg; F";