// Function for burger button
function myFunction(x) {
    x.classList.toggle("cross");

    var y = document.getElementById("menu__body-burger");

    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}

// Add active class to the current nav links (highlight it)
var header = document.getElementById("menu__list--active");
var btns = header.getElementsByClassName("menu__item");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// Video script video
var myVideo = document.getElementById("video__self-tag");
var videoButton = document.getElementById("video__play-btn");
var videoImg = document.getElementById("video__img");

function playPause() { 
    if(myVideo.paused) {
        myVideo.play();
        videoImg.style.display = "none"
    }
    else { 
      myVideo.pause();
      videoImg.style.display = "block"
    }
}

function showBtn() {
    if(!myVideo.paused || myVideo.paused) {
        videoButton.style.display = "block";
    }
}
function notShowBtn() {
    if(!myVideo.paused) {
        videoButton.style.display = "none"
    }
}