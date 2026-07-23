// ==========================================
// DETECTAR ESTADO DE CONEXIÓN
// ==========================================
let isOnline = navigator.onLine;

window.addEventListener('online', () => {
    isOnline = true;
    console.log('🌐 Conexión restablecida');
    showNotification('🌐 Conexión restablecida', '#1DB954');
});

window.addEventListener('offline', () => {
    isOnline = false;
    console.log('📡 Sin conexión - Modo offline');
    showNotification('📡 Sin conexión - Modo offline', '#ff6b6b');
});

function showNotification(message, color = '#1DB954') {
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${color};
        color: #fff;
        padding: 10px 20px;
        border-radius: 8px;
        z-index: 9999;
        font-size: 14px;
        font-weight: bold;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    notif.textContent = message;
    document.body.appendChild(notif);
    
    setTimeout(() => { notif.style.opacity = '1'; }, 100);
    setTimeout(() => {
        notif.style.opacity = '0';
        setTimeout(() => notif.remove(), 500);
    }, 3000);
}

if (!isOnline) {
    setTimeout(() => {
        showNotification('📡 Sin conexión - Modo offline', '#ff6b6b');
    }, 1000);
} else {
    console.log('🌐 Conectado a internet');
}

// ==========================================
// LISTA DE CANCIONES EN FLAC
// ==========================================
const songs = [
  { 
    id: 1, 
    title: "Fanático del Full", 
    artist: "Darell, Baby Rasta & Nengo Flow",
    duration: 272,
    src: "https://archive.org/download/05-la-llamada-feat.-darkiel-almighty-brytiago-bryant-myers-1/01%20-%20Fan%C3%A1tico%20del%20Full%20%28feat.%20Darell%2C%20Baby%20Rasta%20%26%20%C3%91engo%20Flow%29%20%281%29.flac"
  },
  { 
    id: 2, 
    title: "Cuatro Babys", 
    artist: "Trap Capos, Noriel, Bryant Myers & Juhn",
    duration: 278,
    src: "https://archive.org/download/05-la-llamada-feat.-darkiel-almighty-brytiago-bryant-myers-1/02%20-%20Cuatro%20Babys%20%28feat.%20Trap%20Capos%2C%20Noriel%2C%20Bryant%20Myers%20%26%20Juhn%29%20%281%29.flac"
  },
  { 
    id: 3, 
    title: "Diablita", 
    artist: "Anuel AA & Baby Rasta",
    duration: 214,
    src: "https://archive.org/download/05-la-llamada-feat.-darkiel-almighty-brytiago-bryant-myers-1/03%20-%20Diablita%20%28feat.%20Anuel%20AA%20%26%20Baby%20Rasta%29%20%281%29.flac"
  },
  { 
    id: 4, 
    title: "Amigos y Enemigos", 
    artist: "Trap Latino",
    duration: 252,
    src: "https://archive.org/download/05-la-llamada-feat.-darkiel-almighty-brytiago-bryant-myers-1/04%20-%20Amigos%20y%20Enemigos.flac"
  },
  { 
    id: 5, 
    title: "La Llamada", 
    artist: "Darkiel, Almighty, Brytiago & Bryant Myers",
    duration: 369,
    src: "https://archive.org/download/05-la-llamada-feat.-darkiel-almighty-brytiago-bryant-myers-1/05%20-%20La%20Llamada%20%28feat.%20Darkiel%2C%20Almighty%2C%20Brytiago%20%26%20Bryant%20Myers%29%20%281%29.flac"
  },
  { 
    id: 6, 
    title: "Quieres Enamorarme", 
    artist: "Bryant Myers, Juhn & Baby Rasta",
    duration: 258,
    src: "https://archive.org/download/05-la-llamada-feat.-darkiel-almighty-brytiago-bryant-myers-1/06%20-%20Quieres%20Enamorarme%20%28feat.%20Bryant%20Myers%2C%20Juhn%20%26%20Baby%20Rasta%29%20%281%29.flac"
  },
  { 
    id: 7, 
    title: "Me Pelea", 
    artist: "Baby Rasta, Lito Kirino, Miky Woodz, Juhn & Jochy",
    duration: 274,
    src: "https://archive.org/download/05-la-llamada-feat.-darkiel-almighty-brytiago-bryant-myers-1/07%20-%20Me%20Pelea%20%28feat.%20Baby%20Rasta%2C%20Lito%20Kirino%2C%20Miky%20Woodz%2C%20Juhn%20%26%20Jochy%29.flac"
  },
  { 
    id: 8, 
    title: "Como Glopeta", 
    artist: "Gigolo y La Exce, Miky Woodz, Juhn & Baby Angel",
    duration: 349,
    src: "https://archive.org/download/05-la-llamada-feat.-darkiel-almighty-brytiago-bryant-myers-1/08%20-%20Como%20Glopeta%20%28feat.%20Gigolo%20y%20La%20Exce%2C%20Miky%20Woodz%2C%20Juhn%20%26%20Baby%20Angel%29.flac"
  },
  { 
    id: 9, 
    title: "La Paso Cabrón", 
    artist: "Gigolo y La Exce, Falsetto y Sammy, Mike Duran & Baby Angel",
    duration: 304,
    src: "https://archive.org/download/05-la-llamada-feat.-darkiel-almighty-brytiago-bryant-myers-1/09%20-%20La%20Paso%20Cabr%C3%B3n%20%28feat.%20Gigolo%20y%20La%20Exce%2C%20Falsetto%20y%20Sammy%2C%20Mike%20Duran%20%26%20Baby%20Angel%29.flac"
  },
  { 
    id: 10, 
    title: "Plo Plo", 
    artist: "Baby Rasta, Juanika, Nengo Flow & Pacho",
    duration: 278,
    src: "https://archive.org/download/05-la-llamada-feat.-darkiel-almighty-brytiago-bryant-myers-1/10%20-%20Plo%20Plo%20%28feat.%20Baby%20Rasta%2C%20Juanka%2C%20%C3%91engo%20Flow%20%26%20Pacho%29%20%281%29.flac"
  }
];

