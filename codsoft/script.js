var trandingSlider = new Swiper('.swiper-container', { //creating a new instance of the swiper slider
    effect: 'coverflow', //effect showing multiple sildes at once with a 3d rotationeffect
    grabCursor: true,//cursor changes from pointer to hand when hovering over the slider
    centeredSlides: true,// centering the slides
    loop: true,//loops back to the frst when reaching the end
    slidesPerView: 1.5,//number of slides per view
    
    coverflowEffect: {
        rotate: 0,  //rotate the slides by 50 degrees
        stretch: 0,//stretch the slides by 0
       spaceBetween: 5,
        modifier: 2.5,
    },
   
    pagination: {//object contatining propertes to customize the slider
        el: '.swiper-pagination',//selcts the element to be used as pagination
        clickable: true,//makes the pagination clickable 
    },
 
    navigation: {
        nextEl: '.swiper-button-next',//selects the element to be used as the next button
        prevEl: '.swiper-button-prev',//selects the element to be used as the previous button
    }
});