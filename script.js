// Lista definitiva de tus 48 canciones con enlaces completos y directos
// ¡ATENCIÓN! Verifica que los nombres de los archivos .mp3 coincidan EXACTAMENTE
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
  { title: "Crecía", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Crec%C3%ADa.mp3" },
  { title: "De las 2", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/De+las+2.mp3" },
  { title: "Diablita", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Diablita.mp3" },
  { title: "Diles", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Diles.mp3" },
  { title: "El Farsante", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/El+Farsante.mp3" },
  { title: "En la Intimidad", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/En+la+Intimidad.mp3" },
  { title: "Escápate Conmigo", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Esc%C3%A1pate+Conmigo.mp3" },

  // --- FOTO 2 (17 al 32) ---
  { title: "Fronteamos Porque Podemos", artist: "Trap Latino (feat. Daddy Yankee, Yandel & Nengo Flow)", src: "https://archive.org/details/Trap-Latino_202607/Fronteamos+Porque+Podemos+(feat.+Daddy+Yankee%2C+Yandel+%26+Nengo+Flow).mp3" },
  { title: "Hablame", artist: "Trap Latino (feat. Juanka Lyan Bryant Myers Y Anuel Aa)", src: "https://archive.org/details/Trap-Latino_202607/Hablame.mp3" },
  { title: "Haters (Remix)", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Haters+(Remix).mp3" },
  { title: "Hoy", artist: "Trap Latino (feat. Bad Bunny)", src: "https://archive.org/details/Trap-Latino_202607/Hoy+(feat.+Bad+Bunny).mp3" },
  { title: "Krippy Kush", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Krippy+Kush.mp3" },
  { title: "La Fórmula", artist: "Trap Latino (feat. Chris Jedi)", src: "https://archive.org/details/Trap-Latino_202607/La+F%C3%B3rmula+(feat.+Chris+Jedi).mp3" },
  { title: "La Occasión", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/La+Ocasi%C3%B3n.mp3" },
  { title: "La Rompe Corazones", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/La+Rompe+Corazones.mp3" },
  { title: "La Última Vez", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/La+%C3%9Altima+Vez.mp3" },
  { title: "Loca Remix", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Loca+Remix.mp3" },
  { title: "Loca", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Loca.mp3" },
  { title: "Me Acostumbre", artist: "Trap Latino (feat. Bad Bunny)", src: "https://archive.org/details/Trap-Latino_202607/Me+Acostumbre+(feat.+Bad+Bunny).mp3" },
  { title: "Me Ama Me Odia", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Me+Ama+Me+Odia.mp3" },
  { title: "Me Llamas", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Me+Llamas.mp3" },
  { title: "Me Mata", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Me+Mata.mp3" },
  { title: "Me Reclama", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Me+Reclama.mp3" },

  // --- FOTO 3 (33 al 48) ---
  { title: "Nacimos Pa Morir", artist: "Trap Latino (feat. Jory Boy)", src: "https://archive.org/details/Trap-Latino_202607/Nacimos+Pa+Morir+(feat.+Jory+Boy).mp3" },
  { title: "No Te Hagas", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/No+Te+Hagas.mp3" },
  { title: "No Te Miento (Remix)", artist: "Trap Latino (feat. Baby Rasta, Darkiel, Darell & Jory Boy)", src: "https://archive.org/details/Trap-Latino_202607/No+Te+Miento+(Remix).mp3" },
  { title: "Nunca Sapo", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Nunca+Sapo.mp3" },
  { title: "Otra Mujer", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Otra+Mujer.mp3" },
  { title: "Panda", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Panda.mp3" },
  { title: "Sexto Sentido", artist: "Trap Latino (feat. Bad Bunny)", src: "https://archive.org/details/Trap-Latino_202607/Sexto+Sentido+(feat.+Bad+Bunny).mp3" },
  { title: "Si Tu Lo Dejas", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Si+Tu+Lo+Dejas.mp3" },
  { title: "Si Tu Novio Te Deja Sola", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Si+Tu+Novio+Te+Deja+Sola.mp3" },
  { title: "Solita", artist: "Trap Latino (feat. Bad Bunny, Wisin & Almighty)", src: "https://archive.org/details/Trap-Latino_202607/Solita+(feat.+Bad+Bunny%2C+Wisin+%26+Almighty).mp3" },
  { title: "Sé Que Quieres (Remix)", artist: "Trap Latino (feat. Brytiago, Jon Z & Almighty)", src: "https://archive.org/details/Trap-Latino_202607/S%C3%A9+Que+Quieres+(Remix).mp3" },
  { title: "Tu No Vive Asi", artist: "Trap Latino (feat. Mambo Kingz & DJ Luian)", src: "https://archive.org/details/Trap-Latino_202607/Tu+No+Vive+Asi+(feat.+Mambo+Kingz+%26+DJ+Luian).mp3" },
  { title: "Tócate Tu Misma", artist: "Trap Latino (feat. Bad Bunny)", src: "https://archive.org/details/Trap-Latino_202607/T%C3%B3cate+Tu+Misma+(feat.+Bad+Bunny).mp3" },
  { title: "Un Polvo", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Un+Polvo.mp3" },
  { title: "Un Ratito Mas", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Un+Ratito+Mas.mp3" },
  { title: "Vacio", artist: "Trap Latino", src: "https://archive.org/details/Trap-Latino_202607/Vacio.mp3" }
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

// NUEVO FIJADO: Cierre correcto de la barra de progreso
progress.addEventListener('input', () => {
    if (audio.duration) {
        audio.currentTime = (progress.value / 100) * audio.duration;
    }
});

// Función para descargar la pista activa (CORREGIDA, SIN LA COMA)
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
