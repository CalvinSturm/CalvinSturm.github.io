$(document).ready(function(){
    $('#text').hide();
    $('#header').delay(1000).fadeOut(800, function() {
        $('#text').fadeIn(800);
    });
});