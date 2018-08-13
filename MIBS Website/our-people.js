var slideIndex = 1;
showPeople(slideIndex);

function plusSlides(n) {
  showPeople(slideIndex += n);
}

function showPeople(n) {
  var i;
  var slides1 = document.getElementsByClassName("slideshow-pics1");
  var slides2 = document.getElementsByClassName("slideshow-pics2");
  var slides3 = document.getElementsByClassName("slideshow-pics3");
  var title1 = document.getElementsByClassName("people-title");
  var title2 = document.getElementsByClassName("people-title2");
  var description1 = document.getElementsByClassName("people-description1");
  var description2 = document.getElementsByClassName("people-description2");
  var description3 = document.getElementsByClassName("people-description3");

  if (n > slides1.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides1.length;
  }
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  for (i = 0; i < title1.length; i++) {
    title1[i].style.display = "none";
  }
  for (i = 0; i < title2.length; i++) {
    title2[i].style.display = "none";
  }
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  for (i = 0; i < description1.length; i++) {
    description1[i].style.display= "none";
  }
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < description2.length; i++) {
    description2[i].style.display= "none";
  }
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  for (i = 0; i < description3.length; i++) {
    description3[i].style.display= "none";
  }
  slides1[slideIndex - 1].style.display = "block";
  description1[slideIndex - 1].style.display = "block";
  slides2[slideIndex - 1].style.display = "inline-block";
  description2[slideIndex - 1].style.display = "block";
  slides3[slideIndex - 1].style.display = "inline-block";
  description3[slideIndex - 1].style.display = "block";
  title1[slideIndex - 1].style.display = "block";
  title2[slideIndex - 1].style.display = "block";
}
