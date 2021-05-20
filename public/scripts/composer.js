/* eslint-disable no-undef */

// ensuring the code has loaded
$(document).ready(() => {
  // back to top button appearing once the user has scrolled the webpage
  $(window).scroll(function() {
    if ($(this).scrollTop()) {
      $('#top').fadeIn();
    } else {
      $('#top').fadeOut();
    }
  });
  $("#top").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
  });
  // header turns solid color on mobile devices
  $(window).scroll(function() {
    if ($(window).scrollTop() > 390) {
      $(".fixed").attr('id', 'on');
    } else {
      $(".fixed").removeAttr('id');
    }
  });

});