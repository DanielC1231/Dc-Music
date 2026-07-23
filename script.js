// ==========================================
// LISTA DE CANCIONES EN FLAC - URLs CORRECTAS
// ==========================================
const songs = [
  { 
    id: 1, 
    title: "Fanático del Full", 
    artist: "Darell, Baby Rasta & Nengo Flow",
    format: "FLAC",
    bitrate: "~950 kbps",
    src: "https://archive.org/download/05-la-llamada-feat.-darkiel-almighty-brytiago-bryant-myers-1/01%20-%20Fan%C3%A1tico%20del%20Full%20%28feat.%20Darell%2C%20Baby%20Rasta%20%26%20%C3%91engo%20Flow%29%20%281%29.flac"
  },
  { 
    id: 2, 
    title: "Cuatro Babys", 
    artist: "Trap Capos, Noriel, Bryant Myers & Juhn",
    format: "FLAC",
    bitrate: "~950 kbps",
    src: "https://archive.org/download/05-la-llamada-feat.-darkiel-almighty-brytiago-bryant-myers-1/02%20-%20Cuatro%20Babys%20%28feat.%20Trap%20Capos%2C%20Noriel%2C%20Bryant%20Myers%20%26%20Juhn%29%20%281%29.flac"
  },
  { 
    id: 3, 
    title: "Diablita", 
    artist: "Anuel AA & Baby Rasta",
    format: "FLAC",
    bitrate: "~950 kbps",
    src: "https://archive.org/download/05-la-llamada-feat.-darkiel-almighty-brytiago-bryant-myers-1/03%20-%20Diablita%20%28feat.%20Anuel%20AA%20%26%20Baby%20Rasta%29%20%281%29.flac"
  },
  { 
    id: 4, 
    title: "Amigos y Enemigos", 
    artist: "Trap Latino",
    format: "FLAC",
    bitrate: "~950 kbps",
    src: "https://archive.org/download/05-la-llamada-feat.-darkiel-almighty-brytiago-bryant-myers-1/04%20-%20Amigos%20y%20Enemigos.flac"
  },
  { 
    id: 5, 
    title: "La Llamada", 
    artist: "Darkiel, Almighty, Brytiago & Bryant Myers",
    format: "FLAC",
    bitrate: "~950 kbps",
    src: "https://archive.org/download/05-la-llamada-feat.-darkiel-almighty-brytiago-bryant-myers-1/05%20-%20La%20Llamada%20%28feat.%20Darkiel%2C%20Almighty%2C%20Brytiago%20%26%20Bryant%20Myers%29%20%281%29.flac"
  },
  { 
    id: 6, 
    title: "Quieres Enamorarme", 
    artist: "Bryant Myers, Juhn & Baby Rasta",
    format: "FLAC",
    bitrate: "~950 kbps",
    src: "https://archive.org/download/05-la-llamada-feat.-darkiel-almighty-brytiago-bryant-myers-1/06%20-%20Quieres%20Enamorarme%20%28feat.%20Bryant%20Myers%2C%20Juhn%20%26%20Baby%20Rasta%29%20%281%29.flac"
  },
  { 
    id: 7, 
    title: "Me Pelea", 
    artist: "Baby Rasta, Lito Kirino, Miky Woodz, Juhn & Jochy",
    format: "FLAC",
    bitrate: "~950 kbps",
    src: "https://archive.org/download/05-la-llamada-feat.-darkiel-almighty-brytiago-bryant-myers-1/07%20-%20Me%20Pelea%20%28feat.%20Baby%20Rasta%2C%20Lito%20Kirino%2C%20Miky%20Woodz%2C%20Juhn%20%26%20Jochy%29.flac"
  },
  { 
    id: 8, 
    title: "Como Glopeta", 
    artist: "Gigolo y La Exce, Miky Woodz, Juhn & Baby Angel",
    format: "FLAC",
    bitrate: "~950 kbps",
    src: "https://archive.org/download/05-la-llamada-feat.-darkiel-almighty-brytiago-bryant-myers-1/08%20-%20Como%20Glopeta%20%28feat.%20Gigolo%20y%20La%20Exce%2C%20Miky%20Woodz%2C%20Juhn%20%26%20Baby%20Angel%29.flac"
  },
  { 
    id: 9, 
    title: "La Paso Cabrón", 
    artist: "Gigolo y La Exce, Falsetto y Sammy, Mike Duran & Baby Angel",
    format: "FLAC",
    bitrate: "~950 kbps",
    src: "https://archive.org/download/05-la-llamada-feat.-darkiel-almighty-brytiago-bryant-myers-1/09%20-%20La%20Paso%20Cabr%C3%B3n%20%28feat.%20Gigolo%20y%20La%20Exce%2C%20Falsetto%20y%20Sammy%2C%20Mike%20Duran%20%26%20Baby%20Angel%29.flac"
  },
  { 
    id: 10, 
    title: "Plo Plo", 
    artist: "Baby Rasta, Juanika, Nengo Flow & Pacho",
    format: "FLAC",
    bitrate: "~950 kbps",
    src: "https://archive.org/download/05-la-llamada-feat.-darkiel-almighty-brytiago-bryant-myers-1/10%20-%20Plo%20Plo%20%28feat.%20Baby%20Rasta%2C%20Juanka%2C%20%C3%91engo%20Flow%20%26%20Pacho%29%20%281%29.flac"
  }
];

