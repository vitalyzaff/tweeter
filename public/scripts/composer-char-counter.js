/* eslint-disable no-undef */

// ensuring the code has loaded
$(document).ready(function() {
  // validation if the input has the right character amount, if not it turns red
  $('#tweet-text').on('keyup', function() {
    let count = 140 - $(this).val().length;
    let counter = $(this).parent().children('div.submit').children('.counter');
    counter.text(count);
    if (count < 0) {
      counter.css('color', 'red');
    } else if (count > 0) {
      counter.css('color', "#545149");
    }
  });
});

