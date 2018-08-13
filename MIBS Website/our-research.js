
var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-pics");
  var description = document.getElementsByClassName("research-description");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < description.length; i++) {
    description[i].style.display= "none";
  }
  slides[slideIndex - 1].style.display = "block";
  description[slideIndex - 1].style.display = "block";
}
