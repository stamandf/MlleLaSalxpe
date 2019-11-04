$(document).ready(function () {

    /* For the sticky navigation */
    $('.js--section-product').waypoint(function(direction) {
        if (direction == "down") {
          $('header').addClass('sticky');
          $('.header__logo').append('sticky');
        } else {
          $('header').removeClass('sticky');
          $('.header__logo').remove('sticky');
        }
    }, {
        offset: '60px'
    });
    
    //Scroll when click on links
    $('js--scroll-to-product').click(function() {
      $('html,body').animate({scrollTop: $('js--section-product').offset().top}, 3000);
    });

    $('js--scroll-to-vision').click(function() {
      $('html,body').animate({scrollTop: $('js--section-vision').offset().top}, 3000);
    });

    /* Navigation scroll */
    $(function() {
      // Select all links with hashes
      $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
          // On-page links
          if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
          ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault();
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                  return false;
                } else {
                  $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
                };
              });
            }
          }
        });
      });
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '30%'
    });

    $('.js--wp-2').waypoint(function(direction) {
      $('.js--wp-2').addClass('animated fadeIn');
  }, {
      offset: '10%'
  });


    // $('.js--wp-2').waypoint(function(direction) {
    //     $('.js--wp-2').addClass('animated fadeInUp');
    // }, {
    //     offset: '50%'
    // });

    // $('.js--wp-3').waypoint(function(direction) {
    //     $('.js--wp-3').addClass('animated fadeIn');
    // }, {
    //     offset: '50%'
    // });

    // $('.js--wp-4').waypoint(function(direction) {
    //     $('.js--wp-4').addClass('animated pulse');
    // }, {
    //     offset: '50%'
    // });

    // $('.js--wp-5').waypoint(function(direction) {
    //     $('.js--wp-5').addClass('animated fadeInRight');
    // }, {
    //     offset: '50%'
    // });
});
