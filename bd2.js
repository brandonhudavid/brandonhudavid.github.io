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
        document.getElementById("box-about").style.left = "33.333vw"
        document.getElementById("box-software").style.left = "100vw"
        document.getElementById("box-design").style.left = "100vw"
        document.getElementById("nav1").classList.add("nav1color")
        document.getElementById("nav2").classList.remove("nav2color")
        document.getElementById("nav3").classList.remove("nav3color")
        document.getElementById("col1").style.left = "0vw"
        document.getElementById("col1").style.transition = "left 2s ease, filter 1s ease"
        document.getElementById("col2").style.left = "-33.334vw"
        document.getElementById("col2").style.transition = "left 2s ease, filter 1s ease"
        document.getElementById("col3").style.left = "-33.333vw";
        document.getElementById("col3").style.transition = "left 2s ease, filter 1s ease"
        document.getElementById("col1").style.filter = "grayscale(0%)"
        document.getElementById("col2").style.filter = "grayscale(100%)"
        document.getElementById("col3").style.filter = "grayscale(100%)"
        
    } else if (elem.id == "col2" || elem.id == "nav2") {
        document.getElementById("box-about").style.left = "100vw"
        document.getElementById("box-software").style.left = "33.333vw"
        document.getElementById("box-design").style.left = "100vw"
        document.getElementById("nav1").classList.remove("nav1color")
        document.getElementById("nav2").classList.add("nav2color")
        document.getElementById("nav3").classList.remove("nav3color")
        document.getElementById("col1").style.left = "-33.333vw"
        document.getElementById("col1").style.transition = "left 2s ease, filter 1s ease"
        document.getElementById("col2").style.left = "-.001vw"
        document.getElementById("col2").style.transition = "left 2s ease, filter 1s ease"
        document.getElementById("col3").style.left = "-33.333vw";
        document.getElementById("col3").style.transition = "left 2s ease, filter 1s ease"
        document.getElementById("col1").style.filter = "grayscale(100%)"
        document.getElementById("col2").style.filter = "grayscale(0%)"
        document.getElementById("col3").style.filter = "grayscale(100%)"
    } else {
        document.getElementById("box-about").style.left = "100vw"
        document.getElementById("box-software").style.left = "100vw"
        document.getElementById("box-design").style.left = "33.333vw"
        document.getElementById("nav1").classList.remove("nav1color")
        document.getElementById("nav2").classList.remove("nav2color")
        document.getElementById("nav3").classList.add("nav3color")
        document.getElementById("col1").style.left = "-33.333vw"
        document.getElementById("col1").style.transition = "left 2s ease, filter 1s ease"
        document.getElementById("col2").style.left = "-33.334vw"
        document.getElementById("col2").style.transition = "left 2s ease, filter 1s ease"
        document.getElementById("col3").style.left = "0vw";
        document.getElementById("col3").style.transition = "left 2s ease, filter 1s ease"
        document.getElementById("col1").style.filter = "grayscale(100%)"
        document.getElementById("col2").style.filter = "grayscale(100%)"
        document.getElementById("col3").style.filter = "grayscale(0%)"
    }
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        closeModal()
        closeModal2()
        closeModal3();
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

// modal 2

function openModal2() {
  document.getElementById('myModal2').style.display = "block";
}

function closeModal2() {
  document.getElementById('myModal2').style.display = "none";
}

var slideIndex2 = 1;
showSlides2(slideIndex2);


function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i2;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("demo2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i2 = 0; i2 < slides2.length; i2++) {
      slides2[i2].style.display = "none";
  }
    if (dots2[slideIndex2-1].id == "4") {
        document.getElementById("4").style.opacity = 1
        document.getElementById("5").style.opacity = 0.6
        document.getElementById("6").style.opacity = 0.6
        document.getElementById("7").style.opacity = 0.6
        document.getElementById("8").style.opacity = 0.6;}
    else if (dots2[slideIndex2-1].id == "5") {
        document.getElementById("4").style.opacity = 0.6
        document.getElementById("5").style.opacity = 1
        document.getElementById("6").style.opacity = 0.6
        document.getElementById("7").style.opacity = 0.6
        document.getElementById("8").style.opacity = 0.6;}
    else if (dots2[slideIndex2-1].id == "6") {
        document.getElementById("4").style.opacity = 0.6
        document.getElementById("5").style.opacity = 0.6
        document.getElementById("6").style.opacity = 1
        document.getElementById("7").style.opacity = 0.6
        document.getElementById("8").style.opacity = 0.6;}
    else if (dots2[slideIndex2-1].id == "7") {
        document.getElementById("4").style.opacity = 0.6
        document.getElementById("5").style.opacity = 0.6
        document.getElementById("6").style.opacity = 0.6
        document.getElementById("7").style.opacity = 1
        document.getElementById("8").style.opacity = 0.6;}
    else {
        document.getElementById("4").style.opacity = 0.6
        document.getElementById("5").style.opacity = 0.6
        document.getElementById("6").style.opacity = 0.6
        document.getElementById("7").style.opacity = 0.6
        document.getElementById("8").style.opacity = 1;}
  slides2[slideIndex2-1].style.display = "block";
}

