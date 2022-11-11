$(document).ready(function () {
  jQuery("time.timeago").timeago()
  jQuery.timeago(new Date())
  // Select the div with the ID #app
  var $app = $("#app")
  $app.html("")

  //create new HTML elements
  var $header = $('<div class="header"></div>')
  var $title = $('<h1 class="title">Cape Twiddler</h1>')
  var $subtitle = $('<h2 id="subtitle">See what\'s going on in the world of Super Heroes</h2>')
  // var $button = $('<button id="update-feed">Update Feed</button>')
  var $button = $('<button id="update-feed" class="button-8" role="button">Update Feed</button>')
  var $feed = $('<div id="feed"></div>')
  //Create event handler functions and listeners
  // $title.on("click", function (event) {
  //   alert("The title of this page is: " + event.target.innerText)
  // })

  $button.on("click", function (event) {
    $("#update-feed").text("Update Feed")
    $("#subtitle").text("See what's going on Today")
    $("#feed").empty()
    $renderFeed()
  })

  //Append HTML elements to the DOM
  $header.appendTo($app)
  $title.appendTo($app)
  $subtitle.appendTo($app)
  $button.appendTo($app)
  $feed.appendTo($app)

  var $renderFeed = function (event, user) {
    var index = streams.home.length - 1
    while (index >= 0) {
      var tweet = streams.home[index]
      if (user === undefined || user === tweet.user) {
        var $tweet = $('<div class="tweet"></div>')
        var message = tweet.message
        var $message = $('<div class="message"></div>')
        var $user = $('<div class="username"></div>')
        var $profilePhoto = $('<img class="profile-photo" src="assets/img2/' + tweet.user + '.png"></img>')
        var timeStamp = tweet.created_at
        var $timeStamp = $('<time class="timestamp"><r/time>')
        // var $icons = $('<div class= "icons"></div>')
        // var $comment = $('<i class="icon comment far fa-comment"></i>')
        // var $retweet = $('<i class="icon retweet fa fa-retweet"></i>')
        // var $like = $('<i class="icon like fas fa-heart"></i>')
        // var $share = $('<i class="icon share fas fa-share"></i>')

        $user.on("click", function (event) {
          console.log($("#update-feed").text())
          $("#update-feed").text("Back")
          $("#subtitle").text(event.target.innerText + "'s Timeline")

          $("#feed").empty()
          $renderFeed(event, event.target.innerText.replace("@", ""))
        })

        $profilePhoto.appendTo($tweet)
        $user.text("@" + tweet.user)
        $user.appendTo($tweet)
        $message.text(tweet.message)
        $message.appendTo($tweet)
        $timeStamp.text($.timeago(timeStamp))
        $timeStamp.appendTo($tweet)

        $("i").hover(
          function () {
            $(this).css("color", "rgb(255, 255, 255)")
          },
          function () {
            $(this).css("color", "rgb(0, 0, 0)")
          }
        )

        // $comment.appendTo($icons)
        // $retweet.appendTo($icons)
        // $like.appendTo($icons)
        // $share.appendTo($icons)
        // $icons.appendTo($tweet)
        $tweet.appendTo($feed)
      }
      index -= 1
    }
  }

  $renderFeed()

  window.isItBeautifulYet = true
})
