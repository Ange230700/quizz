import listeThematiques from "../data/listeThematiques.js";
import changerThematique from "./changerThematique.js";
import activerBoutonThematiqueSelectionne from "./activerBoutonThematiqueSelectionne.js";
import {
    sectionDesBoutonsThematiquesDansHtml
} from "../elementsHtmlRecuperes.js";

function creerBoutonsThematiquesDansHtml() {
    listeThematiques.forEach((thematique) => {
        const boutonThematique = document.createElement("button");
        boutonThematique.setAttribute("data-thematique", thematique.data_thematique);
        boutonThematique.innerText = thematique.nom;

        boutonThematique.addEventListener("click", () => {
            changerThematique(thematique.data_thematique);
            activerBoutonThematiqueSelectionne(boutonThematique);
        });

        sectionDesBoutonsThematiquesDansHtml.appendChild(boutonThematique);
    });

    // on ajoute la classe active au premier bouton thématique
    const premierBoutonThematiqueDansHtml = document.querySelector("#thematiques button");
    if (premierBoutonThematiqueDansHtml !== null && premierBoutonThematiqueDansHtml !== undefined) {
        activerBoutonThematiqueSelectionne(premierBoutonThematiqueDansHtml);
        changerThematique(premierBoutonThematiqueDansHtml.getAttribute("data-thematique"));
    }
}

export default creerBoutonsThematiquesDansHtml;