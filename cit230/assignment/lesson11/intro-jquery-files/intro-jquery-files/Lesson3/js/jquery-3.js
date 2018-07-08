$(function () {
    // All jQuery code goes here

    $('#alcoveLogo').css('opacity', 0.4);

    $('.servicesBtn').css('color', '#FFF');
    
    var element = document.querySelector(".navigation > li:nth-child(3) > a");
    element.style.color = 'rgb(255, 0, 0)';
    
    var element = document.querySelectorAll(".navigation > li:nth-child(even) > a");
    for(var i = 0; i < element.length; i++){
        element[i].style.color = 'rgb(255, 0, 0)';
    }
    
    $('button').css('border', '1px solid red');
    $('h2').css('border', '1px solid red');
    
    $('input[name="nameVal"]').css('border', '1px solid red');
    $('input[name!="phoneNum"]').css('border', '1px solid red');
    $('input[name*="Num"]').css('border', '1px solid red');
    $('input[name$="Val"]').css('border', '1px solid red');

    $('#alcoveLogo').next().css('background-color', 'rgba(255, 0, 0, 0.2)');
    $('.header').children().css('background-color', 'rgba(255, 0, 0, 0.2)');
    $(".navigation > li:eq(2)").parent().css('opacity', '0.3');
    $('.servicesBtn').closest('div').css('background-color', 'rgba(255, 0, 0, 0.2)');
    
    
})
