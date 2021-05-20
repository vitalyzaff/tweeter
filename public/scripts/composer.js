$(document).ready(() => {
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

  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 390) {
      $(".fixed").attr('id', 'on');
    } else {
      $(".fixed").removeAttr('id');
    }
  });

});