const levels = document.querySelectorAll(".level");
const infoBox = document.getElementById("infoBox");

const data = {
    fisiologicas: {
        title: "Necesidades Fisiológicas",
        text: "Son las necesidades básicas para la supervivencia: alimentación, agua, sueño, respiración y refugio."
    },
    seguridad: {
        title: "Necesidades de Seguridad",
        text: "Incluyen protección física, estabilidad económica, salud y orden."
    },
    afiliacion: {
        title: "Necesidades de Afiliación",
        text: "Se relacionan con el amor, amistad, pertenencia y relaciones sociales."
    },
    reconocimiento: {
        title: "Necesidades de Reconocimiento",
        text: "Incluyen autoestima, respeto propio, reconocimiento social y estatus."
    },
    autorrealizacion: {
        title: "Autorrealización",
        text: "Es el nivel más alto. Se refiere al desarrollo personal, creatividad, propósito y alcanzar el máximo potencial."
    }
};

levels.forEach(level => {
    level.addEventListener("click", () => {

        levels.forEach(l => {
            l.classList.remove("active");
            l.classList.add("inactive");
        });

        level.classList.remove("inactive");
        level.classList.add("active");

        const id = level.id;

        infoBox.innerHTML = `
            <h2>${data[id].title}</h2>
            <p>${data[id].text}</p>
        `;
    });
});