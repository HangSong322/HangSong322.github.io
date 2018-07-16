var myTabel = document.querySelector('table');

var requestURL = '/cit230/assignment/mountainspoke/data/services.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var servicesData = request.response;
    console.log(servicesData);
    
    var services = servicesData['services'];
    
    
    
    var myThead = document.createElement('thead');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var th3 = document.createElement('th');
    var th4 = document.createElement('th');
    
    th1.textContent = "Service Type";
    th2.textContent = "Mountain Bicycle";
    th3.textContent = "Road Bicycle";
    th4.textContent = "Hybrid Bicycle";
    
    myThead.appendChild(th1);
    myThead.appendChild(th2);
    myThead.appendChild(th3);
    myThead.appendChild(th4);
    myTabel.appendChild(myThead);
    
    var myTbody =  document.createElement('tbody');
    for (var i = 0; i < services.length; i++){
        var myTr = document.createElement('tr');
        var myTh = document.createElement('th');
        var myTd1 = document.createElement('td');
        var myTd2 = document.createElement('td');
        var myTd3 = document.createElement('td');
        
        myTh.textContent = services[i].name;
        myTd1.textContent = services[i].mountainBikePrice;
        myTd2.textContent = services[i].roadBikePrice;
        myTd3.textContent = services[i].hybridBikePrice;
        
        myTr.appendChild(myTh);
        myTr.appendChild(myTd1);
        myTr.appendChild(myTd2);
        myTr.appendChild(myTd3);
        myTbody.appendChild(myTr);
        
    }
    
    myTabel.appendChild(myTbody);
    
    
    
    
    
//    $.each(response.services, function(i, item){
//        var tr = $('<tr>');
//        var tdName = $('<td>');
//        var tdPrice = $('<td>');
//    }) n 
}
