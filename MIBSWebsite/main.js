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
