var number = Math.floor(Math.random() * 6);
var number2 = Math.floor(Math.random() * 6);
while(number == number2)
{
  number2 =  Math.floor(Math.random() * 6);
}
var people =  document.getElementsByClassName("names");
people[number].style.display= "none";
people[number2].style.display= "none";

var number = Math.floor(Math.random() * 6);
var number2 = Math.floor(Math.random() * 6);
while(number == number2)
{
  number2 =  Math.floor(Math.random() * 6);
}
var people =  document.getElementsByClassName("names2");
people[number].style.display= "none";
people[number2].style.display= "none";
