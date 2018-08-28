var number = Math.floor(Math.random() * 6);
var number2 = Math.floor(Math.random() * 6);
while (number == number2) {
  number2 = Math.floor(Math.random() * 6);
}
var people = document.getElementsByClassName("names");
people[number].style.display = "none";
people[number2].style.display = "none";

var number = Math.floor(Math.random() * 6);
var number2 = Math.floor(Math.random() * 6);
while (number == number2) {
  number2 = Math.floor(Math.random() * 6);
}
var people = document.getElementsByClassName("names2");
people[number].style.display = "none";
people[number2].style.display = "none";

$(document).ready(function() {
  var shareBox = document.getElementsByClassName("share-div");
  var shareIcon = document.getElementsByClassName("share-icon-list");
  var shareIconHeight = $(".share-icon-list").height() + $(".share-icon-list").height() + $(".last-share-icon").height();
  var shareBoxHeight = $(".share-div").height();
  console.log(shareIconHeight);
  console.log(shareBoxHeight);
  if (shareIconHeight > shareBoxHeight && $(window).width() < 1000) {
    shareBox[0].style.height = "auto";
  } else if ($(window).width() > 1000) {
    shareBox[0].style.height = "calc( 100% - 151px)";
  } else {
    shareBox[0].style.height = "calc(100% - 572.6px)";
  }
});

$(window).resize(function() {
  var shareBox = document.getElementsByClassName("share-div");
  var shareIcon = document.getElementsByClassName("share-icon-list");
  var shareIconHeight = $(".share-icon-list").height() + $(".share-icon-list").height() + $(".last-share-icon").height();
  var shareBoxHeight = $(".share-div").height();
  console.log(shareIconHeight);
  console.log(shareBoxHeight);
  if (shareIconHeight > shareBoxHeight && $(window).width() < 1000) {
    shareBox[0].style.height = "auto";
  } else if ($(window).width() > 1000) {
    shareBox[0].style.height = "calc( 100% - 151px)";
  } else {
    shareBox[0].style.height = "calc(100% - 572.6px)";
  }
});