// ==========================================
// CONFIGURACIÓN DE CACHÉ
// ==========================================
const CACHE_NAME = 'dc-music-flac-cache-v1';
let downloadedSongs = [];

function loadDownloadedSongs() {
    try {
        const saved = localStorage.getItem('downloadedSongs');
        if (saved) downloadedSongs = JSON.parse(saved);
    } catch (e) {
        downloadedSongs = [];
    }
}

function saveDownloadedSongs() {
    localStorage.setItem('downloadedSongs', JSON.stringify(downloadedSongs));
}

function isSongDownloaded(songId) {
    return downloadedSongs.includes(songId);
}

// ==========================================
// SALUDO DINÁMICO (sin FLAC)
// ==========================================
function getGreeting() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) return "Buenos Días";
    if (hour >= 12 && hour < 18) return "Buenas Tardes";
    if (hour >= 18 && hour < 22) return "Buenas Noches";
    return "Buenas Noches";
}

// ==========================================
// ELEMENTOS DOM
// ==========================================
const songList = document.getElementById('songList');
const audio = new Audio();
let currentIndex = 0;
const playBtn = document.getElementById('playBtn');
const progress = document.getElementById('progress');
const currentTimeDisplay = document.getElementById('currentTime');
const totalTimeDisplay = document.getElementById('totalTime');
const songCounter = document.getElementById('songCounter');
let currentSection = 'inicio';

// ==========================================
// FUNCIONES PRINCIPALES
// ==========================================
function renderSongs(songsToDisplay, section = 'inicio') {
    songList.innerHTML = "";
    
    if (songsToDisplay.length === 0) {
        songList.innerHTML = `<p style="color: #b3b3b3; text-align: center; padding: 40px; font-size: 16px;">
            ${section === 'descargas' ? '📭 No tienes canciones descargadas aún' : '🎵 No hay canciones disponibles'}
        </p>`;
        songCounter.textContent = '0 canciones';
        return;
    }

    // Contador sin FLAC
    songCounter.textContent = `${songsToDisplay.length} canciones`;

    songsToDisplay.forEach((song, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        
        if (isSongDownloaded(song.id)) {
            card.classList.add('descargada');
        }
        
        if (song.id === songs[currentIndex]?.id && audio.src !== "") {
            card.classList.add('playing');
        }
        
        card.innerHTML = `
            <h4>${song.title}</h4>
            <p>${song.artist}</p>
            <span style="font-size: 10px; color: #1DB954; display: block; margin-top: 4px;">
                ${song.format} • ${song.bitrate}
            </span>
        `;
        
        card.onclick = () => {
            const realIndex = songs.findIndex(s => s.id === song.id);
            if (realIndex !== -1) {
                loadAndPlay(realIndex);
            }
        };
        
        songList.appendChild(card);
    });
}

// ==========================================
// DESCARGA Y CACHÉ
// ==========================================
async function downloadCurrentSong() {
    if (audio.src === "") {
        alert("Primero selecciona una canción para descargar.");
        return;
    }

    const song = songs[currentIndex];
    
    if (isSongDownloaded(song.id)) {
        if (confirm(`¿Quieres eliminar "${song.title}" de tus descargas?`)) {
            try {
                const cache = await caches.open(CACHE_NAME);
                await cache.delete(song.src);
                downloadedSongs = downloadedSongs.filter(id => id !== song.id);
                saveDownloadedSongs();
                
                const available = getFilteredSongs();
                renderSongs(available, currentSection);
                alert(`"${song.title}" eliminada de descargas.`);
            } catch (error) {
                console.error('Error al eliminar:', error);
                alert('Error al eliminar la canción del caché.');
            }
        }
        return;
    }

    try {
        const response = await fetch(song.src);
        if (!response.ok) throw new Error('Error al descargar');
        
        const blob = await response.blob();
        const cache = await caches.open(CACHE_NAME);
        await cache.put(song.src, new Response(blob));
        
        downloadedSongs.push(song.id);
        saveDownloadedSongs();
        
        const available = getFilteredSongs();
        renderSongs(available, currentSection);
        alert(`✅ "${song.title}" descargada en ${song.format}.`);
    } catch (error) {
        console.error('Error al descargar:', error);
        alert('❌ Error al descargar la canción. Inténtalo de nuevo.');
    }
}

