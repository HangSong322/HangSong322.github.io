var requestURL = 'mountainspoke/data/services.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var response = request.response;
    console.log(response);
    
//    $.each(response.services, function(i, item){
//        var tr = $('<tr>');
//        var tdName = $('<td>');
//        var tdPrice = $('<td>');
//    })
}
