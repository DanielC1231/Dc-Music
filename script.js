// 1. Enlace base de descarga de tus archivos
const urlBase = "https://archive.org";

// 2. Lista ordenada con los nombres EXACTOS del servidor (arregla el audio)
const songs = [
  {
    title: "De las 2",
    artist: "Trap Latino",
    src: urlBase + "De%20las%202%20.mp3" // Notarás que tiene un espacio extra al final (%20)
  },
  {
    title: "Diles",
    artist: "Trap Latino",
    src: urlBase + "Diles.mp3"
  },
  {
    title: "Me Acostumbré",
    artist: "Trap Latino (feat. Bad Bunny)",
    src: urlBase + "Me%20Acostumbre%20%28feat.%20Bad%20Bunny%29.mp3"
  },
  {
    title: "Ahora Me Llama",
    artist: "Trap Latino",
    src: urlBase + "Ahora%20Me%20Llama.mp3"
  },
  {
    title: "Krippy Kush",
    artist: "Trap Latino",
    src: urlBase + "Krippy%20Kush.mp3"
  },
  {
    title: "La Ocasión",
    artist: "Trap Latino",
    src: urlBase + "La%20Occas%20i%C3%B3n.mp3"
  },
  {
    title: "Loca (Remix)",
    artist: "Trap Latino",
    src: urlBase + "Loca%20Remix.mp3"
  },
  {
    title: "Si Tú Novio Te Deja Sola",
    artist: "Trap Latino",
    src: urlBase + "Si%20Tu%20Novio%20Te%20Deja%20Sola.mp3"
  },
  {
    title: "Tú No Vive Así",
    artist: "Trap Latino (feat. Arcángel)",
    src: urlBase + "Tu%20No%20Vive%20Asi%20%28feat.%20Mambo%20Kingz%20%26%20DJ%20Luian%29.mp3"
  },
  {
    title: "Soy Peor (7D)",
    artist: "Trap Latino",
    src: urlBase + "7D.mp3"
  }
];

const songList = document.getElementById('songList');
const audio = new Audio();
let currentIndex = 0;
const playBtn = document.getElementById('playBtn');
const progress = document.getElementById('progress');

// Iniciar app pintando canciones
if (songs.length > 0) {
    renderSongs(songs);
} else {
    songList.innerHTML = "<p>No hay canciones configuradas.</p>";
}

function renderSongs(songsToDisplay) {
    songList.innerHTML = "";
    songsToDisplay.forEach((song, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h4>${song.title}</h4>
            <p style="color: #b3b3b3; font-size: 14px;">${song.artist}</p>
        `;
        card.onclick = () => loadAndPlay(index);
        songList.appendChild(card);
    });
}

function changeSection(section) {
    const title = document.getElementById('sectionTitle');
    document.getElementById('menu-inicio').classList.remove('active');
    document.getElementById('menu-biblioteca').classList.remove('active');

    if (section === 'inicio') {
        document.getElementById('menu-inicio').classList.add('active');
        title.innerText = "Buenos Días";
        renderSongs(songs); 
    } else if (section === 'biblioteca') {
        document.getElementById('menu-biblioteca').classList.add('active');
        title.innerText = "Tu Biblioteca";
        renderSongs(songs); 
    }
}

function loadAndPlay(index) {
    currentIndex = index;
    audio.src = songs[currentIndex].src;
    document.getElementById('currentTitle').innerText = songs[currentIndex].title;
    document.getElementById('currentArtist').innerText = songs[currentIndex].artist;
    
    // Forzar reproducción directa limpia
    audio.play();
    playBtn.innerText = "⏸";
}

function playSong() {
    if (audio.src === "") {
        if(songs.length > 0) loadAndPlay(0);
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

function downloadCurrentSong() {
    if (audio.src === "") {
        alert("Primero selecciona una canción para poder descargarla.");
        return;
    }
    const link = document.createElement('a');
    link.href = songs[currentIndex].src;
    link.download = `${songs[currentIndex].title}.mp3`;
    link.target = "_blank"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
