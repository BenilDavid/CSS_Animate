
var sec1 = document.getElementById("section-1");
var sec2 = document.getElementById("section-2");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

btn1.addEventListener("click",function(){
btn1.classList.add("animated","bounce")
});

btn2.addEventListener("click",function(){
  sec1.classList.remove("slideInRight");
  sec1.classList.add("flipOutX");
});

btn3.addEventListener("click",function(){
  sec2.classList.remove("slideInLeft");
  sec2.classList.add("flipOutY");
});

btn4.addEventListener("click",function(){
  sec1.classList.add("slideInLeft");
  sec2.classList.add("slideInRight");
  sec1.classList.remove("flipOutX");
  sec2.classList.remove("flipOutY");
});
