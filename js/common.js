$(document).ready(function(){
    //메뉴 바
    $(".menu-bar").click(function(){
        $(this).toggleClass("active");

        if($(this).hasClass("active")){
            $(this).next().slideDown();
        }else{
            $(this).next().slideUp();
        }
    });
});