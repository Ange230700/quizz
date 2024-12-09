// javascript\functions\demarrerLeTemps.js

// import des variables
import variables from "../variables.js";

// import des fonctions
import desactiverLesBoutonsOptions from "./desactiverLesBoutonsOptions.js";

// import des éléments HTML récupérés
import {
  timeurDansHtml,
  boutonSuivantDansHtml,
} from "../elementsHtmlRecuperes.js";

function demarrerLeTemps() {
  if (variables.timer) return;

  // Initialise le temps
  variables.tempsRestant = 15;

  // Initialise le temps
  variables.tempsRestant = 15;

  // Affiche immédiatement le temps restant
  timeurDansHtml.innerHTML = `<p>${variables.tempsRestant}</p>`;

  // Démarre le compte à rebours immédiatement
  variables.timer = setInterval(() => {
    // Met à jour l'affichage avant la décrémentation
    timeurDansHtml.innerHTML = `<p>${variables.tempsRestant}</p>`;

    // Décrémente le temps restant
    variables.tempsRestant--;

    // Si le temps restant est écoulé, on arrête le temps
    if (variables.tempsRestant <= 0) {
      clearInterval(variables.timer);
      variables.timer = null;

      // Affiche 0 quand le temps est écoulé
      timeurDansHtml.innerHTML = `
                <p>0</p>
            `;

      // Désactive les boutons d'options
      desactiverLesBoutonsOptions();

      // Active le bouton suivant
      boutonSuivantDansHtml.disabled = false;
    }
  }, 1000);
}

export default demarrerLeTemps;
