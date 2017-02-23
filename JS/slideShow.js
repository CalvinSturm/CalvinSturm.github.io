var index = 0;
var imgArray = Array();
//preloads captions in a global array
var capArray = ["1", "2", "3", "4", "5", "6"];
var timeout;
var slideCount = 1;
//loads images from a directory
function loadPictures() {
    for (var i = 0; i <= 5; i++) {
        imgArray[i] = new Image;
        imgArray[i].src = "images/" + i + ".gif";

    }
    startSlide();
    return;
}
//Makes the next slide button go to the next image and caption in the arrays
function nextSlide() {
    stopSlide();
    indexUp();
    getElements();
    return;
}
//same as nextSlide() except it decrements the arrays
function prevSlide() {
    stopSlide();
    if(index == 0) {
        index = 5;
    }
    else {
        index--;
    }
    slideCount = index + 1;
    getElements();
    return;
}
//Starts the slide show
function startSlide() {
    stopSlide();
    timeout = setTimeout("startSlide()", 4000);    
    getElements();
    indexUp();
    return;
}
//incerments the index
function indexUp() {
    if(index == 5) {
        index = 0;
    }
    else {
        index++;
    }

    slideCount = index + 1;
}

function getElements() {
    document.getElementById("count").innerHTML = "Slide: " + slideCount; 
    document.getElementById("caption").innerHTML = capArray[index];
    document.slideShow.src = imgArray[index].src;
    return;
}
//stops the slide show
function stopSlide() {
    clearTimeout(timeout);
    return;
}
