$(document).on("scroll", function () {
  if ($(document).scrollTop() > 80) {
    $(".header_outer").addClass("shrink");
  } else {
    $(".header_outer").removeClass("shrink");
  };
});


$(document).ready(function () {
  if (!window.Cypress) AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animated',
    duration: 3000, // values from 0 to 3000, with step 50ms
  });
  $(".mobile_menu_btn").click(function () {
    $(".main_menu").toggleClass("open")
    $(this).toggleClass("close")
  })
  $('.form-control').val('');

  $('.form-control').focusout(function () {
    if ($(this).val() != '') {
      $(this).addClass('focused');
      $(this).parents().children('.placeholder').addClass('focused_span');
    } else {
      $(this).removeClass('focused');
      $(this).parents().children('.placeholder').removeClass('focused_span');
    }
  });

  $(".main_menu ul li a").click(function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
  })
  $(".banner_slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000
  });

  $(".logo_slide").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });

});

