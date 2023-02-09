const rangeIput = document.querySelectorAll('.slider-input input'),
priceInput = document.querySelectorAll('.price__data input'),
progress = document.querySelector('.slider .slider__progress');

let priceGap = 0;

rangeIput.forEach(input =>{
  input.addEventListener('input', e => {
    let minVal = parseInt(rangeIput[0].value),
    maxVal = parseInt(rangeIput[1].value);

    if(maxVal - minVal < priceGap){
      if (e.target.className === 'slider-input__item--min'){
        rangeIput[0].value = maxVal - priceGap;
      }else{
        rangeIput[1].value = minVal + priceGap;
      }
    }else{
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      progress.style.left = (minVal / rangeIput[0].max) * 100 + '%';
      progress.style.right = 100 - (maxVal / rangeIput[1].max) * 100 + '%';
    }
  });  

});

$(function(){

  
  $('.burger--open').on('click', function(){
    $('.menu-mobile').addClass('active');
    $('body').addClass('lock');
  });
  
  $('.burger--close').on('click', function(){
    $('.menu-mobile').removeClass('active');
    $('body').removeClass('lock');
  });

  $('.field__name').on('click', function(){
    $('.select__list-name').toggleClass('active');
    $('.select__list-count').removeClass('active');
  });

  $('.field__count').on('click', function(){
    $('.select__list-count').toggleClass('active');
    $('.select__list-name').removeClass('active');
  });

  $('.pagination__link').on('click', function(){
    $('.pagination__link').removeClass('pagination__link--active')
    $(this).addClass('pagination__link--active');
  });

  $('.select__mobile-filters').on('click', function(){
    $('.menu-mob').addClass('active');
    $('.filters').addClass('filters--mobile');
    $('body').addClass('lock');
  });


  
  $('.restorants__grid').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    arrows: false,
    dots: true,
    mobileFirst: true,
    responsive: [
      {
         breakpoint: 768,
         settings: "unslick"
      }
   ]
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
