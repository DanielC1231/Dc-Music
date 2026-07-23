// ==========================================
// SISTEMA DE LETRAS AUTOMÁTICO
// ==========================================
let lyricsData = [];
let currentLyricIndex = -1;
let lyricsVisible = false;

// Crear contenedor de letras
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

// Estilo para el scroll de las letras
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

// Botón de letras
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
`;

lyricsToggle.onmouseover = () => {
    lyricsToggle.style.background = 'rgba(29, 185, 84, 0.2)';
};
lyricsToggle.onmouseout = () => {
    lyricsToggle.style.background = 'none';
};
lyricsToggle.onclick = toggleLyrics;

// Insertar botón en los controles
document.querySelector('.controls').appendChild(lyricsToggle);

// ==========================================
// CARGAR LETRAS DESDE ARCHIVO .TXT
// ==========================================
async function loadLyrics(songId) {
    try {
        const song = songs.find(s => s.id === songId);
        if (!song) return;
        
        // Limpiar nombre para el archivo
        const cleanTitle = song.title
            .replace(/[^a-zA-Z0-9 ]/g, '')
            .trim();
        
        // Intentar cargar .txt primero
        let response = await fetch(`lyrics/${cleanTitle}.txt`);
        
        if (!response.ok) {
            // Intentar con el nombre original
            response = await fetch(`lyrics/${song.title}.txt`);
        }
        
        if (!response.ok) {
            lyricsData = [];
            console.log('No se encontraron letras para:', song.title);
            return;
        }
        
        const text = await response.text();
        // Guardar la letra como un solo bloque
        lyricsData = text.split('\n').filter(line => line.trim() !== '');
        console.log(`✅ Letras cargadas: ${lyricsData.length} líneas`);
        
    } catch (error) {
        console.log('Error al cargar letras:', error);
        lyricsData = [];
    }
}

// ==========================================
// MOSTRAR LETRAS EN TIEMPO REAL
// ==========================================
function updateLyricsDisplay() {
    if (!lyricsVisible || lyricsData.length === 0) {
        return;
    }
    
    // Mostrar la letra completa con desplazamiento automático
    const currentTime = audio.currentTime;
    const totalDuration = audio.duration || 300; // 5 minutos por defecto
    
    // Calcular qué parte de la letra mostrar basado en el tiempo
    const progress = currentTime / totalDuration;
    const totalLines = lyricsData.length;
    const currentLine = Math.floor(progress * totalLines);
    
    // Mostrar un bloque de líneas alrededor de la posición actual
    const contextLines = 5; // Líneas antes y después
    const startLine = Math.max(0, currentLine - contextLines);
    const endLine = Math.min(totalLines, currentLine + contextLines + 1);
    
    let displayText = '';
    for (let i = startLine; i < endLine; i++) {
        if (i === currentLine) {
            displayText += `<span style="color: #1DB954; font-weight: bold; font-size: 18px;">▶ ${lyricsData[i]}</span><br>`;
        } else {
            displayText += `${lyricsData[i]}<br>`;
        }
    }
    
    lyricsDisplay.innerHTML = displayText;
    lyricsDisplay.style.display = 'block';
    
    // Auto-scroll a la línea actual
    const activeLine = lyricsDisplay.querySelector('span');
    if (activeLine) {
        activeLine.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
}

// ==========================================
// FUNCIONES DE CONTROL
// ==========================================
function toggleLyrics() {
    lyricsVisible = !lyricsVisible;
    lyricsDisplay.style.display = lyricsVisible ? 'block' : 'none';
    
    if (lyricsVisible && audio.src) {
        updateLyricsDisplay();
    }
}

// ==========================================
// MODIFICAR loadAndPlay EXISTENTE
// ==========================================
// Busca la función loadAndPlay en tu código y reemplázala con esta:
function loadAndPlay(index) {
    const song = songs[index];
    if (!song) return;
    
    currentIndex = index;
    progress.value = 0;
    audio.currentTime = 0;
    currentTimeDisplay.textContent = '0:00';
    
    // Cargar letras automáticamente
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

// ==========================================
// ACTUALIZAR LETRAS EN CADA TICK
// ==========================================
// Añadir este event listener después de los existentes
audio.addEventListener('timeupdate', () => {
    if (lyricsVisible && lyricsData.length > 0) {
        updateLyricsDisplay();
    }
});

// ==========================================
// REINICIAR LETRAS AL CAMBIAR DE CANCIÓN
// ==========================================
audio.addEventListener('ended', () => {
    if (lyricsVisible) {
        lyricsDisplay.innerHTML = '🎵 Canción finalizada';
    }
});