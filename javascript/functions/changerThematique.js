// javascript\functions\changerThematique.js

// import des variables
import variables from "../variables.js";

// import des questions
import questionsFilmsEtSeries from '../data/questionsFilmsEtSeries.js';
import questionsMusique from "../data/questionsMusique.js";
import questionsHarryPotter from "../data/questionsHarryPotter.js";
import questionsJeuxVideos from "../data/questionsJeuxVideos.js";
import questionsCitations from "../data/questionsCitations.js";
import questionsMarvel from "../data/questionsMarvel.js";
import questionsDisney from "../data/questionsDisney.js";

// import des éléments HTML
import {
    scoreDansHtml,
    sectionDuMessageDeFinDansHtml,
    questionDansHtml
} from "../elementsHtmlRecuperes.js";

// import des fonctions
import chargerLaQuestion from "./chargerLaQuestion.js";
import demarrerLeTemps from "./demarrerLeTemps.js";

function changerThematique(thematique) {
    // On change les questions en fonction de la thématique
    switch (thematique) {
        case "films-et-series":
            variables.questionsThematiqueChoisie = questionsFilmsEtSeries;
            break;
        case "musique":
            variables.questionsThematiqueChoisie = questionsMusique;
            break;
        case "harry-potter":
            variables.questionsThematiqueChoisie = questionsHarryPotter;
            break;
        case "citations":
            variables.questionsThematiqueChoisie = questionsCitations;
            break;
        case "marvel":
            variables.questionsThematiqueChoisie = questionsMarvel;
            break;
            case "disney":
            variables.questionsThematiqueChoisie = questionsDisney;
            break;
            case "jeux-videos":
            variables.questionsThematiqueChoisie = questionsJeuxVideos;
            break;
    }

    // On remet le numéro de la question actuelle à 0
    variables.numeroQuestionActuelle = 0

    // On remet le variables.score à 0
    variables.score = 0
    scoreDansHtml.innerHTML = `
        <span>${variables.score}</span>
        <div class="separator"></div>
        <span>${variables.questionsThematiqueChoisie.length}</span>
    `;

    // On cache le message de fin
    sectionDuMessageDeFinDansHtml.style.display = "none";

    // On affiche la question
    questionDansHtml.style.display = "block";

    chargerLaQuestion();
    demarrerLeTemps();
}

export default changerThematique;