$(document).ready(function() {
  var boxHeight = $("#boxHeightDeterminant").height();
  var textHeight =  $("#textHeightDeterminant").height();
  if( boxHeight <= textHeight){
    var box = document.getElementsByClassName("contact-list");
    box[0].style.height = "auto";
  }
  else if ($(window).width() > 1000){
    box[0].style.height = "calc( 100% - 151px)";
  }
  else{
    box[0].style.height = "calc(100% - 270px)";
  }
});

$(document).resize(function() {
  var boxHeight = $("#boxHeightDeterminant").height();
  var textHeight =  $("#textHeightDeterminant").height();
  var box = document.getElementsByClassName("contact-list");
  if( boxHeight <= textHeight){
    box[0].style.height = "auto";
  }
  else if ($(window).width() > 1000){
    box[0].style.height = "calc( 100% - 151px)";
  }
  else{
    box[0].style.height = "calc(100% - 270px)";
  }
});
