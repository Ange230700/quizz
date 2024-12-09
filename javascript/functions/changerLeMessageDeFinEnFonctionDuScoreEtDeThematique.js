// javascript\functions\changerLeMessageDeFinEnFonctionDuScoreEtDeThematique.js

// import des messages de fin
import tousLesMessagesDeFin from "../data/tousLesMessagesDeFin.js";

// import des variables
import variables from "../variables.js";

// import des éléments HTML récupérés
import { sectionDuMessageDeFinDansHtml } from "../elementsHtmlRecuperes.js";

function changerLeMessageDeFinEnFonctionDuScoreEtDeThematique() {
  // on récupère le bouton thématique actif
  const boutonThematiqueActif = document.querySelector(".active");

  // on récupère la thématique actuelle via l'attribut data-thematique du bouton thématique
  const thematique = boutonThematiqueActif.getAttribute("data-thematique");

  let messageDeFin;

  // on définit le message de fin en fonction du score
  if (variables.score === variables.questionsThematiqueChoisie.length) {
    messageDeFin = tousLesMessagesDeFin[thematique].perfect;
  } else if (
    variables.score >
    (3 * variables.questionsThematiqueChoisie.length) / 4
  ) {
    messageDeFin = tousLesMessagesDeFin[thematique].high;
  } else if (
    variables.score >
    variables.questionsThematiqueChoisie.length / 2
  ) {
    messageDeFin = tousLesMessagesDeFin[thematique].medium;
  } else if (variables.score > 0) {
    messageDeFin = tousLesMessagesDeFin[thematique].low;
  } else {
    messageDeFin = tousLesMessagesDeFin[thematique].fail;
  }

  // on affiche le message de fin
  sectionDuMessageDeFinDansHtml.innerText = messageDeFin;

  // on retourne le message de fin
  sectionDuMessageDeFinDansHtml.style.display = "block";

  return messageDeFin;
}

export default changerLeMessageDeFinEnFonctionDuScoreEtDeThematique;
