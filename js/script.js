const playBtn = document.getElementById("play");
const b5 = document.getElementById("b5");
const mute = document.getElementById("mute");
const pauseBtn = document.getElementById("pause");
const unmute = document.getElementById("unmute");
const volRange = document.getElementById("volume_slider");
const f5 = document.getElementById("f5");
const fullScreen = document.getElementById("fullScreen");
const video = document.getElementById("vid1");
const download = document.getElementById("download");
const downloaded = document.getElementById("downloaded");
const swap = document.getElementById("swap");

function play1(){
    video.play();
}
function pause1(){
    video.pause();
}

function fw5(){
    //get the current time
    let cTime = video.currentTime;
    //add 5sec 
    cTime += 5;
    //play from the new time
    video.currentTime = cTime; 
}
function bw5(){
    //get the current time
    let cTime = video.currentTime;
    //sub 5sec 
    cTime -= 5;
    //play from the new time
    video.currentTime = cTime; 
}
function mute1(){
    video.muted = true;
}
function unmute1(){
    video.muted = false;
}

function downloadedBtn(){
    //get the filepath
    let filepath = video.getAttribute('src');
    //update href value in <a> tag
    downloaded.setAttribute("href",filepath);
    //set that filepath into download attribute
    downloaded.setAttribute("download",filepath)
}
function swapQuality(){
    //get selected value
    let targetPath = this.value;
    console.log(targetPath);
    //get the current time
    cTime = video.currentTime;
    //change the file path video
    video.setAttribute("src",targetPath);
    //change the video to the current time
    video.currentTime = cTime;
    play1();
}
function fullScreenBtn(){
    video.requestFullscreen();
}
function volumeBtn(){
    //get range value
    let volumeInput = volRange.value;
    volumeInput /= 100;
    //apply to the value
    video.volume = volumeInput;
}

playBtn.addEventListener("click",play1);
pauseBtn.addEventListener("click",pause1);
b5.addEventListener("click",bw5);
mute.addEventListener("click",mute1);
f5.addEventListener("click",fw5);
unmute.addEventListener("click",unmute1);
download.addEventListener("click",downloadedBtn);
swap.addEventListener("click",swapQuality);
fullScreen.addEventListener("click",fullScreenBtn);
volRange.addEventListener("click",volumeBtn);


