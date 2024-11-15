console.log("Welcome to Spotify");

// Variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    { songName: "The Avengers", filePath: "songs/1.mp3", coverPath: "cover1.jpg" },
    { songName: "The Witcher", filePath: "songs/2.mp3", coverPath: "cover2.jpg" },
    // Add more songs here...
];

// Display songs in the list
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Master play/pause toggle
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        togglePlayButton(masterPlay, true);
        gif.style.display = "block";
    } else {
        audioElement.pause();
        togglePlayButton(masterPlay, false);
        gif.style.display = "none";
    }
});

// Update progress bar on time update
audioElement.addEventListener("timeupdate", () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Seek on progress bar change
myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

// Helper function to reset all play icons
const resetPlayIcons = () => {
    document.querySelectorAll(".songItemPlay").forEach((el) => {
        togglePlayButton(el, false);
    });
};

// Update song details and play
const playSong = (index) => {
    resetPlayIcons();
    audioElement.src = songs[index].filePath;
    masterSongName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    togglePlayButton(masterPlay, true);
    gif.style.display = "block";
};

// Toggle play/pause button icons
const togglePlayButton = (button, isPlaying) => {
    button.classList.remove("fa-play-circle", "fa-pause-circle");
    button.classList.add(isPlaying ? "fa-pause-circle" : "fa-play-circle");
};

// Song list play button events
songItems.forEach((item, i) => {
    item.addEventListener("click", () => {
        songIndex = i;
        playSong(songIndex);
    });
});

// Next and previous button events
document.getElementById("next").addEventListener("click", () => {
    songIndex = (songIndex + 1) % songs.length;
    playSong(songIndex);
});

document.getElementById("previous").addEventListener("click", () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    playSong(songIndex);
});
