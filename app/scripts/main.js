function sliderTopPosLeft(){
    let paddingLeft = $('.container').offset().left;
    $('.slider-top__title,.slider-top__text').css('margin-left', paddingLeft);
}
$(document).ready(function () {
   $('.slider-top').owlCarousel({
       items: 1,
       loop: true
   });
   $('.our-work-slider').owlCarousel({
       items:4,
       responsive:{
         0:{
           items:2
         },
         640:{
             items:3
         },
         992:{
             items:4
         }
       },
       loop: true,
   });
   // slider-top left pos text

    sliderTopPosLeft();

    //.our-work-slider__item height
    let workItem =  $('.our-work-slider__item');
    let workItemWidth = workItem.width();
    workItem.css('height', workItemWidth);

    // select active
    $('.form__select').on('change',function () {
        $(this).addClass('active');
    })

    // mob menu button click

    $('.mob-menu-but').on('click',function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.header-mob').removeClass('active');
            $(this).addClass('close');
        }else{
            $(this).addClass('active');
            $('.header-mob').addClass('active');
            $(this).removeClass('close');

        }
    })
    // catalog list open
    $('.catalog__menu__block__title').on('click',function () {
        if($(this).parent().hasClass('active')){
            $(this).parent().removeClass('active');
        }else{
            $('.catalog__menu__block').removeClass('active');
            $(this).parent().addClass('active');
        }
    });
    $('.catalog__menu__block__list p').on('click',function () {
        if($(this).parent().find('ul').hasClass('active')){
            $(this).removeClass('active');
            $(this).parent().find('ul').removeClass('active');
        }else{
            $(this).parent().find('ul').addClass('active')
            $(this).addClass('active');
        }
    })
});
$(window).resize(function () {
    sliderTopPosLeft();


    //.our-work-slider__item height
    let workItem =  $('.our-work-slider__item');
    let workItemWidth = workItem.width();
    workItem.css('height', workItemWidth);
});