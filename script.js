// ==========================================
// SISTEMA DE LETRAS AUTOMÁTICO (MEJORADO)
// ==========================================
let lyricsData = [];
let currentLyricIndex = -1;
let lyricsVisible = false;
let lyricsAvailable = false; // ← NUEVO: saber si hay letras

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

// ==========================================
// BOTÓN DE LETRAS (se crea pero se oculta si no hay letras)
// ==========================================
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
    display: none; /* ← OCULTO POR DEFECTO */
`;

lyricsToggle.onmouseover = () => {
    lyricsToggle.style.background = 'rgba(29, 185, 84, 0.2)';
};
lyricsToggle.onmouseout = () => {
    lyricsToggle.style.background = 'none';
};
lyricsToggle.onclick = toggleLyrics;

// Insertar botón en los controles (pero oculto)
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
        
        // Intentar cargar .txt
        let response = await fetch(`lyrics/${cleanTitle}.txt`);
        
        if (!response.ok) {
            response = await fetch(`lyrics/${song.title}.txt`);
        }
        
        if (!response.ok) {
            // No hay letras → ocultar botón
            lyricsAvailable = false;
            lyricsToggle.style.display = 'none';
            lyricsData = [];
            console.log('📝 No hay letras para:', song.title);
            return;
        }
        
        const text = await response.text();
        // Guardar la letra como un solo bloque (sin sincronizar)
        lyricsData = text.split('\n').filter(line => line.trim() !== '');
        
        // VERIFICAR SI ESTÁ SINCRONIZADA (formato [mm:ss.xx])
        const hasSync = lyricsData.some(line => /\[\d{2}:\d{2}(\.\d{2})?\]/.test(line));
        
        if (hasSync) {
            console.log('✅ Letras SINCronizadas:', lyricsData.length, 'líneas');
        } else {
            console.log('📝 Letras PLANAS (sin sincronizar):', lyricsData.length, 'líneas');
        }
        
        // Hay letras → mostrar botón
        lyricsAvailable = true;
        lyricsToggle.style.display = 'inline-block';
        
    } catch (error) {
        console.log('Error al cargar letras:', error);
        lyricsAvailable = false;
        lyricsToggle.style.display = 'none';
        lyricsData = [];
    }
}

// ==========================================
// MOSTRAR LETRAS (SINCRONIZADAS O PLANAS)
// ==========================================
function updateLyricsDisplay() {
    if (!lyricsVisible || lyricsData.length === 0) {
        return;
    }
    
    // Verificar si está sincronizada
    const hasSync = lyricsData.some(line => /\[\d{2}:\d{2}(\.\d{2})?\]/.test(line));
    
    let displayText = '';
    
    if (hasSync) {
        // ===== MODO SINCRONIZADO =====
        const currentTime = audio.currentTime;
        let currentLine = 0;
        let found = false;
        
        // Buscar la línea actual basada en el tiempo
        for (let i = 0; i < lyricsData.length; i++) {
            const match = lyricsData[i].match(/\[(\d{2}):(\d{2})(?:\.(\d{2}))?\](.*)/);
            if (match) {
                const mins = parseInt(match[1]);
                const secs = parseInt(match[2]);
                const centisecs = parseInt(match[3] || '0');
                const timeInSeconds = mins * 60 + secs + centisecs / 100;
                
                if (currentTime >= timeInSeconds) {
                    currentLine = i;
                    found = true;
                }
            }
        }
        
        // Mostrar contexto alrededor de la línea actual
        const contextLines = 3;
        const startLine = Math.max(0, currentLine - contextLines);
        const endLine = Math.min(lyricsData.length, currentLine + contextLines + 1);
        
        for (let i = startLine; i < endLine; i++) {
            // Limpiar los timestamps para mostrar solo la letra
            const cleanLine = lyricsData[i].replace(/\[\d{2}:\d{2}(\.\d{2})?\]/g, '').trim();
            if (cleanLine) {
                if (i === currentLine && found) {
                    displayText += `<span style="color: #1DB954; font-weight: bold; font-size: 18px;">▶ ${cleanLine}</span><br>`;
                } else {
                    displayText += `${cleanLine}<br>`;
                }
            }
        }
    } else {
        // ===== MODO PLANO (sin sincronizar) =====
        // Mostrar todas las letras completas
        displayText = lyricsData.join('<br>');
    }
    
    if (displayText) {
        lyricsDisplay.innerHTML = displayText;
        lyricsDisplay.style.display = 'block';
        
        // Auto-scroll a la línea actual (solo en modo sincronizado)
        if (hasSync) {
            const activeLine = lyricsDisplay.querySelector('span');
            if (activeLine) {
                activeLine.scrollIntoView({ block: 'center', behavior: 'smooth' });
            }
        } else {
            // En modo plano, scroll al inicio
            lyricsDisplay.scrollTop = 0;
        }
    }
}

// ==========================================
// FUNCIONES DE CONTROL
// ==========================================
function toggleLyrics() {
    lyricsVisible = !lyricsVisible;
    lyricsDisplay.style.display = lyricsVisible ? 'block' : 'none';
    
    if (lyricsVisible && audio.src && lyricsAvailable) {
        updateLyricsDisplay();
    }
}

// ==========================================
// MODIFICAR loadAndPlay
// ==========================================
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
audio.addEventListener('timeupdate', () => {
    if (lyricsVisible && lyricsAvailable && lyricsData.length > 0) {
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

// ==========================================
// AL CAMBIAR DE CANCIÓN, CERRAR LETRAS
// ==========================================
audio.addEventListener('emptied', () => {
    if (lyricsVisible) {
        lyricsVisible = false;
        lyricsDisplay.style.display = 'none';
        lyricsToggle.innerHTML = '📝 Letras';
    }
});