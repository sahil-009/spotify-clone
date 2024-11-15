// // Handle play/pause click
// masterPlay.addEventListener("click", () => {
//   if (audioElement.paused || audioElement.currentTime <= 0) {
//     audioElement.play();
//     masterPlay.classList.remove("fa-play-circle");
//     masterPlay.classList.add("fa-pause-circle");
//     gif.style.opacity = 1;
//   } else {
//     audioElement.pause();
//     masterPlay.classList.remove("fa-pause-circle");
//     masterPlay.classList.add("fa-play-circle");
//     gif.style.opacity = 0;
//   }
// }

function handlePlayPause(playButton, audio, gifElement) {
  if (audio.paused || audio.currentTime <= 0) {
    audio.play();
    playButton.classList.remove("fa-play-circle");
    playButton.classList.add("fa-pause-circle");
    gifElement.style.opacity = 1;
  } else {
    audio.pause();
    playButton.classList.remove("fa-pause-circle");
    playButton.classList.add("fa-play-circle");
    gifElement.style.opacity = 0;
  }
}

// Usage example:
masterPlay.addEventListener("click", () => {
  handlePlayPause(masterPlay, audioElement, gif);
});