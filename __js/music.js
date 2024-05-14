
let songList = [
    '/__assets/audio/Lovely Bastards X Meet The Frownies - Xenoner.mp3',
    '/__assets/audio/I WANNA BE YOUR SLAVE - Maneskin.mp3',
    '/__assets/audio/Annihilate - Metro Boomin.mp3',
    '/__assets/audio/Revenge - xxxtentacion.mp3',
    '/__assets/audio/The Hills - The Weeknd.mp3',
];
let currentSongIndex = Math.floor(Math.random() * songList.length);
const audioPlayer = document.getElementById('audioPlayer');
const playPauseButton = document.getElementById('playPause');
const nowPlayingText = document.getElementById('nowPlayingText');
const playPauseIcon = document.getElementById('playPauseIcon');

function loadSong(songIndex) {
    const songPath = songList[songIndex];
    const songName = songPath.split('/').pop().split('.').shift().replace(/_/g, ' ');
    nowPlayingText.textContent = `Now Playing - ${songName}`;
    audioPlayer.src = songList[songIndex];
    audioPlayer.load();
    console.log(`Started playing "${songName}" - [index ${songIndex}]`)
}

function togglePlayPause() {
    if (audioPlayer.paused || audioPlayer.ended) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (audioPlayer.paused) {
        playPauseIcon.src = '/__assets/images/play.svg';
    } else {
        playPauseIcon.src = '/__assets/images/pause.svg';
    }
}

document.getElementById('prev').addEventListener('click', function () {
    currentSongIndex = (currentSongIndex - 1 + songList.length) % songList.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
    updatePlayPauseIcon();
});

document.getElementById('next').addEventListener('click', function () {
    currentSongIndex = (currentSongIndex + 1) % songList.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
    updatePlayPauseIcon();
});

audioPlayer.addEventListener('ended', function () {
    currentSongIndex = (currentSongIndex + 1) % songList.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
    updatePlayPauseIcon();
});

playPauseButton.addEventListener('click', togglePlayPause);
