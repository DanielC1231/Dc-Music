// Lista de canciones
const songs = [
  // --- FOTO 1 (1 al 16) ---
  { id: 1, title: "47", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/47.mp3" },
  { id: 2, title: "7D", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/7D.mp3" },
  { id: 3, title: "Ahora Me Llama", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Ahora%20Me%20Llama.mp3" },
  { id: 4, title: "Amigos y Enemigos (Remix)", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Amigos%20y%20Enemigos%20(Remix).mp3" },
  { id: 5, title: "Armao 100Pre Andamos", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Armao%20100Pre%20Andamos.mp3" },
  { id: 6, title: "Bandido", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Bandido.mp3" },
  { id: 7, title: "Blockia", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Blockia%20(feat.%20DJ%20Luian%20%26%20Mambo%20Kingz).mp3" },
  { id: 8, title: "Caile", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Caile.mp3" },
  { id: 9, title: "Coronamos", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Coronamos.mp3" },
  { id: 10, title: "Crecía", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Crec%C3%ADa.mp3" },
  { id: 11, title: "De las 2", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/De%20las%202.mp3" },
  { id: 12, title: "Diablita", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Diablita.mp3" },
  { id: 13, title: "Diles", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Diles.mp3" },
  { id: 14, title: "El Farsante", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/El%20Farsante.mp3" },
  { id: 15, title: "En la Intimidad", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/En%20la%20Intimidad.mp3" },
  { id: 16, title: "Escápate Conmigo", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Esc%C3%A1pate%20Conmigo.mp3" },

  // --- FOTO 2 (17 al 32) ---
  { id: 17, title: "Fronteamos Porque Podemos", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Fronteamos%20Porque%20Podemos%20(feat.%20Daddy%20Yankee%2C%20Yandel%20%26%20Nengo%20Flow).mp3" },
  { id: 18, title: "Hablame", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Hablame.mp3" },
  { id: 19, title: "Haters (Remix)", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Haters%20(Remix).mp3" },
  { id: 20, title: "Hoy", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Hoy%20(feat.%20Bad%20Bunny).mp3" },
  { id: 21, title: "Krippy Kush", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Krippy%20Kush.mp3" },
  { id: 22, title: "La Fórmula", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/La%20F%C3%B3rmula%20(feat.%20Chris%20Jedi).mp3" },
  { id: 23, title: "La Occasión", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/La%20Ocasi%C3%B3n.mp3" },
  { id: 24, title: "La Rompe Corazones", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/La%20Rompe%20Corazones.mp3" },
  { id: 25, title: "La Última Vez", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/La%20%C3%9Altima%20Vez.mp3" },
  { id: 26, title: "Loca Remix", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Loca%20Remix.mp3" },
  { id: 27, title: "Loca", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Loca.mp3" },
  { id: 28, title: "Me Acostumbre", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Me%20Acostumbre%20(feat.%20Bad%20Bunny).mp3" },
  { id: 29, title: "Me Ama Me Odia", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Me%20Ama%20Me%20Odia.mp3" },
  { id: 30, title: "Me Llamas", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Me%20Llamas.mp3" },
  { id: 31, title: "Me Mata", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Me%20Mata.mp3" },
  { id: 32, title: "Me Reclama", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Me%20Reclama.mp3" },

  // --- FOTO 3 (33 al 48) ---
  { id: 33, title: "Nacimos Pa Morir", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Nacimos%20Pa%20Morir%20(feat.%20Jory%20Boy).mp3" },
  { id: 34, title: "No Te Hagas", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/No%20Te%20Hagas.mp3" },
  { id: 35, title: "No Te Miento (Remix)", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/No%20Te%20Miento%20(Remix).mp3" },
  { id: 36, title: "Nunca Sapo", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Nunca%20Sapo.mp3" },
  { id: 37, title: "Otra Mujer", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Otra%20Mujer.mp3" },
  { id: 38, title: "Panda", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Panda.mp3" },
  { id: 39, title: "Sexto Sentido", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Sexto%20Sentido%20(feat.%20Bad%20Bunny).mp3" },
  { id: 40, title: "Si Tu Lo Dejas", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Si%20Tu%20Lo%20Dejas.mp3" },
  { id: 41, title: "Si Tu Novio Te Deja Sola", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Si%20Tu%20Novio%20Te%20Deja%20Sola.mp3" },
  { id: 42, title: "Solita", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Solita%20(feat.%20Bad%20Bunny%2C%20Wisin%20%26%20Almighty).mp3" },
  { id: 43, title: "Sé Que Quieres (Remix)", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/S%C3%A9%20Que%20Quieres%20(Remix).mp3" },
  { id: 44, title: "Tu No Vive Asi", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Tu%20No%20Vive%20Asi%20(feat.%20Mambo%20Kingz%20%26%20DJ%20Luian).mp3" },
  { id: 45, title: "Tócate Tu Misma", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/T%C3%B3cate%20Tu%20Misma%20(feat.%20Bad%20Bunny).mp3" },
  { id: 46, title: "Un Polvo", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Un%20Polvo.mp3" },
  { id: 47, title: "Un Ratito Mas", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Un%20Ratito%20Mas.mp3" },
  { id: 48, title: "Vacio", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Vacio.mp3" }
];

// ========== CONFIGURACIÓN DE CACHÉ ==========
const CACHE_NAME = 'dc-music-cache-v1';
let downloadedSongs = [];

// Cargar lista de canciones descargadas desde localStorage
function loadDownloadedSongs() {
    try {
        const saved = localStorage.getItem('downloadedSongs');
        if (saved) {
            downloadedSongs = JSON.parse(saved);
        }
    } catch (e) {
        downloadedSongs = [];
    }
}

// Guardar lista de canciones descargadas
function saveDownloadedSongs() {
    localStorage.setItem('downloadedSongs', JSON.stringify(downloadedSongs));
}

// Verificar si una canción está descargada
function isSongDownloaded(songId) {
    return downloadedSongs.includes(songId);
}

// ========== SALUDO DINÁMICO ==========
function getGreeting() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) return "Buenos Días";
    if (hour >= 12 && hour < 18) return "Buenas Tardes";
    if (hour >= 18 && hour < 22) return "Buenas Noches";
    return "Buenas Noches"; // De 22 a 6
}

// ========== ELEMENTOS DOM ==========
const songList = document.getElementById('songList');
const audio = new Audio();
let currentIndex = 0;
const playBtn = document.getElementById('playBtn');
const progress = document.getElementById('progress');
let currentSection = 'inicio';

// ========== FUNCIONES PRINCIPALES ==========
function renderSongs(songsToDisplay, section = 'inicio') {
    songList.innerHTML = "";
    
    if (songsToDisplay.length === 0) {
        songList.innerHTML = `<p style="color: #b3b3b3; text-align: center; padding: 40px;">
            ${section === 'descargas' ? '📭 No tienes canciones descargadas aún' : '🎵 No hay canciones disponibles'}
        </p>`;
        return;
    }

    songsToDisplay.forEach((song, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        // Marcar si está descargada
        if (isSongDownloaded(song.id)) {
            card.classList.add('descargada');
        }
        
        card.innerHTML = `
            <h4>${song.title}</h4>
            <p style="color: #b3b3b3; font-size: 14px;">${song.artist}</p>
        `;
        
        card.onclick = () => loadAndPlay(index);
        songList.appendChild(card);
    });
}

// ========== DESCARGA Y CACHÉ ==========
async function downloadCurrentSong() {
    if (audio.src === "") {
        alert("Primero selecciona una canción para descargar.");
        return;
    }

    const song = songs[currentIndex];
    
    // Si ya está descargada, preguntar si quiere eliminarla
    if (isSongDownloaded(song.id)) {
        if (confirm(`¿Quieres eliminar "${song.title}" de tus descargas?`)) {
            // Eliminar del caché
            try {
                const cache = await caches.open(CACHE_NAME);
                await cache.delete(song.src);
                downloadedSongs = downloadedSongs.filter(id => id !== song.id);
                saveDownloadedSongs();
                
                // Actualizar la vista
                if (currentSection === 'descargas') {
                    renderSongs(getFilteredSongs(), 'descargas');
                } else {
                    renderSongs(songs, 'inicio');
                }
                
                alert(`"${song.title}" eliminada de descargas.`);
            } catch (error) {
                console.error('Error al eliminar:', error);
                alert('Error al eliminar la canción del caché.');
            }
        }
        return;
    }

    // Descargar la canción
    try {
        const response = await fetch(song.src);
        if (!response.ok) throw new Error('Error al descargar');
        
        const blob = await response.blob();
        const cache = await caches.open(CACHE_NAME);
        await cache.put(song.src, new Response(blob));
        
        // Guardar en la lista de descargadas
        downloadedSongs.push(song.id);
        saveDownloadedSongs();
        
        // Actualizar la vista
        if (currentSection === 'descargas') {
            renderSongs(getFilteredSongs(), 'descargas');
        } else {
            renderSongs(songs, 'inicio');
        }
        
        alert(`✅ "${song.title}" descargada exitosamente. Ahora está en tus descargas.`);
    } catch (error) {
        console.error('Error al descargar:', error);
        alert('❌ Error al descargar la canción. Inténtalo de nuevo.');
    }
}

// Obtener canciones filtradas (descargas o todas)
function getFilteredSongs() {
    if (currentSection === 'descargas') {
        return songs.filter(song => downloadedSongs.includes(song.id));
    }
    return songs;
}

// ========== NAVEGACIÓN ==========
function changeSection(section) {
    currentSection = section;
    const title = document.getElementById('sectionTitle');
    
    // Actualizar menú
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

// ========== CONTROLES DEL REPRODUCTOR ==========
function loadAndPlay(index) {
    const songListToUse = getFilteredSongs();
    if (songListToUse.length === 0) return;
    
    // Encontrar el índice real en el array completo
    const realIndex = songs.findIndex(s => s.id === songListToUse[index].id);
    currentIndex = realIndex;
    
    const song = songs[currentIndex];
    audio.src = song.src;
    document.getElementById('currentTitle').innerText = song.title;
    document.getElementById('currentArtist').innerText = song.artist;
    
    audio.load();
    audio.play().then(() => {
        playBtn.innerText = "⏸";
    }).catch(e => console.log("Esperando acción del usuario"));
}

function playSong() {
    if (audio.src === "") {
        const available = getFilteredSongs();
        if (available.length > 0) loadAndPlay(0);
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
    
    // Buscar índice actual en la lista filtrada
    const currentId = songs[currentIndex].id;
    const currentFilteredIndex = available.findIndex(s => s.id === currentId);
    
    const nextFilteredIndex = (currentFilteredIndex + 1) % available.length;
    loadAndPlay(nextFilteredIndex);
}

function prevSong() {
    const available = getFilteredSongs();
    if (available.length === 0) return;
    
    const currentId = songs[currentIndex].id;
    const currentFilteredIndex = available.findIndex(s => s.id === currentId);
    
    const prevFilteredIndex = (currentFilteredIndex - 1 + available.length) % available.length;
    loadAndPlay(prevFilteredIndex);
}

// ========== PROGRESO ==========
audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        progress.value = (audio.currentTime / audio.duration) * 100;
    }
});

progress.addEventListener('input', () => {
    if (audio.duration) {
        audio.currentTime = (progress.value / 100) * audio.duration;
    }
});

// ========== INICIALIZACIÓN ==========
loadDownloadedSongs();

// Establecer saludo inicial
document.getElementById('sectionTitle').innerText = getGreeting();

// Renderizar canciones
if (songs.length > 0) {
    renderSongs(songs, 'inicio');
} else {
    songList.innerHTML = "<p>No hay canciones configuradas.</p>";
}

console.log(`🎵 DC Music cargado - ${songs.length} canciones disponibles`);
console.log(`📥 ${downloadedSongs.length} canciones descargadas`);
