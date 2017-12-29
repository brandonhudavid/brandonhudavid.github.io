window.addEventListener("load", function()
{
    document.getElementById("loadtext").classList.add("fadein")
    document.getElementById("bgimg").classList.add("fadein")
    document.getElementById("spinner").classList.add("fadeout")
    document.getElementById("overlay").onclick = function(){shift();}
})

function shift(){
    document.getElementById("overlay").classList.add("slideDown")
    document.getElementById("col1").classList.add("col1slide")
    document.getElementById("col2").classList.add("col2slide")
    document.getElementById("col3").classList.add("col3slide");
}

function select(elem){
    document.getElementById("col1").onclick = function(){return false;}
    document.getElementById("col2").onclick = function(){return false;}
    document.getElementById("col3").onclick = function(){return false;}
    document.getElementById("nav").classList.add("slideNav")
    if (elem.id == "col1" || elem.id == "nav1") {
        document.getElementById("box-about").style.left = "33vw"
        document.getElementById("box-software").style.left = "100vw"
        document.getElementById("box-design").style.left = "100vw"
        document.getElementById("nav1").classList.add("nav1color")
        document.getElementById("nav2").classList.remove("nav2color")
        document.getElementById("nav3").classList.remove("nav3color")
        document.getElementById("col1").style.left = "0vw"
        document.getElementById("col1").style.transition = "left 2s ease, background-color 0.3s ease"
        document.getElementById("col2").style.left = "-34vw"
        document.getElementById("col2").style.transition = "left 2s ease, background-color 0.3s ease"
        document.getElementById("col3").style.left = "-33vw";
        document.getElementById("col3").style.transition = "left 2s ease, background-color 0.3s ease"
    } else if (elem.id == "col2" || elem.id == "nav2") {
        document.getElementById("box-about").style.left = "100vw"
        document.getElementById("box-software").style.left = "33vw"
        document.getElementById("box-design").style.left = "100vw"
        document.getElementById("nav1").classList.remove("nav1color")
        document.getElementById("nav2").classList.add("nav2color")
        document.getElementById("nav3").classList.remove("nav3color")
        document.getElementById("col1").style.left = "-33vw"
        document.getElementById("col1").style.transition = "left 2s ease, background-color 0.3s ease"
        document.getElementById("col2").style.left = "-1vw"
        document.getElementById("col2").style.transition = "left 2s ease, background-color 0.3s ease"
        document.getElementById("col3").style.left = "-33vw";
        document.getElementById("col3").style.transition = "left 2s ease, background-color 0.3s ease"
    } else {
        document.getElementById("box-about").style.left = "100vw"
        document.getElementById("box-software").style.left = "100vw"
        document.getElementById("box-design").style.left = "33vw"
        document.getElementById("nav1").classList.remove("nav1color")
        document.getElementById("nav2").classList.remove("nav2color")
        document.getElementById("nav3").classList.add("nav3color")
        document.getElementById("col1").style.left = "-33vw"
        document.getElementById("col1").style.transition = "left 2s ease, background-color 0.3s ease"
        document.getElementById("col2").style.left = "-34vw"
        document.getElementById("col2").style.transition = "left 2s ease, background-color 0.3s ease"
        document.getElementById("col3").style.left = "0vw";
        document.getElementById("col3").style.transition = "left 2s ease, background-color 0.3s ease"
    }
}

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
    if (dots[slideIndex-1].id == "1") {
        document.getElementById("1").style.opacity = 1
        document.getElementById("2").style.opacity = 0.6
        document.getElementById("3").style.opacity = 0.6;}
    else if (dots[slideIndex-1].id == "2") {
        document.getElementById("1").style.opacity = 0.6
        document.getElementById("2").style.opacity = 1
        document.getElementById("3").style.opacity = 0.6;}
    else {
        document.getElementById("1").style.opacity = 0.6
        document.getElementById("2").style.opacity = 0.6
        document.getElementById("3").style.opacity = 1;}
  slides[slideIndex-1].style.display = "block";
}