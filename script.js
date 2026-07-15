// 1. TU ENLACE BASE DE ARCHIVE.ORG
const urlBase = "https://archive.org";

// 2. TUS CANCIONES DE LA COLECCIÓN
// Pon aquí los nombres EXACTOS de tus archivos .mp3 (tal como los subiste a Archive)
const nombresArchivos = [
    "De las 2",
    "Ella y Yo (Remix)",
    "Diles (Remix)",
    "Me Acostumbre"
    // Cuando subas las otras 46 canciones, solo pon el nombre entre comillas separado por una coma
];

// 3. PROCESADOR AUTOMÁTICO (Convierte tus nombres en enlaces reales)
const allSongs = nombresArchivos.map(nombre => {
    return {
        title: nombre.replace(/_/g, " "), // Cambia guiones bajos por espacios para que se vea bonito
        artist: "Trap Latino",
        src: urlBase + encodeURIComponent(nombre) + ".mp3" // Crea el enlace directo funcional
    };
});

const songList = document.getElementById('songList');
const audio = new Audio();
let currentIndex = 0;
const playBtn = document.getElementById('playBtn');
const progress = document.getElementById('progress');

// Inicializar la interfaz pintando tus canciones
if (allSongs.length > 0) {
    renderSongs(allSongs);
} else {
    songList.innerHTML = "<p>No hay canciones configuradas.</p>";
}

// 4. MOSTRAR CANCIONES EN LA INTERFAZ
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

// 5. INTERACCIÓN DEL MENÚ LATERAL
function changeSection(section) {
    const title = document.getElementById('sectionTitle');
    document.getElementById('menu-inicio').classList.remove('active');
    document.getElementById('menu-biblioteca').classList.remove('active');

    if (section === 'inicio') {
        document.getElementById('menu-inicio').classList.add('active');
        title.innerText = "Buenos Días";
        renderSongs(allSongs); 
    } else if (section === 'biblioteca') {
        document.getElementById('menu-biblioteca').classList.add('active');
        title.innerText = "Tu Biblioteca (Colección Completa)";
        renderSongs(allSongs); 
    }
}

// 6. CONTROLES DEL REPRODUCTOR
function loadAndPlay(index) {
    currentIndex = index;
    audio.src = allSongs[currentIndex].src;
    document.getElementById('currentTitle').innerText = allSongs[currentIndex].title;
    document.getElementById('currentArtist').innerText = allSongs[currentIndex].artist;
    audio.play();
    playBtn.innerText = "⏸";
}

function playSong() {
    if (audio.src === "") {
        if(allSongs.length > 0) loadAndPlay(0);
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
    currentIndex = (currentIndex + 1) % allSongs.length;
    loadAndPlay(currentIndex);
}

function prevSong() {
    currentIndex = (currentIndex - 1 + allSongs.length) % allSongs.length;
    loadAndPlay(currentIndex);
}

// 7. BARRA DE PROGRESO INTERACTIVA
audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        progress.value = (audio.currentTime / audio.duration) * 100;
    }
});

progress.addEventListener('input', () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

// 8. DESCARGAR LA CANCIÓN EN REPRODUCCIÓN
function downloadCurrentSong() {
    if (audio.src === "") {
        alert("Primero selecciona una canción para poder descargarla.");
        return;
    }
    const link = document.createElement('a');
    link.href = allSongs[currentIndex].src;
    link.download = `${allSongs[currentIndex].title}.mp3`;
    link.target = "_blank"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
