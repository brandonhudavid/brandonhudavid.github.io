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

function select1(){
    document.getElementById("col1").onclick = function(){return false;}
    document.getElementById("col2").onclick = function(){return false;}
    document.getElementById("col3").onclick = function(){return false;}
    document.getElementById("col1").classList.add("slideIn")
    document.getElementById("col2").classList.add("slideLeft2")
    document.getElementById("col3").classList.add("slideLeft")
    document.getElementById("nav").classList.add("slideNav");
}

function select2(){
    document.getElementById("col1").onclick = function(){return false;}
    document.getElementById("col2").onclick = function(){return false;}
    document.getElementById("col3").onclick = function(){return false;}
    document.getElementById("col1").classList.add("slideLeft")
    document.getElementById("col2").classList.add("slideIn2")
    document.getElementById("col3").classList.add("slideLeft")
    document.getElementById("nav").classList.add("slideNav");
}

function select3(){
    document.getElementById("col1").onclick = function(){return false;}
    document.getElementById("col2").onclick = function(){return false;}
    document.getElementById("col3").onclick = function(){return false;}
    document.getElementById("col1").classList.add("slideLeft")
    document.getElementById("col2").classList.add("slideLeft2")
    document.getElementById("col3").classList.add("slideIn")
    document.getElementById("nav").classList.add("slideNav");
}