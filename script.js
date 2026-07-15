// Enlace base de tu colección
const urlBase = "https://archive.org";

// LISTA ACTUALIZADA CON LAS RUTAS REALES CORREGIDAS E IMÁGENES
const songsData = [
    {
        title: "De las 2",
        artist: "Trap Latino",
        // Agregamos el formato exacto del servidor para que no se quede mudo
        file: "De las 2.mp3", 
        cover: "https://unsplash.com" // Imagen de prueba urbana
    },
    {
        title: "Ella y Yo (Remix)",
        artist: "Trap Latino",
        file: "Ella y Yo (Remix).mp3",
        cover: "https://unsplash.com"
    },
    {
        title: "Diles (Remix)",
        artist: "Trap Latino",
        file: "Diles (Remix).mp3",
        cover: "https://unsplash.com"
    },
    {
        title: "Me Acostumbre",
        artist: "Trap Latino",
        file: "Me Acostumbre.mp3",
        cover: "https://unsplash.com"
    }
];

// Procesamos el arreglo para armar las URL funcionales
const allSongs = songsData.map(song => {
    return {
        title: song.title,
        artist: song.artist,
        cover: song.cover,
        src: urlBase + encodeURIComponent(song.file)
    };
});

const songList = document.getElementById('songList');
const audio = new Audio();
let currentIndex = 0;
const playBtn = document.getElementById('playBtn');
const progress = document.getElementById('progress');

// Imprimir canciones en pantalla
if (allSongs.length > 0) {
    renderSongs(allSongs);
} else {
    songList.innerHTML = "<p>No hay canciones configuradas.</p>";
}

function renderSongs(songsToDisplay) {
    songList.innerHTML = "";
    songsToDisplay.forEach((song, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        // Agregamos la etiqueta <img> para la portada de la canción
        card.innerHTML = `
            <img src="${song.cover}" alt="${song.title}">
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
        renderSongs(allSongs); 
    } else if (section === 'biblioteca') {
        document.getElementById('menu-biblioteca').classList.add('active');
        title.innerText = "Tu Biblioteca (Colección Completa)";
        renderSongs(allSongs); 
    }
}

function loadAndPlay(index) {
    currentIndex = index;
    audio.src = allSongs[currentIndex].src;
    document.getElementById('currentTitle').innerText = allSongs[currentIndex].title;
    document.getElementById('currentArtist').innerText = allSongs[currentIndex].artist;
    
    // Intentar reproducir el archivo de audio real
    audio.play().then(() => {
        playBtn.innerText = "⏸";
    }).catch(error => {
        console.error("Error al reproducir audio:", error);
        alert("El navegador bloqueó el audio o el archivo no está disponible. Intenta interactuar con la pantalla primero.");
    });
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
    link.href = allSongs[currentIndex].src;
    link.download = `${allSongs[currentIndex].title}.mp3`;
    link.target = "_blank"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