function getFilteredSongs() {
    if (currentSection === 'descargas') {
        return songs.filter(song => downloadedSongs.includes(song.id));
    }
    return songs;
}

// ==========================================
// NAVEGACIÓN (sin FLAC en el título)
// ==========================================
function changeSection(section) {
    currentSection = section;
    const title = document.getElementById('sectionTitle');
    
    document.querySelectorAll('.menu li').forEach(li => li.classList.remove('active'));
    
    if (section === 'inicio') {
        document.getElementById('menu-inicio').classList.add('active');
        title.innerText = getGreeting();
        renderSongs(songs, 'inicio');
    } else if (section === 'descargas') {
        document.getElementById('menu-descargas').classList.add('active');
        title.innerText = "📥 Tus Descargas";
        const downloaded = getFilteredSongs();
        renderSongs(downloaded, 'descargas');
    }
}

// ==========================================
// CONTROLES DEL REPRODUCTOR
// ==========================================
function loadAndPlay(index) {
    const song = songs[index];
    if (!song) return;
    
    currentIndex = index;
    progress.value = 0;
    audio.currentTime = 0;
    currentTimeDisplay.textContent = '0:00';
    
    audio.src = song.src;
    document.getElementById('currentTitle').innerText = song.title;
    document.getElementById('currentArtist').innerText = song.artist;
    
    const available = getFilteredSongs();
    renderSongs(available, currentSection);
    
    audio.load();
    audio.play().then(() => {
        playBtn.innerText = "⏸";
    }).catch(e => {
        console.log("Esperando interacción del usuario");
        playBtn.innerText = "▶";
    });
}

function playSong() {
    if (audio.src === "") {
        const available = getFilteredSongs();
        if (available.length > 0) {
            const firstSong = available[0];
            const realIndex = songs.findIndex(s => s.id === firstSong.id);
            loadAndPlay(realIndex);
        }
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
    const available = getFilteredSongs();
    if (available.length === 0) return;
    
    const currentId = songs[currentIndex].id;
    const currentFilteredIndex = available.findIndex(s => s.id === currentId);
    const nextFilteredIndex = (currentFilteredIndex + 1) % available.length;
    const realIndex = songs.findIndex(s => s.id === available[nextFilteredIndex].id);
    loadAndPlay(realIndex);
}

function prevSong() {
    const available = getFilteredSongs();
    if (available.length === 0) return;
    
    const currentId = songs[currentIndex].id;
    const currentFilteredIndex = available.findIndex(s => s.id === currentId);
    const prevFilteredIndex = (currentFilteredIndex - 1 + available.length) % available.length;
    const realIndex = songs.findIndex(s => s.id === available[prevFilteredIndex].id);
    loadAndPlay(realIndex);
}

// ==========================================
// PROGRESO Y TIEMPO
// ==========================================
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        const percent = (audio.currentTime / audio.duration) * 100;
        progress.value = percent;
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
        totalTimeDisplay.textContent = formatTime(audio.duration);
    }
});

audio.addEventListener('loadedmetadata', () => {
    progress.value = 0;
    currentTimeDisplay.textContent = '0:00';
    totalTimeDisplay.textContent = formatTime(audio.duration);
});

progress.addEventListener('input', () => {
    if (audio.duration) {
        audio.currentTime = (progress.value / 100) * audio.duration;
    }
});

// ==========================================
// INICIALIZACIÓN
// ==========================================
loadDownloadedSongs();

// Título sin FLAC
document.getElementById('sectionTitle').innerText = getGreeting();

if (songs.length > 0) {
    renderSongs(songs, 'inicio');
    songCounter.textContent = `${songs.length} canciones`;
} else {
    songList.innerHTML = "<p>No hay canciones configuradas.</p>";
    songCounter.textContent = '0 canciones';
}

console.log(`🎵 DC Music cargado - ${songs.length} canciones en FLAC`);
console.log(`📥 ${downloadedSongs.length} canciones descargadas`);