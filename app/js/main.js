$(function(){
  

  $('.burger').on('click', function(){
    $('.menu').toggleClass('menu--responsive');
    $('.burger').toggleClass('active');
    $('.menu__list').toggleClass('menu__list--responsive');
    $('.contacts').toggleClass('contacts--responsive')
    $('body').toggleClass('lock');
  });

  $('.review__container').slick({
    dots: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button type="button" class=" slick__btn slick__btn--prev"><span class="sr-only">предыдущий слайд</span><svg id="left" viewBox="0 0 44 44" fill="currentcolor" width="20" height="20"><path d="M28.245 41.798l-17.938-17.938c-1.392-1.399-1.392-3.659 0-5.059l17.938-17.938c1.342-1.152 3.326-1.152 4.667 0 1.503 1.288 1.679 3.555 0.391 5.059l-15.391 15.391 15.391 15.427c1.392 1.399 1.392 3.659 0 5.059-1.399 1.392-3.659 1.392-5.058 0z"></path></svg></button>',
    nextArrow: '<button type="button" class=" slick__btn slick__btn--next"><span class="sr-only">предыдущий слайд</span><svg id="right" viewBox="0 0 44 44" fill="currentcolor" width="20" height="20"><path d="M15.755 41.798l17.938-17.938c1.392-1.399 1.392-3.659 0-5.059l-17.938-17.938c-1.342-1.152-3.326-1.152-4.667 0-1.503 1.288-1.679 3.555-0.391 5.059l15.391 15.391-15.391 15.427c-1.392 1.399-1.392 3.659 0 5.059 1.399 1.392 3.659 1.392 5.059 0z"></path></svg></button>',
  });

  var mixer = mixitup('.products-grid');
});
