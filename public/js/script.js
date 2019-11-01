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


});
