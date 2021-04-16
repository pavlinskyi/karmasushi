$(document).ready(function() {
    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[а-я\s]+$/i.test(value);
    }, "");

    $('.mainpage-slider1').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        adaptiveHeight: true
    });

    $('.mainpage-slider2').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        adaptiveHeight: true
    });



    (function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu')
        .toggleClass('menu_state_open');
        
    });
    
    $('.menu__links-item').on('click', function() {
      // do something

      $(this).closest('.menu')
        .removeClass('menu_state_open');
            });
        });

    })(jQuery);
    
     
})

