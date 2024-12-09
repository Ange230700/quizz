// javascript\functions\creerBoutonsThematiquesDansHtml.js

// import de la liste des thématiques
import listeThematiques from "../data/listeThematiques.js";

// import des fonctions
import changerThematique from "./changerThematique.js";
import activerBoutonThematiqueSelectionne from "./activerBoutonThematiqueSelectionne.js";

// import des éléments HTML récupérés
import { sectionDesBoutonsThematiquesDansHtml } from "../elementsHtmlRecuperes.js";

function creerBoutonsThematiquesDansHtml() {
  // on parcourt la liste des thématiques
  listeThematiques.forEach((thematique) => {
    // on crée un bouton pour chaque thématique dans le HTML
    const boutonThematique = document.createElement("button");

    // on ajoute un attribut 'data-thematique' à chaque bouton
    boutonThematique.setAttribute(
      "data-thematique",
      thematique.data_thematique,
    );

    // on affiche le nom de la thématique dans le bouton
    boutonThematique.innerText = thematique.nom;

    // on écoute l'événement click sur chaque bouton
    boutonThematique.addEventListener("click", () => {
      changerThematique(thematique.data_thematique);
      activerBoutonThematiqueSelectionne(boutonThematique);
    });

    // on ajoute chaque bouton à la section des boutons thématiques dans le HTML
    sectionDesBoutonsThematiquesDansHtml.appendChild(boutonThematique);
  });

  // on ajoute la classe active au premier bouton thématique
  const premierBoutonThematiqueDansHtml = document.querySelector(
    "#thematiques button",
  );
  if (
    premierBoutonThematiqueDansHtml !== null &&
    premierBoutonThematiqueDansHtml !== undefined
  ) {
    activerBoutonThematiqueSelectionne(premierBoutonThematiqueDansHtml);
    changerThematique(
      premierBoutonThematiqueDansHtml.getAttribute("data-thematique"),
    );
  }
}

export default creerBoutonsThematiquesDansHtml;
