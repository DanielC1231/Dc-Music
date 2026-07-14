// 1. CONFIGURACIÓN: ¡SOLO CAMBIA ESTO!
const IDENTIFICADOR_COLECCION = "Trap-Latino_202607"; 
// (Es lo que sale en la URL de tu colección después de /details/ o /download/)

const urlBase = `https://archive.org{IDENTIFICADOR_COLECCION}/`;
const xmlUrl = `https://archive.org{IDENTIFICADOR_COLECCION}/${IDENTIFICADOR_COLECCION}_files.xml`;

let songs = [];
const songList = document.getElementById('songList');
const audio = new Audio();
let currentIndex = 0;
const playBtn = document.getElementById('playBtn');
const progress = document.getElementById('progress');

// 2. LEER LA COLECCIÓN AUTOMÁTICAMENTE DESDE ARCHIVE.ORG
fetch(xmlUrl)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        const files = data.getElementsByTagName("file");
        let contador = 1;

        for (let file of files) {
            const name = file.getAttribute("name");
            const format = file.getElementsByTagName("format")[0]?.textContent;

            // Buscamos solo los archivos que sean música MP3 o VBR MP3
            if (name && (format === "MP3" || format === "VBR MP3")) {
                // Limpiamos el nombre del archivo para que se vea bonito en pantalla
                let tituloLimpio = name.replace(".mp3", "").replace(/_/g, " ");
                
                songs.push({
                    title: tituloLimpio,
                    artist: "DC Music",
                    src: urlBase + encodeURIComponent(name)
                });
                contador++;
            }
        }

        // Si encontró canciones, las dibuja en la pantalla
        if (songs.length > 0) {
            renderSongs();
        } else {
            songList.innerHTML = "<p>No se encontraron canciones MP3 en esta colección.</p>";
        }
    })
    .catch(err => {
        console.error("Error cargando la colección:", err);
        songList.innerHTML = "<p>Error al conectar con Archive.org. Revisa el identificador.</p>";
    });

// 3. MOSTRAR CANCIONES EN PANTALLA
function renderSongs() {
    songList.innerHTML = ""; // Limpiar mensaje de carga
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
}

// 4. FUNCIONES DEL REPRODUCTOR (IGUALES A LAS ANTERIORES)
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
