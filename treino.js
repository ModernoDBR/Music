const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    {
        path: 't1.mp3',
        displayName: 'Jesus',
        cover: 't1.JPG',
        artist: 'Tosukai',
    },
    {
        path: 't2.mp3',
        displayName: 'Mortals Funk Remix',
        cover: 't2.JPG',
        artist: 'LXNGVX & Warriyo',
    },
    {
        path: 't3.mp3',
        displayName: 'WARNING',
        cover: 't3.JPG',
        artist: 'MC ORSEN',
    },
    {
        path: 't4.mp3',
        displayName: 'Dead Inside',
        cover: 't4.JPG',
        artist: 'АДЛИН',
    },
    {
        path: 't5.mp3',
        displayName: 'Tak Tak Funk',
        cover: 't5.JPG',
        artist: 'chipbagov, SCARIONIX, IMMORTAL PLAYA',
    }
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    // Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    // Set button hover title
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    // Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Set button hover title
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

// more keyboard interactions
document.addEventListener('keydown', (event) => {
    switch(event.key){
    case 'k':
    togglePlay();
    }
    switch(event.key){
    case 'j':
    changeMusic(-1);
    }
    switch(event.key){
    case 'l':
    changeMusic(1);
    }
    
})

loadMusic(songs[musicIndex]);
