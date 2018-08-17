
var slideIndex = 1;
showSlides(slideIndex);

var index = getParameterByName('slide');
if(index != null)
  currentSlide(index);

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

var number = Math.floor(Math.random() * 6);
var number2 = Math.floor(Math.random() * 6);
while(number == number2)
{
  number2 =  Math.floor(Math.random() * 6);
}
var people =  document.getElementsByClassName("names");
people[number].style.display= "none";
people[number2].style.display= "none";

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