// modal 3

function openModal3() {
  document.getElementById('myModal3').style.display = "block";
}

function closeModal3() {
  document.getElementById('myModal3').style.display = "none";
}

var slideIndex3 = 1;
showSlides3(slideIndex3);

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  var i3;
  var slides3 = document.getElementsByClassName("mySlides3");
  var dots3 = document.getElementsByClassName("demo3");
  if (n > slides3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides3.length}
  for (i3 = 0; i3 < slides3.length; i3++) {
      slides3[i3].style.display = "none";
  }
    if (dots3[slideIndex3-1].id == "9") {
        document.getElementById("9").style.opacity = 1
        document.getElementById("10").style.opacity = 0.6;
//        document.getElementById("6").style.opacity = 0.6
//        document.getElementById("7").style.opacity = 0.6
//        document.getElementById("8").style.opacity = 0.6
    }
    else {
        document.getElementById("9").style.opacity = 0.6
        document.getElementById("10").style.opacity = 1;
        
    }
  slides3[slideIndex3-1].style.display = "block";
}

// modal 4

function openModal4() {
  document.getElementById('myModal4').style.display = "block";
}

function closeModal4() {
  document.getElementById('myModal4').style.display = "none";
}

var slideIndex4 = 1;
showSlides4(slideIndex4);

function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
  var i4;
  var slides4 = document.getElementsByClassName("mySlides4");
  var dots4 = document.getElementsByClassName("demo4");
  if (n > slides4.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = slides4.length}
  for (i4 = 0; i4 < slides4.length; i4++) {
      slides4[i4].style.display = "none";
  }
    if (dots4[slideIndex4-1].id == "t2") {
        document.getElementById("t2").style.opacity = 1
        document.getElementById("t3").style.opacity = 0.6
        document.getElementById("t4").style.opacity = 0.6
        document.getElementById("t5").style.opacity = 0.6
        document.getElementById("t6").style.opacity = 0.6
        document.getElementById("t7").style.opacity = 0.6;
    }
    else if (dots4[slideIndex4-1].id == "t3") {
        document.getElementById("t2").style.opacity = 0.6
        document.getElementById("t3").style.opacity = 1
        document.getElementById("t4").style.opacity = 0.6
        document.getElementById("t5").style.opacity = 0.6
        document.getElementById("t6").style.opacity = 0.6
        document.getElementById("t7").style.opacity = 0.6;
    }
    else if (dots4[slideIndex4-1].id == "t4") {
        document.getElementById("t2").style.opacity = 0.6
        document.getElementById("t3").style.opacity = 0.6
        document.getElementById("t4").style.opacity = 1
        document.getElementById("t5").style.opacity = 0.6
        document.getElementById("t6").style.opacity = 0.6
        document.getElementById("t7").style.opacity = 0.6;
    }
    else if (dots4[slideIndex4-1].id == "t5") {
        document.getElementById("t2").style.opacity = 0.6
        document.getElementById("t3").style.opacity = 0.6
        document.getElementById("t4").style.opacity = 0.6
        document.getElementById("t5").style.opacity = 1
        document.getElementById("t6").style.opacity = 0.6
        document.getElementById("t7").style.opacity = 0.6;
    }
    else if (dots4[slideIndex4-1].id == "t6") {
        document.getElementById("t2").style.opacity = 0.6
        document.getElementById("t3").style.opacity = 0.6
        document.getElementById("t4").style.opacity = 0.6
        document.getElementById("t5").style.opacity = 0.6
        document.getElementById("t6").style.opacity = 1
        document.getElementById("t7").style.opacity = 0.6;
    }
    else {
        document.getElementById("t2").style.opacity = 0.6
        document.getElementById("t3").style.opacity = 0.6
        document.getElementById("t4").style.opacity = 0.6
        document.getElementById("t5").style.opacity = 0.6
        document.getElementById("t6").style.opacity = 0.6
        document.getElementById("t7").style.opacity = 1;
    }
  slides4[slideIndex4-1].style.display = "block";
}