$(document).ready(function () {
    /* For the sticky navigation */
    let distance = $('.js--section-product').offset().top; //test
    let $window = $(window);
    // let productSection = $('.js--section-product');
    console.log('distance1=', distance); //TRACE
    // console.log('window scrollTop=', $window.scrollTop());
    // console.log('productSection=', productSection.scrollTop());
    // if ($window.scrollTop() >= distance) {
    //   console.log("product section reached top!")
    // }
    $('.js--section-product').waypoint(function(direction) {
        if (direction == "down") {
          $('header').addClass('sticky');
          // console.log('distance2=', distance); //TRACE
          // console.log('productSection2=', productSection.scrollTop());
          console.log('window scrollTop2=', $window.scrollTop());
          
          // if ($window.scrollTop() >= distance) {
          //   console.log("product section reached top!")
          // }
          // $('.header__logo').addClass('sticky');
          // $('.header__logo').append('sticky');
        } else {
          $('header').removeClass('sticky');
          // $('.header__logo').removeClass('sticky');
          // $('.header__logo').remove('sticky');
        }
    }, {
        offset: '20%'
    });
    
    // //Scroll when click on links
    // $('js--scroll-to-product').click(function() {
    //   $('html,body').animate({scrollTop: $('js--section-product').offset().top}, 1000);
    // });

    // $('js--scroll-to-vision').click(function() {
    //   $('html,body').animate({scrollTop: $('js--section-vision').offset().top}, 1000);
    // });

    /* Navigation scroll */
    $(function() {
      // Select all links with hashes
      $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
          let nav = $('.js--navigation__nav');
          let icon = $('.js--nav-icon ion-icon');
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
            // console.log('location.hostname=', location.hostname); //TRACE
            // console.log('target1=', target); //TRACE
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // console.log('target2=', target); //TRACE
            // Does a scroll target exist?
            if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault();
              console.log('Link scroll down=', target.offset().top)
              $('html, body').animate({
                scrollTop: target.offset().top //{scrollTop: targetOffset - 100} ?
              }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target); //refers to the jQuery representation of the dom object
                $target.focus();
                // console.log('$target=', $target); //TRACE
                // console.log('$target.is=', $target.is); //TRACE
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
    let nav = $('.js--navigation__nav');
    let icon = $('.js--nav-icon ion-icon');
    
    nav.slideToggle(200); //slideToggle is a jQuery method to open/close a box

    if (icon.attr("name") === "menu") { //if it's the "menu" icon 
      icon.attr("name", "close")  //then replace with "close" icon 
      
    } else {  //Menu is opened need to be closed
      icon.attr("name", "menu")    //replace "close" icon with "menu" icon
      
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
