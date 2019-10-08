$('.move_left').on('click', function(){
    var targetImg = $('.active');
    var nextImg = targetImg.next();

    if(nextImg.length){
    targetImg.removeClass('active').css('z-index', '-10');
    nextImg.addClass('active').css('z-index', '10');
    }
});

$('.move_right').on('click', function(){
    var targetImg = $('.active');
    var prevImg = targetImg.prev();

if(prevImg.length){
    targetImg.removeClass('active').css('z-index', '-10');
    prevImg.addClass('active').css('z-index', '10');
    }
});