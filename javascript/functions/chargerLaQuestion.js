// javascript\functions\chargerLaQuestion.js

// import des variables
import variables from "../variables.js";

// import des éléments HTML récupérés
import {
    questionDansHtml,
    sectionDesOptionsDansHtml,
    scoreDansHtml,
    boutonSuivantDansHtml
} from "../elementsHtmlRecuperes.js";

// import des fonctions
import desactiverLesBoutonsOptions from "./desactiverLesBoutonsOptions.js";
import verifierBonneReponse from "./verifierBonneReponse.js";
import demarrerLeTemps from "./demarrerLeTemps.js";
import arreterLeTemps from "./arreterLeTemps.js";
import changerImageEnFonctionDeLaQuestion from "./changerImageEnFonctionDeLaQuestion.js";

function chargerLaQuestion() {
    // on vide la section des options dans HTML
    sectionDesOptionsDansHtml.innerHTML = "";

    // on récupère la question actuelle
    const questionActuelle = variables.questionsThematiqueChoisie[variables.numeroQuestionActuelle];

    //on injecte la question actuelle dans le HTML
    questionDansHtml.innerText = questionActuelle.texte;

    // Appelle la fonction pour changer l'image en fonction de la question
    changerImageEnFonctionDeLaQuestion();

    const imageContainer = document.querySelector(".test");  // conteneur pour l'image
    imageContainer.innerHTML = "";  // On vide l'ancien contenu

    //on injecte les choix dans le tableau de choix de la question actuelle dans le HTML
    questionActuelle.tableauDeChoix.forEach((choix) => {

        // on crée un bouton pour chaque option dans le HTML
        const boutonDansHtml = document.createElement("button");

        // on affiche le texte de tableau de choix dans la section de classe options HTML
        boutonDansHtml.innerText = choix;

        // on ajoute une classe CSS 'option' à chaque bouton
        boutonDansHtml.classList.add("option");

        // on ajoute chaque bouton à la section des options dans le HTML
        sectionDesOptionsDansHtml.appendChild(boutonDansHtml);

        // on ajoute un événement click à chaque bouton
        boutonDansHtml.addEventListener("click", () => {
            arreterLeTemps()
            desactiverLesBoutonsOptions();



            // Ajoute la classe d'animation au bouton pour le faire clignoter
            boutonDansHtml.classList.add("clignotant");

            // Ajoute la classe "animated" au score pour déclencher l'animation
            scoreDansHtml.classList.add("animated");

            // Supprime d'abord la classe "animated" si elle est encore présente
            scoreDansHtml.classList.remove("animated");

            // Utilise setTimeout pour forcer le rafraîchissement et permettre le re-déclenchement de l'animation
            setTimeout(() => {
                // Ajoute la classe "animated" au score pour déclencher l'animation
                scoreDansHtml.classList.add("animated");
            }, 0);  // Utiliser un délai de 0 pour permettre le re-déclenchement immédiat


            if (verifierBonneReponse(boutonDansHtml.innerText, choix) === true) {
                // on désactive le bouton suivant
                boutonSuivantDansHtml.disabled = false;

                scoreDansHtml.innerHTML = `
                    <span>${variables.score}</span>
                    <div class="separator"></div>
                    <span>${variables.questionsThematiqueChoisie.length}</span>
                `;

                // Ajoute la coche ✔️
                boutonDansHtml.innerHTML = `<span class="coche">✔️</span> ${choix}`;

            } else {
                boutonDansHtml.innerHTML = `<span class="croix-style">❌</span> ${choix}`;

                scoreDansHtml.innerHTML = `
                    <span>${variables.score}</span>
                    <div class="separator"></div>
                    <span>${variables.questionsThematiqueChoisie.length}</span>
                `;

                // On active le bouton suivant
                boutonSuivantDansHtml.disabled = false;
            }


            // Retire la classe d'animation après un certain temps pour permettre un nouveau clignotement à l'avenir
            setTimeout(() => {
                boutonDansHtml.classList.remove("clignotant");
            }, 1000); // Retire après 1 seconde
        });
    });

    // on redémarre le temps
    demarrerLeTemps();

    // on désactive le bouton suivant
    boutonSuivantDansHtml.disabled = true;
}

export default chargerLaQuestion;