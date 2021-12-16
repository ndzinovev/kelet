$(document).ready(function(){

   

    $('.car-hero').owlCarousel({ 
        items:1,               // slider hero
        margin:30,
        loop:true,
        dots:true,
        dotsEach: 1,
        });



    $('.car-arrival').owlCarousel({                // slider arvival
        margin:12,
        nav:true,
        dots:false,
        navText: ['<img src="img/l-arr.png" >', '<img src="img/r-arr.png" >'],
        loop:true,
        dotsEach: 1,
        responsiveClass:true,
		    responsive:{
            0:{ items:1 },
            400:{items:2},
            480:{items:2},
            630:{ items:3 },
            960:{ items:3},
            1020:{ items:5 },
            1500:{ items:5 }
                 
    }
    });

    $('.slid-diplom').owlCarousel({                // slider diplom
        items:1,
        margin:12,
        dots:false,
        navText: ['<img src="img/bl-arr.png" >', '<img src="img/br-arr.png" >'],
        nav:true,
        loop:true,
        dotsEach: 1,
        		   
    });

    $('.slid-cat').owlCarousel({                // slider category
        items:1,
        margin:12,
        dots:false,
        navText: ['<img src="img/bl-arr.png" >', '<img src="img/br-arr.png" >'],
        nav:true,
        loop:true,
        dotsEach: 1,
        		   
    });

    $('.btn-catalog').click(function(){   //большая кнопа меню
        $('.abs-menu').slideToggle(300);
    });

    $('.btn-mob').click(function(){   //мобильное меню
        $('.hidden-menu-nav').slideToggle(300);
    });

    $('.select-tel').click(function(){   //выбор телефонов
        if($('.pop-tel').css('display')===('none')) {
            $('.pop-tel').show(400);
            $('.block-sel-tel, .pop-tel').css('borderLeft', '1px solid #000') .css('borderRight', '1px solid #000');
            $('.block-sel-tel').css('borderTop', '1px solid #000');
            $('.pop-tel').css('borderBottom', '1px solid #000');
            $('.select-tel img').addClass('tel-arr-rotate');
        }
        else {
            $('.pop-tel').hide(400);
            $('.block-sel-tel, .pop-tel').css('border', 'none');
            $('.select-tel img').removeClass('tel-arr-rotate');
        }        
    });


    $('.btn-vid').click(function(){   //переключение в категориях на вид показа
        if($('.box-card-cat').css('display')===('none')) {
            $('.box-card-cat, .line-card-cat').css('display', 'none');
            $('.box-card-cat').css('display', 'flex');
         }         
    });
    $('.btn-vid1').click(function(){   //переключение в категориях на вид показа
        if($('.line-card-cat').css('display')===('none')) {
            $('.box-card-cat, .line-card-cat').css('display', 'none');
            $('.line-card-cat').css('display', 'block');
         }         
    });



    $('.menu-hidden li').click(function(e){
            
        if ($(this).children('.sub-menu').css('display') === 'none') {
           $('.sub-menu').css('display', 'none');    
           $(this).children('.sub-menu').show(300);
           $(this).toggleClass('activ-li');
        }
           else {
            $('.menu-hidden li').removeClass('activ-li');
               $(this).children('.sub-menu').hide(300);
               
            }
    });

/// картинки на карточке
    $('.ni1').click(function(){
        $('.big-img').hide();
        $('.bi1').show();
    });
    $('.ni2').click(function(){
        $('.big-img').hide();
        $('.bi2').show();
    });
    $('.ni3').click(function(){
        $('.big-img').hide();
        $('.bi3').show();
    });
    $('.ni4').click(function(){
        $('.big-img').hide();
        $('.bi4').show();
    });

///// Табы
$('.bt1').click(function(){
    $('.tabs').hide();
    $('.tab1').show();
});
$('.bt2').click(function(){
    $('.tabs').hide();
    $('.tab2').show();
});
$('.bt3').click(function(){
    $('.tabs').hide();
    $('.tab3').show();
});
$('.bt4').click(function(){
    $('.tabs').hide();
    $('.tab4').show();
});

//// медиа табы 

$('.btm1').click(function(){
    if ($('.tab1').css('display') === ('none')) {
    $('.tabs').hide();
    $('.btn-tab-media img').removeClass('rotate-arrow') ; 
    $('.tab1').show(300);
    $('.btm1 img').addClass('rotate-arrow ');
}
    else {
        $('.tabs').hide();
        $('.btn-tab-media img').removeClass('rotate-arrow') ; 
    }
});
$('.btm2').click(function(){
    if ($('.tab2').css('display') === ('none')) {
    $('.tabs').hide();
    $('.btn-tab-media img').removeClass('rotate-arrow') ; 
    $('.tab2').show(300);
    $('.btm2 img').addClass('rotate-arrow ');
}
    else {
        $('.tabs').hide();
        $('.btn-tab-media img').removeClass('rotate-arrow') ; 
    }
});
$('.btm3').click(function(){
    if ($('.tab3').css('display') === ('none')) {
    $('.tabs').hide();
    $('.btn-tab-media img').removeClass('rotate-arrow') ; 
    $('.tab3').show(300);
    $('.btm3 img').addClass('rotate-arrow ');
}
    else {
        $('.tabs').hide();
        $('.btn-tab-media img').removeClass('rotate-arrow') ; 
    }
});
$('.btm4').click(function(){
    if ($('.tab4').css('display') === ('none')) {
    $('.tabs').hide();
    $('.btn-tab-media img').removeClass('rotate-arrow') ; 
    $('.tab4').show(300);
    $('.btm4 img').addClass('rotate-arrow ');
}
    else {
        $('.tabs').hide();
        $('.btn-tab-media img').removeClass('rotate-arrow') ; 
    }
});





});