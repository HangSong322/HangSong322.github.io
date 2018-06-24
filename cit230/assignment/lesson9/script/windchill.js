var weatherObj = new XMLHttpRequest();

weatherObj.open('GET','http://api.openweathermap.org/data/2.5/weather?zip=55333,us&appid=b93e92055f66c2277db075668d74c47a&units=imperial', true)
//weatherObj.responseType = 'json';
weatherObj.send();

weatherObj.onload = function() {
    var weatherInfo = JSON.parse(weatherObj.responseText);
//    var weatherInfo = weatherObj.response;
    console.log(weatherInfo);
    
    var high = weatherInfo.main.temp_max;
    var low = weatherInfo.main.temp_min;
    var t = (high + low) / 2;
    var s = weatherInfo.wind.speed;
    var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t  * Math.pow(s, 0.16);

    document.getElementById('windchill').innerHTML = Math.round(f);
}