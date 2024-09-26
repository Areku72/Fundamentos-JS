console.log("page loaded...");

function playVideo(secundaryVideo){
    var mainVideo = document.getElementById("mainVideo");
    var temp = mainVideo.src;
    mainVideo.src = secundaryVideo.src;
    mainVideo.play();
    secundaryVideo.src = temp;
};

function pauseVideo(){
    var mainVideo = document.getElementById("mainVideo");
    var tempSrc = secundaryVideo.src;
    secundaryVideo.src = mainVideo.src;
    mainVideo.src = tempSrc;
    mainVideo.play();
};