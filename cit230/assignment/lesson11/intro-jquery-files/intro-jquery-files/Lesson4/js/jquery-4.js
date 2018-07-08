$(function () {
    //    console.log( $('input[type="text"]').css('background-color'));
    var toggleStyle = function () {
        var inputField = $('input[type="text"]');
        if (inputField.css('background-color') === 'rgb(255, 0, 0)') {
            // set backgound color to white
            inputField.css('background-color', 'rgb(255, 255, 255)');
        } else {
            // set background color to red
            inputField.css('background-color', 'rgb(255, 0, 0)');
        }
    }
    $('#ReqAQuoteBtn').click(toggleStyle);



    $('.coreValues').prepend("<li><strong>This is brand new!!</strong></li>");
    $("<li><strong>This is also great!!</strong></li>").prependTo('.coreValues');
    var nameVal = $('input[name="nameVal"]');

    function FillEmpty() {
        if (nameVal.val() == '') {
            nameVal.val('John Doe');
        }
    }
    $('#ReqAQuoteBtn').click(FillEmpty);

//    $('.footer').append("<ul></ul>");
//    $('.footer > ul').append("<li><a href="animatedMenuBegin.htm">Animated Manu</a></li>");
//    $('.footer > ul').append("<li><a href="">About Us</a></li>");
//    $('.footer > ul').append("<li><a href="">About Us</a></li>");
//    $('.footer > ul').append("<li><a href="">About Us</a></li>");
//    $('.footer > ul').append("<li><a href="">About Us</a></li>");


})
