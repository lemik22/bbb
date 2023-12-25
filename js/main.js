$(document).ready(function(){
  function setProgress(index) {
    const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;
  
    $progressBar
      .css('background-size', `${calc}% 100%`)
      .attr('aria-valuenow', calc);
  }
  
  const $slider = $('.horses__slider');
  const $progressBar = $('.progress');
  
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    setProgress(nextSlide);
  });
  
  $('.horses__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    // centerMode: true,
    dots: true,
    appendDots: $('.horses__slider-dots'),
    prevArrow: $('.horses__arrow--prev'),
    nextArrow: $('.horses__arrow--next'),
    responsive: [
      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 3.1,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        }
      },
    ]
  });
  setProgress(0);
  $('.header__menu-item a, .footer__nav-item a').on('click', function (e) {
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({ scrollTop : top }, 600);
  })

  $('.header__burger-menu').click(function () {
    $('.header__menu').toggleClass('is-show')
  })
  $('.header__menu-cross, .header__menu-item').click(function () {
    $('.header__menu').removeClass('is-show')
  })
})


