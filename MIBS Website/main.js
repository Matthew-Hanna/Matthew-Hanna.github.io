function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function menuanimationFunction(x) {
  x.classList.toggle("change");
  var nonMenu = document.getElementById("non-menu");
  var menu = document.getElementById("menu");
  if (menu.style.display == "block") {
    nonMenu.style.display = "block";
    menu.style.display = "none";
  }
   else {
    nonMenu.style.display = "none";
    menu.style.display = "block";
  }
}

function altmenuanimationFunction(x) {
  x.classList.toggle("change");
  var nonMenu = document.getElementById("non-menu");
  var menu = document.getElementById("menu");
  var contactList = document.getElementsByClassName("contact-list");
  if (menu.style.display == "block") {
    nonMenu.style.display = "block";
    menu.style.display = "none";
      contactList[0].style.display = "block";
  }
   else {
    nonMenu.style.display = "none";
    menu.style.display = "block";
    contactList[0].style.display = "none";
  }
}
function altmenuanimationFunction2(x) {
  x.classList.toggle("change");
  var nonMenu = document.getElementById("non-menu2");
  var menu = document.getElementById("menu");
  var contactList = document.getElementsByClassName("contact-list");
  if (menu.style.display == "block") {
    nonMenu.style.display = "block";
    menu.style.display = "none";
      contactList[0].style.display = "block";
  }
   else {
    nonMenu.style.display = "none";
    menu.style.display = "block";
    contactList[0].style.display = "none";
  }
}

var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showPictures(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-portraits");
  var description = document.getElementsByClassName("research-description")
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < description.length; i++) {
    description[i].style.display= "none";
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "inline-block";
    description[slideIndex - 1].style.display = "block";
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-pics");
  var description = document.getElementsByClassName("research-description")
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
