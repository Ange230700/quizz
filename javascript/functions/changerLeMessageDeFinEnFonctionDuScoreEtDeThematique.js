import variables from "../variables.js";
import tousLesMessagesDeFin from "../data/tousLesMessagesDeFin.js";
import {
    sectionDuMessageDeFinDansHtml
} from "../elementsHtmlRecuperes.js";

function changerLeMessageDeFinEnFonctionDuScoreEtDeThematique() {
    // on récupère le bouton thématique actif
    const boutonThematiqueActif = document.querySelector(".active");

    // on récupère la thématique actuelle via l'attribut data-thematique du bouton thématique
    const thematique = boutonThematiqueActif.getAttribute("data-thematique");

    let messageDeFin;
    if (variables.score === variables.questionsThematiqueChoisie.length) {
        messageDeFin = tousLesMessagesDeFin[thematique].perfect;
    } else if (variables.score > (3 * variables.questionsThematiqueChoisie.length) / 4) {
        messageDeFin = tousLesMessagesDeFin[thematique].high;
    } else if (variables.score > variables.questionsThematiqueChoisie.length / 2) {
        messageDeFin = tousLesMessagesDeFin[thematique].medium;
    } else if (variables.score > 0) {
        messageDeFin = tousLesMessagesDeFin[thematique].low;
    } else {
        messageDeFin = tousLesMessagesDeFin[thematique].fail;
    }

    sectionDuMessageDeFinDansHtml.innerText = messageDeFin;
    sectionDuMessageDeFinDansHtml.style.display = "block";
    return messageDeFin;
}

export default changerLeMessageDeFinEnFonctionDuScoreEtDeThematique;