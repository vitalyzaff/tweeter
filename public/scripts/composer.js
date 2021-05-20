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
});