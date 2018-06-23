var weatherObj = new XMLHttpRequest();

weatherObj.open('GET','http://api.openweathermap.org/data/2.5/weather?zip=55333,us&appid=b93e92055f66c2277db075668d74c47a&units=imperial', true)
//weatherObj.responseType = 'json';
weatherObj.send();

weatherObj.onload = function() {
    var weatherInfo = JSON.parse(weatherObj.responseText);
    console.log(weatherInfo);
    
    document.getElementById('highTem').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('lowTem').innerHTML = weatherInfo.main.temp_min;
    document.getElementById('cTem').innerHTML = weatherInfo.main.temp;
    document.getElementById('weatherDesc').innerHTML = weatherInfo.weather["0"].description.charAt(0).toUpperCase() + weatherInfo.weather["0"].description.slice(1);
    var weatherIconCode = weatherInfo.weather["0"].icon;
    var iconPath = "http://openweathermap.org/img/w/" + weatherIconCode + ".png";
    document.getElementById('weatherIcon').src = iconPath;
    document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;
    document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;
//    var weatherData = request.response;
//    showData(weatherData);
}


var forecast = new XMLHttpRequest();

forecast.open('GET','http://api.openweathermap.org/data/2.5/forecast?zip=55333,us&appid=b93e92055f66c2277db075668d74c47a&units=imperial', true);
//forecast.responseType = 'json';
forecast.send();

forecast.onload = function() {
    var weatherForecast = JSON.parse(forecast.responseText);
    console.log(weatherForecast);
    
 //   document.getElementById('forcastDesc').innerHTML = ;
}