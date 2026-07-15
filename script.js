// Configuración automática con tu colección real de Archive.org
const IDENTIFICADOR_COLECCION = "Trap-Latino_202607"; 

// API de búsqueda de Archive.org (Esta NO se bloquea y trae todo el listado de inmediato)
const apiUrl = `https://archive.org{IDENTIFICADOR_COLECCION}&fl[]=identifier&output=json`;
const urlBase = `https://archive.org{IDENTIFICADOR_COLECCION}/`;

let allSongs = []; 
const songList = document.getElementById('songList');
const audio = new Audio();
let currentIndex = 0;
const playBtn = document.getElementById('playBtn');
const progress = document.getElementById('progress');

// 1. CARGAR LAS CANCIONES DIRECTO DESDE LA API DE ARCHIVE
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Obtenemos los metadatos de los archivos reales leyendo el manifest de la API
        const filesUrl = `https://archive.org{IDENTIFICADOR_COLECCION}`;
        return fetch(filesUrl);
    })
    .then(response => response.json())
    .then(metadata => {
        const files = metadata.files;

        if (!files || files.length === 0) {
            songList.innerHTML = "<p>No se encontraron archivos en esta colección.</p>";
            return;
        }

        // Filtramos y limpiamos los archivos de audio MP3
        files.forEach(file => {
            const name = file.name;
            const format = file.format;

            if (name && (format === "MP3" || format === "VBR MP3")) {
                let tituloLimpio = name.replace(".mp3", "").replace(/_/g, " ");
                
                allSongs.push({
                    title: tituloLimpio,
                    artist: "Trap Latino",
                    src: urlBase + encodeURIComponent(name)
                });
            }
        });

        // Pintamos el reproductor si detectó canciones
        if (allSongs.length > 0) {
            renderSongs(allSongs);
        } else {
            songList.innerHTML = "<p>No hay canciones en formato MP3 todavía. Sube más música a tu colección.</p>";
        }
    })
    .catch(err => {
        console.error("Error al conectar:", err);
        songList.innerHTML = "<p>Error al conectar con los servidores de Archive.org. Intenta de nuevo más tarde.</p>";
    });

// 2. MOSTRAR CANCIONES EN LA INTERFAZ
function renderSongs(songsToDisplay) {
    songList.innerHTML = "";
    songsToDisplay.forEach((song, index) => {
        const realIndex = allSongs.findIndex(s => s.src === song.src);
        
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h4>${song.title}</h4>
            <p style="color: #b3b3b3; font-size: 14px;">${song.artist}</p>
        `;
        card.onclick = () => loadAndPlay(realIndex);
        songList.appendChild(card);
    });
}

// 3. LOGICA PARA INTERACTUAR CON EL MENÚ LATERAL
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

// 4. CONTROLES DEL REPRODUCTOR
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

// 5. BARRA DE PROGRESO INTERACTIVA
audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        progress.value = (audio.currentTime / audio.duration) * 100;
    }
});

progress.addEventListener('input', () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

// 6. FUNCIÓN PARA DESCARGAR LA CANCIÓN QUE ESTÁ REPRODUCIÉNDOSE
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
