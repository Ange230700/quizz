// javascript\functions\mettreAJourProgressBar.js

// import des variables
import variables from "../variables.js";

// import des éléments HTML récupérés
import { progressBar } from "../elementsHtmlRecuperes.js";

function mettreAJourProgressBar() {
  // Calcul de la progression en fonction du numéro de la question actuelle
  let progression =
    (variables.numeroQuestionActuelle /
      variables.questionsThematiqueChoisie.length) *
    100;

  // S'assurer que la progression n'excède pas 100%
  progression = Math.min(progression, 100);

  // Mettre à jour la valeur de la barre de progression
  progressBar.value = progression;
}

export default mettreAJourProgressBar;
