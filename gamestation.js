// $(window).scroll(function(){
//     var scroll = $(window).scrollTop();
//     if(scroll < 100){
//         $('.fixed-top').css('background', 'transparent');
//         $('.fixed-top').css('color', 'white');
//     } else{
//         $('.fixed-top').css('background', 'rgba(0, 0, 0, 0.3)');
//         $('.fixed-top').css('color', 'black');
//     }
// });

$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 210) {
            $("nav").css('background-color', 'white');
            $("nav a").css('color', 'black');
        } else {
            $("nav").css('background-color', 'transparent');
            $("nav a").css('color', 'white');
        }
    });
});