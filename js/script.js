

$(window).on('load' ,function(){
    $('.inner-preloader').fadeOut(600,function()
    {
    $('.preloader').delay(100).fadeOut(800);
    });
    });
    
         


$(document).ready(function(){
    $('.owl-one').owlCarousel({
        nav:true,
        dots:false,
        rtl:true,
         margin: 10,
    loop: true,
        autoplay:true,
    items: 1,
    stagePadding: false
});
     $('.owl-two').owlCarousel({
        nav:true,
        dots:false,
        rtl:true,
         margin: 10,
    loop: true,
    stagePadding: false,
         autoplay:true,
 responsive:{
        0:{
            items:1
        },
     768:
{
    items:2
},
     
        
 }
});
    
     $('.owl-three').owlCarousel({
        rtl:true,
    loop: true,
        autoplay:true,
    items: 4,
    stagePadding: false,
        responsive:{
        0:{
            items:1
        },
     768:
{
    items:4
},
     
        
 } 

});
});
