/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// temp database of tweets
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Eliza Fletcher",
      "handle": "@Fletcher",
      "avatars": "https://i.imgur.com/lRUnDgU.png"
    },
    "content": {
      "text": "hello there!"
    },
    "created_at": 1621445198652
  }
];

$(document).ready(() => {
  
  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      createTweetElement(tweet);
    }
  };
  
  const createTweetElement = function(tweet) {
    $('#tweets').append(`<article class="tweet">
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
  renderTweets(data);

  $("#textInput").submit(function(event) {
    event.preventDefault();
    $.post('/tweets', $(this).serialize());

  });
  

});