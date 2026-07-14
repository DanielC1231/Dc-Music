// Agrega aquí todas las canciones que quieras de Archive.org
const songs = [
  {
    title: "Trap Latino",
    artist: "Artista 1",
    src: "https://archive.org/download/Trap-Latino_202607/De%20las%202.mp3" 
  },
  {
    title: "Mi Canción Favorita 2",
    artist: "Artista 2",
    src: "AQUÍ_PEGA_TU_ENLACE_DE_ARCHIVE_2.mp3"
  }
];

const songList = document.getElementById('songList');
const audio = new Audio();
let currentIndex = 0;
const playBtn = document.getElementById('playBtn');
const progress = document.getElementById('progress');

// Crear tarjetas de canciones
songs.forEach((song, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h4>${song.title}</h4>
        <p style="color: #b3b3b3; font-size: 14px;">${song.artist}</p>
    `;
    card.onclick = () => loadAndPlay(index);
    songList.appendChild(card);
});

function loadAndPlay(index) {
    currentIndex = index;
    audio.src = songs[currentIndex].src;
    document.getElementById('currentTitle').innerText = songs[currentIndex].title;
    document.getElementById('currentArtist').innerText = songs[currentIndex].artist;
    audio.play();
    playBtn.innerText = "⏸";
}

function playSong() {
    if (audio.src === "") {
        loadAndPlay(0);
        return;
    }
    if (audio.paused) {
        audio.play();
        playBtn.innerText = "⏸";
    } else {
        audio.pause();
        playBtn.innerText = "▶";
    }
}

function nextSong() {
    currentIndex = (currentIndex + 1) % songs.length;
    loadAndPlay(currentIndex);
}

function prevSong() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadAndPlay(currentIndex);
}

audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        progress.value = (audio.currentTime / audio.duration) * 100;
    }
});

progress.addEventListener('input', () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});
