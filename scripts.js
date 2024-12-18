// Función para mostrar consejos sobre salud mental
function mostrarConsejo() {
    const consejos = [
        "Haz una pausa y respira profundamente durante 5 minutos.",
        "Habla con alguien de confianza sobre cómo te sientes.",
        "Haz ejercicio regularmente para mejorar tu bienestar mental.",
        "Dedica tiempo cada día a hacer algo que te guste.",
        "Evita el uso excesivo de las redes sociales para reducir el estrés."
    ];

    // Elegir un consejo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * consejos.length);
    const consejo = consejos[indiceAleatorio];

    // Mostrar el consejo en la consola (o en un alert)
    console.log(consejo);
    alert(consejo);
}

// Llamar a la función para mostrar un consejo al cargar la página
mostrarConsejo();

// Función que puede usarse para llamar a la función en cualquier momento
function consejoDeHoy() {
    setInterval(mostrarConsejo, 3000000); // Mostrar un consejo cada 50 minutos (3000000 milisegundos)
}

// Activar la función para consejos periódicos
consejoDeHoy();
