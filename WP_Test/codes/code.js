var counter = 1;
var countSlider = 1;
var blogCounter = 1;

function dispnavBar() {
    counter = counter + 1;
    if (counter % 2 == 1) {
        document.getElementById('mobileNavBar').style.display = "block";
    }
    else if (counter % 2 == 0) {
        document.getElementById('mobileNavBar').style.display = "none";
    }
}


function HideUpdates() {
    document.getElementById('newupdates').style.display = "none";
}

function nextSlide() {
    countSlider = countSlider + 1;
    if (countSlider == 1) {
        document.getElementById('container1').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });

    }
    else if (countSlider == 2) {
        document.getElementById('container2').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
    else if (countSlider == 3) {
        document.getElementById('container3').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
    else if (countSlider == 4) {
        document.getElementById('container4').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
    else if (countSlider > 4 || countSlider < 0) {
        countSlider = 1;
        document.getElementById('container1').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
    console.log(countSlider);

}


function preSlide() {
    countSlider = countSlider - 1;
    if (countSlider == 1) {
        document.getElementById('container1').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
    else if (countSlider == 2) {
        document.getElementById('container2').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
    else if (countSlider == 3) {
        document.getElementById('container3').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
    else if (countSlider == 4) {
        document.getElementById('container4').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
    else if (countSlider > 4 || countSlider < 0) {
        countSlider = 1;
        document.getElementById('container1').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
}

function closePopUp() {
    document.getElementById('bluredback').style.display = "none";

    document.getElementById('popup').style.display = "none";

    let containerElement = document.getElementById('popup');
    let iframe_tag = containerElement.querySelector('iframe');
    let video_tag = containerElement.querySelector('video');
    if (iframe_tag) {
        let iframeSrc = iframe_tag.src;
        iframe_tag.src = iframeSrc;
    }
    if (video_tag) {
        video_tag.pause();
    }


}
function ShowPopUp() {
    document.getElementById('bluredback').style.display = "block";

    document.getElementById('popup').style.display = "block";

}
function blognextSlide() {
    blogCounter = blogCounter + 1;
    if (blogCounter == 1) {
        document.getElementById('blogcounter5').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });;
        document.getElementById('boxes1').style.backgroundColor = "rgba(255, 255, 255, 0.425)";
        document.getElementById('boxes2').style.backgroundColor = "white";
    }
    else if (blogCounter == 2) {
        document.getElementById('blogcounter8').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        document.getElementById('boxes1').style.backgroundColor = "rgba(255, 255, 255, 0.425)";
        document.getElementById('boxes2').style.backgroundColor = "white";


    }
    else if (blogCounter > 2 || blogCounter < 1) {
        blogCounter = 1;
        document.getElementById('boxes1').style.backgroundColor = "white";
        document.getElementById('boxes2').style.backgroundColor = "rgba(255, 255, 255, 0.425)";
        document.getElementById('boxes3').style.backgroundColor = "rgba(255, 255, 255, 0.425)";
        document.getElementById('blogcounter2').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }

}
function blogpreSlide() {

    blogCounter = 1;
    document.getElementById('blogcounter1').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    document.getElementById('boxes1').style.backgroundColor = "white";
    document.getElementById('boxes2').style.backgroundColor = "rgba(255, 255, 255, 0.425)";
    document.getElementById('boxes3').style.backgroundColor = "rgba(255, 255, 255, 0.425)";

}