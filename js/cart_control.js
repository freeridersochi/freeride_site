$(document).ready(function(){
    //card control
    var tmpAnimation = 0;
    $('.cart_control').on('click', function(){

        tmpAnimation = tmpAnimation + 180;                  
        $(this).animate({degrees: tmpAnimation}, {
            duration: 1000,
            step: function(now) {
                $(this).css({
                    transform: 'rotate(' + now + 'deg)',
                });
            }
        });
        $(this).parent().siblings().slideToggle(400);
    });  
});