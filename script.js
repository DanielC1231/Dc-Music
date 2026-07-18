// Lista definitiva de tus 48 canciones con enlaces completos
const songs = [
  // --- FOTO 1 (1 al 16) ---
  { title: "47", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/47.mp3" },
  { title: "7D", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/7D.mp3" },
  { title: "Ahora Me Llama", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Ahora%20Me%20Llama.mp3" },
  { title: "Amigos y Enemigos (Remix)", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Amigos%20y%20Enemigos%20(Remix).mp3" },
  { title: "Armao 100Pre Andamos", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Armao%20100Pre%20Andamos.mp3" },
  { title: "Bandido", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Bandido.mp3" },
  { title: "Blockia", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Blockia%20(feat.%20DJ%20Luian%20%26%20Mambo%20Kingz).mp3" },
  { title: "Caile", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Caile.mp3" },
  { title: "Coronamos", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Coronamos.mp3" },
  { title: "Crecía", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Crec%C3%ADa.mp3" },
  { title: "De las 2", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/De%20las%202.mp3" },
  { title: "Diablita", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Diablita.mp3" },
  { title: "Diles", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Diles.mp3" },
  { title: "El Farsante", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/El%20Farsante.mp3" },
  { title: "En la Intimidad", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/En%20la%20Intimidad.mp3" },
  { title: "Escápate Conmigo", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Esc%C3%A1pate%20Conmigo.mp3" },

  // --- FOTO 2 (17 al 32) ---
  { title: "Fronteamos Porque Podemos", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Fronteamos%20Porque%20Podemos%20(feat.%20Daddy%20Yankee%2C%20Yandel%20%26%20Nengo%20Flow).mp3" },
  { title: "Hablame", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Hablame.mp3" },
  { title: "Haters (Remix)", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Haters%20(Remix).mp3" },
  { title: "Hoy", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Hoy%20(feat.%20Bad%20Bunny).mp3" },
  { title: "Krippy Kush", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Krippy%20Kush.mp3" },
  { title: "La Fórmula", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/La%20F%C3%B3rmula%20(feat.%20Chris%20Jedi).mp3" },
  { title: "La Occasión", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/La%20Ocasi%C3%B3n.mp3" },
  { title: "La Rompe Corazones", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/La%20Rompe%20Corazones.mp3" },
  { title: "La Última Vez", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/La%20%C3%9Altima%20Vez.mp3" },
  { title: "Loca Remix", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Loca%20Remix.mp3" },
  { title: "Loca", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Loca.mp3" },
  { title: "Me Acostumbre", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Me%20Acostumbre%20(feat.%20Bad%20Bunny).mp3" },
  { title: "Me Ama Me Odia", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Me%20Ama%20Me%20Odia.mp3" },
  { title: "Me Llamas", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Me%20Llamas.mp3" },
  { title: "Me Mata", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Me%20Mata.mp3" },
  { title: "Me Reclama", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Me%20Reclama.mp3" },

  // --- FOTO 3 (33 al 48) ---
  { title: "Nacimos Pa Morir", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Nacimos%20Pa%20Morir%20(feat.%20Jory%20Boy).mp3" },
  { title: "No Te Hagas", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/No%20Te%20Hagas.mp3" },
  { title: "No Te Miento (Remix)", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/No%20Te%20Miento%20(Remix).mp3" },
  { title: "Nunca Sapo", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Nunca%20Sapo.mp3" },
  { title: "Otra Mujer", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Otra%20Mujer.mp3" },
  { title: "Panda", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Panda.mp3" },
  { title: "Sexto Sentido", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Sexto%20Sentido%20(feat.%20Bad%20Bunny).mp3" },
  { title: "Si Tu Lo Dejas", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Si%20Tu%20Lo%20Dejas.mp3" },
  { title: "Si Tu Novio Te Deja Sola", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Si%20Tu%20Novio%20Te%20Deja%20Sola.mp3" },
  { title: "Solita", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Solita%20(feat.%20Bad%20Bunny%2C%20Wisin%20%26%20Almighty).mp3" },
  { title: "Sé Que Quieres (Remix)", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/S%C3%A9%20Que%20Quieres%20(Remix).mp3" },
  { title: "Tu No Vive Asi", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Tu%20No%20Vive%20Asi%20(feat.%20Mambo%20Kingz%20%26%20DJ%20Luian).mp3" },
  { title: "Tócate Tu Misma", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/T%C3%B3cate%20Tu%20Misma%20(feat.%20Bad%20Bunny).mp3" },
  { title: "Un Polvo", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Un%20Polvo.mp3" },
  { title: "Un Ratito Mas", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Un%20Ratito%20Mas.mp3" },
  { title: "Vacio", artist: "Trap Latino", src: "https://archive.org/download/Trap-Latino_202607/Vacio.mp3" }
];

const songList = document.getElementById('songList');
const audio = new Audio();
let currentIndex = 0;
const playBtn = document.getElementById('playBtn');
const progress = document.getElementById('progress');

// Pintar las canciones al cargar la interfaz
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

// Cargar canciones iniciales
if (songs.length > 0) {
    renderSongs(songs);
} else {
    songList.innerHTML = "<p>No hay canciones configuradas.</p>";
}

// Lógica de navegación del menú lateral
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

// Controles principales del reproductor
function loadAndPlay(index) {
    currentIndex = index;
    audio.src = songs[currentIndex].src;
    document.getElementById('currentTitle').innerText = songs[currentIndex].title;
    document.getElementById('currentArtist').innerText = songs[currentIndex].artist;
    
    audio.load();
    audio.play().then(() => {
        playBtn.innerText = "⏸";
    }).catch(e => console.log("Esperando acción del usuario en pantalla"));
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

// Barra de progreso de tiempo interactiva
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

// Función para descargar la pista activa
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
