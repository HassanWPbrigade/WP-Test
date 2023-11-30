var counter = 0;


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