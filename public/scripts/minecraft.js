/*
* Minecraft.js: script used for minecraft.html
* Controls background music
*/

const audio = document.getElementById('bg-music');
const button = document.getElementById('playPauseBtn')

document.addEventListener("DOMContentLoaded", () => {
    audio.volume= 0.1;
});


function togglePlayPause() {
    // Check if the audio is paused or has ended
    if (audio.paused || audio.ended) {
        audio.play();
        button.style.opacity = 1;
    } else {
        audio.pause();
        button.style.opacity = 0.5;
    }
}