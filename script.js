console.log("Welcome to Spotify");
//Initialize the Variables
let songIndex=0;
let audioElement= new Audio('\song\\1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let masterSongName= document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName: "Let Me Love You", filePath: "F:\\Music Spotify\\song\\1.mp3", coverPath: "F:\\Music Spotify\\cover\\cover1.jpg"},
    {songName: "Attention", filePath: "F:\\Music Spotify\\song\\2.mp3", coverPath: "F:\\Music Spotify\\cover\\cover2.jpg"},
    {songName: "Saudebazi", filePath: "F:\\Music Spotify\\song\\3.mp3", coverPath: "F:\\Music Spotify\\cover\\cover3.jpg"},
    {songName: "Rasiya", filePath: "F:\\Music Spotify\\song\\4.mp3", coverPath: "F:\\Music Spotify\\cover\\cover4.jpg"},
    {songName: "Ye vada raha ", filePath: "F:\\Music Spotify\\song\\5.mp3", coverPath: "F:\\Music Spotify\\cover\\cover5.jpg"},
    {songName: "Ghungroo", filePath: "F:\\Music Spotify\\song\\6.mp3", coverPath: "F:\\Music Spotify\\cover\\cover6.jpg"},
    {songName: "Bulleya", filePath: "F:\\Music Spotify\\song\\7.mp3", coverPath: "F:\\Music Spotify\\cover\\cover7.jpg"},
    {songName: "Malang Sajana", filePath: "F:\\Music Spotify\\song\\8.mp3", coverPath: "F:\\Music Spotify\\cover\\cover8.jpg"},
     {songName: "Challeya", filePath: "F:\\Music Spotify\\song\\9.mp3", coverPath: "F:\\Music Spotify\\cover\\cover9.jpg"},
    {songName: "Aabhas Ha", filePath: "F:\\Music Spotify\\song\\10.mp3", coverPath: "F:\\Music Spotify\\cover\\cover10.jpg"}

]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//AudioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value= progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause');
        audioElement.src=`song/${songIndex+1}.mp3`;
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause');
})