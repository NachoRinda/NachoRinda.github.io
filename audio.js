async function playSong() {
    // Cargar la canción
    const player = new Tone.Player({
        url: "https://github.com/NachoRinda/NachoRinda.github.io/blob/main/audio.mp3",
        loop: false,
        autostart: false
    });
    
    // new Tone.Player("audio.mp3").toDestination();

    // Esperar a que la canción esté lista
    await player.load();

    // Reproducir la canción
    player.start();
}

// Evento de clic en el botón
document.getElementById("playButton").addEventListener("click", () => {
    Tone.start(); // Iniciar el contexto de audio
    playSong();   // Llamar a la función para reproducir la canción
});