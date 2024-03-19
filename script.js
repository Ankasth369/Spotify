console.log("Welcome to Spotify");

// Initialize the variables
var songIndex = 1;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
var songItems = Array.from(document.getElementsByClassName("songItem"));
var prevAudioElement;

let songs = [
    { songName: "Mortals", songPath: "songs/1.mp3", songCover: "covers/1.jpg" },
    { songName: "Cielo - Huma-Huma", songPath: "songs/2.mp3", songCover: "covers/2.jpg" },
    { songName: "DEAF KEV - Invincible", songPath: "songs/3.mp3", songCover: "covers/3.jpg" },
    { songName: "My Heart", songPath: "songs/4.mp3", songCover: "covers/4.jpg" },
    { songName: "Janji-Heroes-Tonight-feat-Jonning", songPath: "songs/5.mp3", songCover: "covers/5.jpg" },
    { songName: "Janji", songPath: "songs/6.mp3", songCover: "covers/6.jpg" },
    { songName: "Na ja tu", songPath: "songs/7.mp3", songCover: "covers/7.jpg" },
    { songName: "Salaam-e-Ishq", songPath: "songs/8.mp3", songCover: "covers/8.jpg" },
    { songName: "Janji-Heroes", songPath: "songs/9.mp3", songCover: "covers/9.jpg" },
    { songName: "Tum Mile", songPath: "songs/10.mp3", songCover: "covers/10.jpg" }
]

songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].songCover;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
        
        
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
        
    }
})


// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        prevAudioElement = audioElement.src;
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex - 1].songName;
        if (audioElement.paused ) {
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-pause-circle");
            gif.style.opacity = 1;
            audioElement.play();
            masterPlay.classList.remove("fa-play-circle");
            masterPlay.classList.add("fa-pause-circle");
        } 
        else if (audioElement.played && prevAudioElement != audioElement.src) {
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-pause-circle");
            gif.style.opacity = 1;
            audioElement.play();
            masterPlay.classList.remove("fa-play-circle");
            masterPlay.classList.add("fa-pause-circle");
        }
        else  {
            e.target.classList.remove("fa-pause-circle");
            e.target.classList.add("fa-play-circle");
            gif.style.opacity = 0;
            audioElement.pause();
            masterPlay.classList.remove("fa-pause-circle");
            masterPlay.classList.add("fa-play-circle");
        }

    })
})





previous.addEventListener('click', () => {
    if (songIndex == 0) {
        songIndex = 10;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
})

next.addEventListener('click', () => {
    if (songIndex == 10) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
})
