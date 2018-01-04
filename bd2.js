window.addEventListener("load", function()
{
    document.getElementById("preloadtext").classList.add("fadeload")
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
    document.getElementById("col1").classList.remove("enlarge")
    document.getElementById("col2").classList.remove("enlarge")
    document.getElementById("col3").classList.remove("enlarge")
    if (elem.id == "col1" || elem.id == "nav1") {
        document.getElementById("box-about").style.left = "33.333vw"
        document.getElementById("box-software").style.left = "100vw"
        document.getElementById("box-design").style.left = "100vw"
        document.getElementById("nav1").classList.add("nav1color")
        document.getElementById("nav2").classList.remove("nav2color")
        document.getElementById("nav3").classList.remove("nav3color")
        document.getElementById("col1").style.left = "0vw"
        document.getElementById("col1").style.transition = "left 1.25s ease, filter 1s ease"
        document.getElementById("col2").style.left = "-33.334vw"
        document.getElementById("col2").style.transition = "left 1.25s ease, filter 1s ease"
        document.getElementById("col3").style.left = "-33.333vw";
        document.getElementById("col3").style.transition = "left 1.25s ease, filter 1s ease"
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
        document.getElementById("col1").style.transition = "left 1.25s ease, filter 1s ease"
        document.getElementById("col2").style.left = "-.001vw"
        document.getElementById("col2").style.transition = "left 1.25s ease, filter 1s ease"
        document.getElementById("col3").style.left = "-33.333vw";
        document.getElementById("col3").style.transition = "left 1.25s ease, filter 1s ease"
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
        document.getElementById("col1").style.transition = "left 1.25s ease, filter 1s ease"
        document.getElementById("col2").style.left = "-33.334vw"
        document.getElementById("col2").style.transition = "left 1.25s ease, filter 1s ease"
        document.getElementById("col3").style.left = "0vw";
        document.getElementById("col3").style.transition = "left 1.25s ease, filter 1s ease"
        document.getElementById("col1").style.filter = "grayscale(100%)"
        document.getElementById("col2").style.filter = "grayscale(100%)"
        document.getElementById("col3").style.filter = "grayscale(0%)"
    }
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        closeModal('myModal')
        closeModal('myModal2')
        closeModal('myModal3')
        closeModal('myModal4')
        closeModal('myModal5');
    }
}

function openModal(modal) {
  document.getElementById(modal).style.display = "block";
}

function closeModal(modal) {
  document.getElementById(modal).style.display = "none";
}


function currentSlide(modal, n) {
    var i;
    if (modal == 'myModal') {
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        document.getElementById("1").style.opacity = 0.6
        document.getElementById("2").style.opacity = 0.6
        document.getElementById("3").style.opacity = 0.6
        if (dots[n-1].id == "1") {
            document.getElementById("1").style.opacity = 1;}
        else if (dots[n-1].id == "2") {
            document.getElementById("2").style.opacity = 1;}
        else {
            document.getElementById("3").style.opacity = 1;}
        slides[n-1].style.display = "block";
    }
    else if (modal == 'myModal2') {
        var slides = document.getElementsByClassName("mySlides2");
        var dots = document.getElementsByClassName("demo2");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        document.getElementById("4").style.opacity = 0.6
        document.getElementById("5").style.opacity = 0.6
        document.getElementById("6").style.opacity = 0.6
        document.getElementById("7").style.opacity = 0.6
        document.getElementById("8").style.opacity = 0.6
        if (dots[n-1].id == "4") {
            document.getElementById("4").style.opacity = 1;}
        else if (dots[n-1].id == "5") {
            document.getElementById("5").style.opacity = 1;}
        else if (dots[n-1].id == "6") {
            document.getElementById("6").style.opacity = 1;}
        else if (dots[n-1].id == "7") {
            document.getElementById("7").style.opacity = 1;}
        else {
            document.getElementById("8").style.opacity = 1;}
        slides[n-1].style.display = "block";
    }
    else if (modal == 'myModal3') {
        var slides = document.getElementsByClassName("mySlides3");
        var dots = document.getElementsByClassName("demo3");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        document.getElementById("9").style.opacity = 0.6
        document.getElementById("10").style.opacity = 0.6
        if (dots[n-1].id == "9") {
            document.getElementById("9").style.opacity = 1;
        }
        else {
            document.getElementById("10").style.opacity = 1;
        }
        slides[n-1].style.display = "block";
    }
    else if (modal == 'myModal4') {
        var slides = document.getElementsByClassName("mySlides4");
        var dots = document.getElementsByClassName("demo4");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        document.getElementById("t1").style.opacity = 0.6
        document.getElementById("t2").style.opacity = 0.6
        document.getElementById("t3").style.opacity = 0.6
        document.getElementById("t4").style.opacity = 0.6
        document.getElementById("t5").style.opacity = 0.6
        document.getElementById("t6").style.opacity = 0.6
        if (dots[n-1].id == "t1") {
            document.getElementById("t1").style.opacity = 1;
        }
        else if (dots[n-1].id == "t2") {
            document.getElementById("t2").style.opacity = 1;
        }
        else if (dots[n-1].id == "t3") {
            document.getElementById("t3").style.opacity = 1;
        }
        else if (dots[n-1].id == "t4") {
            document.getElementById("t4").style.opacity = 1;
        }
        else if (dots[n-1].id == "t5") {
            document.getElementById("t5").style.opacity = 1;
        }
        else {
            document.getElementById("t6").style.opacity = 1;
        }
        slides[n-1].style.display = "block";
    }
    else if (modal == 'myModal5') {
        var slides = document.getElementsByClassName("mySlides5");
        var dots = document.getElementsByClassName("demo5");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        document.getElementById("w1").style.opacity = 0.6
        document.getElementById("w2").style.opacity = 0.6
        document.getElementById("w3").style.opacity = 0.6
        document.getElementById("w4").style.opacity = 0.6
        document.getElementById("w5").style.opacity = 0.6
        document.getElementById("w6").style.opacity = 0.6
        if (dots[n-1].id == "w1") {
            document.getElementById("w1").style.opacity = 1;
        }
        else if (dots[n-1].id == "w2") {
            document.getElementById("w2").style.opacity = 1;
        }
        else if (dots[n-1].id == "w3") {
            document.getElementById("w3").style.opacity = 1;
        }
        else if (dots[n-1].id == "w4") {
            document.getElementById("w4").style.opacity = 1;
        }
        else if (dots[n-1].id == "w5") {
            document.getElementById("w5").style.opacity = 1;
        }
        else {
            document.getElementById("w6").style.opacity = 1;
        }
        slides[n-1].style.display = "block";
    }
}

function scrollsoft(elem) {
    document.getElementById(elem).scrollIntoView();
    document.getElementById("box-software").scrollTop -= 50;
}

function scrolldesign(elem) {
    document.getElementById(elem).scrollIntoView();
    document.getElementById("box-design").scrollTop -= 50;
}

function scrollsoftend(elem) {
    document.getElementById("box-software").scrollTop = 10000;
}

function scrolldesignend(elem) {
    document.getElementById("box-design").scrollTop = 10000;
}

