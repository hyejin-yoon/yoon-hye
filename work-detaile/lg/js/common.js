$(document).ready(function(){
    //fullpage
    $('.nav ul li a').on('click', function(){
        var idx = $(this).parent('li').index();
        console.log(idx);
        var offsettop = $('section').eq(idx).offset().top;
        $('html').animate({scrollTop:offsettop}, 1000, 'easeInBack');
    });
    $('menu-gnb ul li:nth-child(1)').mouseover(function(){
        // $(this).index;
        $('.hover-menu').css({display: 'block'});
        $('.list-1').css({display: 'block'});
    });
});