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

});
$(window).resize(function () {
    sliderTopPosLeft();


    //.our-work-slider__item height
    let workItem =  $('.our-work-slider__item');
    let workItemWidth = workItem.width();
    workItem.css('height', workItemWidth);
});