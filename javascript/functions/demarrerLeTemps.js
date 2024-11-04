import variables from "../variables.js";
import desactiverLesBoutonsOptions from "./desactiverLesBoutonsOptions.js";
import {
    timeurDansHtml,
    boutonSuivantDansHtml
} from "../elementsHtmlRecuperes.js";

function demarrerLeTemps() {
    if (variables.timer) return;
    //initialise le temps
    variables.tempsRestant = 15
    //affiche les 30 secondes et le texte temps restant
    timeurDansHtml.innerHTML = `
        <p>${variables.tempsRestant}</p>
    `

    variables.timer = setInterval(() => {
        variables.tempsRestant--
        timeurDansHtml.innerHTML = `
            <p>${variables.tempsRestant}</p>
        `

        if (variables.tempsRestant <= 0) {
            clearInterval(variables.timer)
            timeurDansHtml.innerHTML = `
            <p>0</p>
        `
            desactiverLesBoutonsOptions()
            boutonSuivantDansHtml.disabled = false
        }
    }, 1000)
}

export default demarrerLeTemps;