// ==========================================
// DETECCIÓN PRECISA DE BITRATE
// ==========================================
const bitrateCache = {};

async function detectBitrate(url, duration) {
    const cacheKey = url + duration;
    if (bitrateCache[cacheKey]) {
        return bitrateCache[cacheKey];
    }
    
    try {
        const response = await fetch(url, { method: 'HEAD' });
        const contentLength = response.headers.get('content-length');
        
        if (contentLength && duration > 0) {
            const sizeInBytes = parseInt(contentLength);
            const bitrate = Math.round((sizeInBytes * 8) / duration / 1000);
            
            if (bitrate > 100 && bitrate < 5000) {
                const result = `${bitrate} kbps`;
                bitrateCache[cacheKey] = result;
                return result;
            }
        }
        
        return "FLAC";
    } catch (error) {
        console.log('Error detectando bitrate:', error);
        return "FLAC";
    }
}

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
// SALUDO DINÁMICO
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
async function renderSongs(songsToDisplay, section = 'inicio') {
    songList.innerHTML = "";
    
    if (songsToDisplay.length === 0) {
        songList.innerHTML = `<p style="color: #b3b3b3; text-align: center; padding: 40px; font-size: 16px;">
            ${section === 'descargas' ? '📭 No tienes canciones descargadas aún' : '🎵 No hay canciones disponibles'}
        </p>`;
        songCounter.textContent = '0 canciones';
        return;
    }

    songCounter.textContent = `${songsToDisplay.length} canciones`;

    for (const song of songsToDisplay) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = songsToDisplay.indexOf(song);
        
        if (isSongDownloaded(song.id)) {
            card.classList.add('descargada');
        }
        
        if (song.id === songs[currentIndex]?.id && audio.src !== "") {
            card.classList.add('playing');
        }
        
        let bitrateDisplay = 'FLAC';
        try {
            const bitrate = await detectBitrate(song.src, song.duration);
            bitrateDisplay = `FLAC • ${bitrate}`;
        } catch (e) {
            bitrateDisplay = 'FLAC';
        }
        
        card.innerHTML = `
            <h4>${song.title}</h4>
            <p>${song.artist}</p>
            <span style="font-size: 10px; color: #1DB954; display: block; margin-top: 4px;">
                ${bitrateDisplay}
            </span>
        `;
        
        card.onclick = () => {
            const realIndex = songs.findIndex(s => s.id === song.id);
            if (realIndex !== -1) {
                loadAndPlay(realIndex);
            }
        };
        
        songList.appendChild(card);
    }
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
                const cleanTitle = song.title.replace(/[^a-zA-Z0-9 ]/g, '').trim();
                await cache.delete(`lyrics/${cleanTitle}.txt`);
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
        if (!response.ok) throw new Error('Error al descargar audio');
        const blob = await response.blob();
        const cache = await caches.open(CACHE_NAME);
        await cache.put(song.src, new Response(blob));
        
        try {
            const cleanTitle = song.title.replace(/[^a-zA-Z0-9 ]/g, '').trim();
            const lyricResponse = await fetch(`lyrics/${cleanTitle}.txt`);
            if (lyricResponse.ok) {
                const lyricBlob = await lyricResponse.blob();
                await cache.put(`lyrics/${cleanTitle}.txt`, new Response(lyricBlob));
            }
        } catch (lyricError) {
            console.log('No se encontraron letras para esta canción');
        }
        
        downloadedSongs.push(song.id);
        saveDownloadedSongs();
        
        const available = getFilteredSongs();
        renderSongs(available, currentSection);
        
        const bitrate = await detectBitrate(song.src, song.duration);
        alert(`✅ "${song.title}" descargada en FLAC • ${bitrate}`);
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
// NAVEGACIÓN
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
    
    loadLyrics(song.id);
    
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
// SISTEMA DE LETRAS AUTOMÁTICO
// ==========================================
let lyricsData = [];
let currentLyricIndex = -1;
let lyricsVisible = false;
let lyricsAvailable = false;

