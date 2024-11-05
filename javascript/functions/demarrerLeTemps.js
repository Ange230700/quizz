// javascript\functions\demarrerLeTemps.js

// import des variables
import variables from "../variables.js";

// import des fonctions
import desactiverLesBoutonsOptions from "./desactiverLesBoutonsOptions.js";

// import des éléments HTML récupérés
import {
    timeurDansHtml,
    boutonSuivantDansHtml
} from "../elementsHtmlRecuperes.js";

function demarrerLeTemps() {
    if (variables.timer) return;

    // initialise le temps
    variables.tempsRestant = 15

    // affiche le temps restant
    timeurDansHtml.innerHTML = `
        <p>${variables.tempsRestant}</p>
    `;

    // démarre le compte à rebours
    variables.timer = setInterval(() => {
        // décrémente le temps restant
        variables.tempsRestant--

        // affiche le temps restant
        timeurDansHtml.innerHTML = `
            <p>${variables.tempsRestant}</p>
        `;

        // si le temps restant est écoulé, on arrête le temps
        if (variables.tempsRestant <= 0) {
            clearInterval(variables.timer)
            timeurDansHtml.innerHTML = `
                <p>0</p>
            `;

            // on désactive les boutons d'options
            desactiverLesBoutonsOptions()

            // on active le bouton suivant
            boutonSuivantDansHtml.disabled = false
        }
    }, 1000)
}

export default demarrerLeTemps;