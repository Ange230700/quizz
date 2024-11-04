import variables from '../variables.js';
import {
    progressBar
} from '../elementsHtmlRecuperes.js';

function mettreAJourProgressBar() {
    // Calcul de la progression en fonction du numéro de la question actuelle
    let progression = (variables.numeroQuestionActuelle / variables.questionsThematiqueChoisie.length) * 100;

    // S'assurer que la progression n'excède pas 100%
    progression = Math.min(progression, 100);

    // Mettre à jour la valeur de la barre de progression
    progressBar.value = progression;

    console.log(`Progression: ${progression}%`); // Debug
}

export default mettreAJourProgressBar;