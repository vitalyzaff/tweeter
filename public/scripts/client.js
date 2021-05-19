/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(() => {
  
  const renderTweets = function() {
    const url = '/tweets';
    $.ajax({url}).then((response) => {
      $('#tweets').empty();
      for (let tweet of response) {
        createTweetElement(tweet);
      }
    });
  };

  
  const createTweetElement = function(tweet) {
    $('#tweets').prepend(`<article class="tweet">
    <div class="content">
    <header class="tweet-header">
      <div class="avatar-name">
        <img src="${tweet.user.avatars}" alt="avatar">
        <p class="name">${tweet.user.name}</p>
      </div>
      <p class="id">${tweet.user.handle}</p>
    </header>
    <body>
      <p class="tweet-text">${tweet.content.text}</p>
    </body>
    <footer class="tweet-footer">
      <div class="footer-content">
        <div class="date-posted" id="time">${timeago.format(tweet.created_at)}</div>
        <div class="social-icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
      </div>
    </div>
    </footer>
  </div>
  </article>`);
  };
  $("#textInput").submit(function(event) {
    event.preventDefault();
    let count = $('#tweet-text').val().length;
    if (count === 0) {
      alert("Your tweet is empty!");
    } else if (count > 140) {
      alert("Too many characters, MAX 140!");
    } else {
      $.post('/tweets', $(this).serialize());
      renderTweets();
    }
  });
  renderTweets();
});



