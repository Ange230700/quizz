// import des variables pour les utiliser dans la logique du quiz
import variables from "./javascript/variables.js";

// import des éléments HTML récupérés
import {
    questionDansHtml,
    sectionDesOptionsDansHtml,
    boutonSuivantDansHtml,
    boutonRejouerDansHtml,
    scoreDansHtml,
    sectionDuMessageDeFinDansHtml,
    imageQuestionDansHtml,
    progressBar
} from "./javascript/elementsHtmlRecuperes.js";

// import des fonctions
import chargerLaQuestion from "./javascript/functions/chargerLaQuestion.js";
import mettreAJourScore from "./javascript/functions/mettreAJourScore.js";
import changerLeMessageDeFinEnFonctionDuScoreEtDeThematique from "./javascript/functions/changerLeMessageDeFinEnFonctionDuScoreEtDeThematique.js";
import creerBoutonsThematiquesDansHtml from "./javascript/functions/creerBoutonsThematiquesDansHtml.js";
import mettreAJourProgressBar from "./javascript/functions/mettreAJourProgressBar.js";
import initialiserQuiz from "./javascript/functions/initialiserQuiz.js";

// Appel des fonctions
mettreAJourScore();
creerBoutonsThematiquesDansHtml();
initialiserQuiz();

/* =============== MANIPULATION DU DOM =============== */

scoreDansHtml.innerHTML = `
    <span>${variables.score}</span>
    <div class="separator"></div>
    <span>${variables.questionsThematiqueChoisie.length}</span>
`;

/* =============== GESTION DES ÉVÉNEMENTS =============== */

// on ajoute un événement click au bouton suivant
boutonSuivantDansHtml.addEventListener("click", () => {
    // On incrémente le numéro de la question actuelle
    variables.numeroQuestionActuelle = variables.numeroQuestionActuelle + 1;

    // On vérifie si il reste des questions
    if (variables.numeroQuestionActuelle < variables.questionsThematiqueChoisie.length) {
        // On charge la question
        chargerLaQuestion();

        // On met à jour la barre de progression
        mettreAJourProgressBar();
    } else {
        // On met à jour la barre de progression
        mettreAJourProgressBar();

        // On change le message de fin en fonction du score
        changerLeMessageDeFinEnFonctionDuScoreEtDeThematique();

        //on vide la section des options dans HTML
        sectionDesOptionsDansHtml.innerHTML = "";

        // on cache la question
        questionDansHtml.style.display = "none";

        // on cache le bouton suivant
        boutonSuivantDansHtml.style.display = "none";

        // on affiche le bouton rejouer
        boutonRejouerDansHtml.style.display = "inline-block";

        // Masque l'image de la question
        imageQuestionDansHtml.style.display = "none";
    }
});

// on ajoute un événement click au bouton rejouer
boutonRejouerDansHtml.addEventListener("click", () => {
    // On remet le score à 0
    variables.score = 0

    // On remet la barre de progression à 0
    progressBar.value = 0;

    // On remet le numéro de la question actuelle à 0
    variables.numeroQuestionActuelle = 0

    scoreDansHtml.innerHTML = `
        <span>${variables.score}</span>
        <div class="separator"></div>
        <span>${variables.questionsThematiqueChoisie.length}</span>
    `;

    // On cache le message de fin
    sectionDuMessageDeFinDansHtml.style.display = "none";

    // On affiche la question
    questionDansHtml.style.display = "block";

    // On cache le bouton rejouer
    boutonRejouerDansHtml.style.display = "none";

    // On affiche le bouton suivant
    boutonSuivantDansHtml.style.display = "inline-block";

    // On charge la question
    chargerLaQuestion();
});
