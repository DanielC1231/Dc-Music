// Configuración automática con tu colección real de Archive.org
const IDENTIFICADOR_COLECCION = "Trap-Latino_202607"; 

const urlBase = `https://archive.org{IDENTIFICADOR_COLECCION}/`;
const xmlUrl = `https://archive.org{IDENTIFICADOR_COLECCION}/${IDENTIFICADOR_COLECCION}_files.xml`;

let allSongs = []; // Guarda el total de canciones cargadas
const songList = document.getElementById('songList');
const audio = new Audio();
let currentIndex = 0;
const playBtn = document.getElementById('playBtn');
const progress = document.getElementById('progress');

// Cargar la lista automáticamente al abrir la página
fetch(xmlUrl)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        const files = data.getElementsByTagName("file");

        for (let file of files) {
            const name = file.getAttribute("name");
            const format = file.getElementsByTagName("format")[0]?.textContent;

            // Filtra solo los formatos de audio MP3
            if (name && (format === "MP3" || format === "VBR MP3")) {
                let tituloLimpio = name.replace(".mp3", "").replace(/_/g, " ");
                
                allSongs.push({
                    title: tituloLimpio,
                    artist: "Trap Latino",
                    src: urlBase + encodeURIComponent(name)
                });
            }
        }

        if (allSongs.length > 0) {
            renderSongs(allSongs);
        } else {
            songList.innerHTML = "<p>No se encontraron canciones en la colección.</p>";
        }
    })
    .catch(err => {
        console.error("Error al conectar:", err);
        songList.innerHTML = "<p>Error al conectar con Archive.org.</p>";
    });

// Función para pintar las canciones en la interfaz
function renderSongs(songsToDisplay) {
    songList.innerHTML = "";
    songsToDisplay.forEach((song, index) => {
        // Encontrar el índice real en la lista completa
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

// Lógica para interactuar con el Menú Lateral
function changeSection(section) {
    const title = document.getElementById('sectionTitle');
    document.getElementById('menu-inicio').classList.remove('active');
    document.getElementById('menu-biblioteca').classList.remove('active');

    if (section === 'inicio') {
        document.getElementById('menu-inicio').classList.add('active');
        title.innerText = "Buenos Días";
        renderSongs(allSongs); // Muestra todo
    } else if (section === 'biblioteca') {
        document.getElementById('menu-biblioteca').classList.add('active');
        title.innerText = "Tu Biblioteca (Colección Completa)";
        renderSongs(allSongs); // Aquí puedes meter filtros en el futuro
    }
}

// Controles del reproductor
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

// Barra de progreso interactiva
audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        progress.value = (audio.currentTime / audio.duration) * 100;
    }
});

progress.addEventListener('input', () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

// NUEVA FUNCIÓN: Descargar la canción que está sonando
function downloadCurrentSong() {
    if (audio.src === "") {
        alert("Primero selecciona una canción para poder descargarla.");
        return;
    }
    
    // Crear un enlace invisible de descarga y hacerle clic automático
    const link = document.createElement('a');
    link.href = allSongs[currentIndex].src;
    link.download = `${allSongs[currentIndex].title}.mp3`;
    link.target = "_blank"; // Asegura compatibilidad con navegadores móviles
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
