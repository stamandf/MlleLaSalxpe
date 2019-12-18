$(document).ready(function () {
    /* For the sticky navigation */
    $('.js--section-product').waypoint(function(direction) {
        if (direction == "down") {
          $('nav').addClass('sticky');
          
        } else {
          $('nav').removeClass('sticky');
       }
    }, {
        // offset: '20%'
        offset: '60px;'
    });
 
    /* Navigation scroll */
    $(function() {
      // Select all links with hashes
      $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
          let nav = $('.js--navigation');
          let icon = $('.js--nav-icon ion-icon');
          console.log('icon=', icon);
          if (icon.attr("name") === "close") { //if on mobile view, menu is open and must be closed
              nav.slideToggle(200); //when a link is clicked on mobile close menu
              icon.attr("name", "menu")  //then replace with "close" icon 
            } 
          // On-page links
          if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
          ) {
            // Figure out element to scroll to
            var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault();
              $('html, body').animate({
                scrollTop: target.offset().top //{scrollTop: targetOffset - 100} ?
              }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target); //refers to the jQuery representation of the dom object
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

  /* Mobile navigation */
  $('.js--nav-icon').click(function() {
    let nav = $('.js--navigation');
    let icon = $('.js--nav-icon ion-icon');
    let logo = $('.js--nav-logo');
    nav.slideToggle(200); //slideToggle is a jQuery method to open/close a box

    if (icon.attr("name") === "menu") { //if it's the "menu" icon 
      icon.attr("name", "close")  //then replace with "close" icon
      logo.addClass('u-disappear'); 
      
    } else {  //Menu is opened need to be closed
      icon.attr("name", "menu");    //replace "close" icon with "menu" icon
      logo.removeClass('u-disappear');
    }
      
  });
  /* Form Input values handler */
  let inputEmail = $('.js--input-email');
  let inputFirstName = $('.js--input-firstname');
  let inputLastName = $('.js--input-lastname');
  let clearSubscribe = $('.js--clear-subscribe');
  
  inputEmail.focus(function() { //When focus is on the email field the rest of form appears.
    inputFirstName.removeClass('u-disappear');
    inputLastName.removeClass('u-disappear');
    clearSubscribe.removeClass('u-disappear');
  });
  /* Form handler */
  $('form').submit(function(event){
    let inputValue = $("input[name=FNAME]").val();
    event.preventDefault();
    let form = $('.form');
    let formParagraph = $('.paragraph-footer')
    form.addClass('u-disappear');
    formParagraph.removeClass('u-disappear');
    formParagraph.append('Thank you, ', inputValue, '. You have been subscribed!');
  });

});
