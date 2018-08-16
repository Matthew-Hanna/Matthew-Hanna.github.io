
var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-pics");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

var number = Math.floor(Math.random() * 5);
var number2 = Math.floor(Math.random() * 5);
while(number == number2)
{
  number2 =  Math.floor(Math.random() * 5);
}
var people =  document.getElementsByClassName("names");
people[number].style.display= "none";
people[number2].style.display= "none";