const lyricsDisplay = document.createElement('div');
lyricsDisplay.id = 'lyricsDisplay';
lyricsDisplay.style.cssText = `
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0,0,0,0.92);
    color: #fff;
    padding: 20px 30px;
    border-radius: 12px;
    max-width: 600px;
    width: 90%;
    text-align: center;
    font-size: 16px;
    z-index: 99;
    border: 1px solid #1DB954;
    display: none;
    max-height: 250px;
    overflow-y: auto;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    line-height: 1.6;
    font-family: 'Segoe UI', sans-serif;
    scroll-behavior: smooth;
`;

const lyricsStyle = document.createElement('style');
lyricsStyle.textContent = `
    #lyricsDisplay::-webkit-scrollbar {
        width: 4px;
    }
    #lyricsDisplay::-webkit-scrollbar-track {
        background: transparent;
    }
    #lyricsDisplay::-webkit-scrollbar-thumb {
        background: #1DB954;
        border-radius: 4px;
    }
`;
document.head.appendChild(lyricsStyle);
document.body.appendChild(lyricsDisplay);

const lyricsToggle = document.createElement('button');
lyricsToggle.id = 'lyricsToggle';
lyricsToggle.innerHTML = '📝 Letras';
lyricsToggle.style.cssText = `
    background: none;
    border: none;
    color: #1DB954;
    font-size: 15px;
    cursor: pointer;
    padding: 5px 12px;
    border-radius: 20px;
    transition: all 0.3s;
    margin-left: 10px;
    display: none;
`;

lyricsToggle.onmouseover = () => {
    lyricsToggle.style.background = 'rgba(29, 185, 84, 0.2)';
};
lyricsToggle.onmouseout = () => {
    lyricsToggle.style.background = 'none';
};
lyricsToggle.onclick = toggleLyrics;

document.querySelector('.controls').appendChild(lyricsToggle);

// ==========================================
// CARGAR LETRAS DESDE ARCHIVO .TXT
// ==========================================
async function loadLyrics(songId) {
    try {
        const song = songs.find(s => s.id === songId);
        if (!song) return;
        
        const cleanTitle = song.title.replace(/[^a-zA-Z0-9 ]/g, '').trim();
        
        let response = await fetch(`lyrics/${cleanTitle}.txt`);
        
        if (!response.ok) {
            response = await fetch(`lyrics/${song.title}.txt`);
        }
        
        if (!response.ok) {
            lyricsAvailable = false;
            lyricsToggle.style.display = 'none';
            lyricsData = [];
            console.log('📝 No hay letras para:', song.title);
            return;
        }
        
        const text = await response.text();
        lyricsData = text.split('\n').filter(line => line.trim() !== '');
        
        const hasSync = lyricsData.some(line => /\[\d{2}:\d{2}(\.\d{2})?\]/.test(line));
        
        if (hasSync) {
            console.log('✅ Letras SINCRONIZADAS:', lyricsData.length, 'líneas');
        } else {
            console.log('📝 Letras PLANAS:', lyricsData.length, 'líneas');
        }
        
        lyrics
