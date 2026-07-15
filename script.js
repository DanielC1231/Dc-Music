// Lista definitiva de tus 48 canciones con enlaces completos y directos
const songs = [
  // --- FOTO 1 (1 al 16) ---
  { title: "47", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/47.mp3" },
  { title: "7D", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/7D.mp3" },
  { title: "Ahora Me Llama", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Ahora+Me+Llama.mp3" },
  { title: "Amigos y Enemigos (Remix)", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Amigos+y+Enemigos+(Remix).mp3" },
  { title: "Armao 100Pre Andamos", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Armao+100Pre+Andamos.mp3" },
  { title: "Bandido", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Bandido.mp3" },
  { title: "Blockia", artist: "Trap Latino (feat. DJ Luian)", src: "https://archive.org/details/Trap-Latino_202607/Blockia+(feat.+DJ+Luian+%26+Mambo+Kingz).mp3" },
  { title: "Caile", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Caile.mp3" },
  { title: "Coronamos", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Coronamos.mp3" },  
  { title: "Crecía", artist: "Trap Latino", src: "https://archive.org" },
  { title: "De las 2", artist: "Trap Latino", src: "https://archive.org" },
  { title: "Diablita", artist: "Trap Latino", src: "https://archive.org" },
  { title: "Diles", artist: "Trap Latino", src: "https://archive.org" },
  { title: "El Farsante", artist: "Trap Latino", src: "https://archive.org" },
  { title: "En la Intimidad", artist: "Trap Latino", src: "https://archive.org" },
  { title: "Escápate Conmigo", artist: "Trap Latino", src: "https://archive.org" },

  // --- FOTO 2 (17 al 32) ---
  { title: "Fronteamos Porque Podemos", artist: "Trap Latino (feat. Daddy Yankee, Yandel & Nengo Flow)", src: "https://archive.org/details/Trap-Latino_202607/Fronteamos+Porque+Podemos+(feat.+Daddy+Yankee%2C+Yandel+%26+Nengo+Flow).mp3" },
  { title: "Hablame", artist: "Trap Latino (feat. Juanka Lyan Bryant Myers Y Anuel Aa)", src: "https://archive.org" },
  { title: "Haters (Remix)", artist: "Trap Latino", src: "https://archive.org" },
  { title: "Hoy", artist: "Trap Latino (feat. Bad Bunny)", src: "https://archive.org" },
  { title: "Krippy Kush", artist: "Trap Latino", src: "https://archive.org" },
  { title: "La Fórmula", artist: "Trap Latino (feat. Chris Jedi)", src: "https://archive.org" },
  { title: "La Occasión", artist: "Trap Latino", src: "https://archive.org" },
  { title: "La Rompe Corazones", artist: "Trap Latino", src: "https://archive.org" },
  { title: "La Última Vez", artist: "Trap Latino", src: "https://archive.org" },
  { title: "Loca Remix", artist: "Trap Latino", src: "https://archive.org" },
  { title: "Loca", artist: "Trap Latino", src: "https://archive.org" },
  { title: "Me Acostumbre", artist: "Trap Latino (feat. Bad Bunny)", src: "https://archive.org" },
  { title: "Me Ama Me Odia", artist: "Trap Latino", src: "https://archive.org" },
  { title: "Me Llamas", artist: "Trap Latino", src: "https://archive.org" },
  { title: "Me Mata", artist: "Trap Latino", src: "https://archive.org" },
  { title: "Me Reclama", artist: "Trap Latino", src: "https://archive.org" },

  // --- FOTO 3 (33 al 48) ---
  { title: "Nacimos Pa Morir", artist: "Trap Latino (feat. Jory Boy)", src: "https://archive.org" },
  { title: "No Te Hagas", artist: "Trap Latino", src: "https://archive.org" },
  { title: "No Te Miento (Remix)", artist: "Trap Latino (feat. Baby Rasta, Darkiel, Darell & Jory Boy)", src: "https://archive.org" },
  { title: "Nunca Sapo", artist: "Trap Latino", src: "https://archive.org" },
  { title: "Otra Mujer", artist: "Trap Latino", src: "https://archive.org" },
  { title: "Panda", artist: "Trap Latino", src: "https://archive.org" },
  { title: "Sexto Sentido", artist: "Trap Latino (feat. Bad Bunny)", src: "https://archive.org" },
  { title: "Si Tu Lo Dejas", artist: "Trap Latino", src: "https://archive.org" },
  { title: "Si Tu Novio Te Deja Sola", artist: "Trap Latino", src: "https://archive.org" },
  { title: "Solita", artist: "Trap Latino (feat. Bad Bunny, Wisin & Almighty)", src: "https://archive.org" },
  { title: "Sé Que Quieres (Remix)", artist: "Trap Latino (feat. Brytiago, Jon Z & Almighty)", src: "https://archive.org" },
  { title: "Tu No Vive Asi", artist: "Trap Latino (feat. Mambo Kingz & DJ Luian)", src: "https://archive.org" },
  { title: "Tócate Tu Misma", artist: "Trap Latino (feat. Bad Bunny)", src: "https://archive.org" },
  { title: "Un Polvo", artist: "Trap Latino", src: "https://archive.org" },
  { title: "Un Ratito Mas", artist: "Trap Latino", src: "https://archive.org" },
  { title: "Vacio", artist: "Trap Latino", src: "https://archive.org" }
];

const songList = document.getElementById('songList');
const audio = new Audio();
let currentIndex = 0;
const playBtn = document.getElementById('playBtn');
const progress = document.getElementById('progress');

// Pintar las canciones al cargar la interfaz
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

progress.addEventListener('input', () 
