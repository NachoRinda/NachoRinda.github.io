let data = 
[
    {
      "Album Name": "Parachutes",
      "Sales per million": 13,
      "Release date": "10-07-2000"
    },
    {
      "Album Name": "A Rush of Blood to the Head",
      "Sales per million": 11.6,
      "Release date": "26-08-2002"
    },
    {
      "Album Name": "X&Y",
      "Sales per million": 10,
      "Release date": "06-06-2005"
    },
    {
      "Album Name": "Viva la Vida or Death and All His Friends",
      "Sales per million": 11.2,
      "Release date": "12-06-2008"
    },
    {
      "Album Name": "Mylo Xyloto",
      "Sales per million": 4.6,
      "Release date": "24-10-2011"
    },
    {
      "Album Name": "Ghost Stories",
      "Sales per million": 3.9,
      "Release date": "16-05-2014"
    },
    {
      "Album Name": "A Head Full of Dreams",
      "Sales per million": 6,
      "Release date": "04-12-2015"
    },
    {
      "Album Name": "Everyday Life",
      "Sales per million": 0.27,
      "Release date": "22-11-2019"
    },
    {
      "Album Name": "Music of the Spheres",
      "Sales per million": 0.3,
      "Release date": "15-10-2021"
    }
  ]


let albumName = data.map(item => item["Album Name"])
let salesPerMillion = data.map(item => item["Sales per million"])
let releaseDate = data.map(item => item["Release date"])

let trace = {
    x: releaseDate,         // Eje X: Fechas de lanzamiento
    y: salesPerMillion,                // Eje Y: Ventas por millón
    type: 'bar',             // Tipo de gráfico: barras
    text: albumName,        // Etiquetas de las barras
    textposition: 'auto',    // Posición del texto en las barras
    marker: {
        color: 'skyblue',    // Color de las barras
    }
};

let layout = {
    title: 'Ventas de Álbumes por Fecha de Lanzamiento',
    xaxis: {
        title: 'Fecha de Lanzamiento',
        tickangle: -45          // Rotar las etiquetas del eje X
    },
    yaxis: {
        title: 'Ventas por Millón',
    }
};


Plotly.newPlot('ColdplayPlot', [trace], layout);



// let play = document.getElementById("playButton");
// function playMusic(){
//     let audio = new Audio("audio.mp3");
//     audio.play()
// }
// play.addEventListener("click", playMusic);

async function playSong() {
    try {
        await Tone.start(); // Iniciar el contexto de audio
        const player = new Tone.Player("audio.mp3").toDestination(); // Asegúrate de que la ruta sea correcta
        console.log("Cargando la canción...");
        await player.load(); // Espera a que la canción se cargue
        console.log("Canción cargada, reproduciendo...");
        player.start(); // Reproducir la canción
    } catch (error) {
        console.error("Error al reproducir la canción:", error);
    }
}

// Evento de clic en el botón
document.getElementById("playButton").addEventListener("click", () => {
    playSong(); // Llamar a la función para reproducir la canción
});
