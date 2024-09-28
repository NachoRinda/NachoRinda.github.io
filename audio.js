async function playSong() {
    let player = new Tone.Player("audio.mp3").toDestination();
    Tone.loaded().then(() => {
      player.start();
    });
  }
  
  document.getElementById("boton").addEventListener("click", () => {
    Tone.start();
    playSong();
  });
