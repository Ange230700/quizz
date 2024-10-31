// script.js

import listeThematiques from './javascript/listeThematiques.js';
import questionsFilmsEtSeries from './javascript/questionsFilmsEtSeries.js';
import questionsMusique from "./javascript/questionsMusique.js";
import questionsTechnologie from "./javascript/questionsTechnologie.js";
import questionsHistoire from "./javascript/questionsHistoire.js";
import questionsCitations from "./javascript/questionsCitations.js";
import questionsMarvel from "./javascript/questionsMarvel.js";
import tousLesMessagesDeFin from "./javascript/tousLesMessagesDeFin.js";

/* ===== DECLARATION DE VARIABLES POUR LA LOGIQUE ===== */

// on choisit une thématique par défaut
let questionsThematiqueChoisie = questionsFilmsEtSeries;

// on initialise le numéro de la question actuelle à 0
let numeroQuestionActuelle = 0;

// on initialise le score à 0
let score = 0

/* ===================================================== */

/* ======= RECUPERATION ELEMENTS HTML ======= */

// on récupère les éléments HTML pour la question 
const questionDansHtml = document.querySelector(".question");

//on récupère les éléments HTML pour les options
const sectionDesOptionsDansHtml = document.querySelector(".options");

// on récupère les éléments HTML pour le bouton suivant
const boutonSuivantDansHtml = document.querySelector("#bouton-suivant");

// on récupère le bouton rejouer dans le HTML
const boutonRejouerDansHtml = document.querySelector("#bouton-rejouer");

//on récupère l'element HTML de l'id de score
const scoreDansHtml = document.querySelector("#score");
scoreDansHtml.innerText = `Score: ${score} / ${questionsThematiqueChoisie.length}`;

// on récupère la section des boutons thématiques dans le HTML
const sectionDesBoutonsThematiquesDansHtml = document.querySelector("#thematiques");

const sectionDuMessageDeFinDansHtml = document.querySelector("#message-de-fin-de-quiz");


/* ==================================== */

/* =============== FONCTIONS =============== */

function desactiverLesBoutonsOptions() {
    const boutonOptionsDansHtml = document.querySelectorAll(".option");

    boutonOptionsDansHtml.forEach((bouton) => {
        bouton.disabled = true;
    });
}

function verifierBonneReponse(reponseJoueur) {
    const bonneReponseDeQuestionActuelle = questionsThematiqueChoisie[numeroQuestionActuelle].reponse;

    if (reponseJoueur === bonneReponseDeQuestionActuelle) {
        score = score + 1;
        return true;
    } else {
        return false
    }
}

function chargerLaQuestion() {
    //on vide la section des options dans HTML
    sectionDesOptionsDansHtml.innerHTML = "";

    // on récupère la question actuelle
    const questionActuelle = questionsThematiqueChoisie[numeroQuestionActuelle];

    //on injecte la question actuelle dans le HTML
    questionDansHtml.innerText = questionActuelle.texte;

    //on injecte les choix dans le tableau de choix de la question actuelle dans le HTML
    questionActuelle.tableauDeChoix.forEach((choix) => {
        // on crée un bouton pour chaque option dans le HTML
        const boutonDansHtml = document.createElement("button");

        // on affiche le texte de tableau de choix dans la section de classe options HTML
        boutonDansHtml.innerText = choix;

        // on ajoute une classe option du CSS à chaque bouton
        boutonDansHtml.classList.add("option");

        // on ajoute chaque bouton à la section des options dans le HTML
        sectionDesOptionsDansHtml.appendChild(boutonDansHtml);


        // on ajoute un événement click à chaque bouton
        boutonDansHtml.addEventListener("click", () => {
            desactiverLesBoutonsOptions();
            if (verifierBonneReponse(boutonDansHtml.innerText) === true) {
                boutonDansHtml.style.backgroundColor = "green";
                boutonDansHtml.style.color = "white";
                boutonSuivantDansHtml.disabled = false;
                scoreDansHtml.innerText = `Score: ${score} / ${questionsThematiqueChoisie.length}`;

            } else {
                boutonDansHtml.style.backgroundColor = "red";
                boutonDansHtml.style.color = "white";
                boutonSuivantDansHtml.disabled = false;
                scoreDansHtml.innerText = `Score: ${score} / ${questionsThematiqueChoisie.length}`;
            }
        });
    });


    // on désactive le bouton suivant
    boutonSuivantDansHtml.disabled = true;
}

function changerThematique(thematique) {
    switch (thematique) {
        case "films-et-series":
            questionsThematiqueChoisie = questionsFilmsEtSeries;
            break;
        case "musique":
            questionsThematiqueChoisie = questionsMusique;
            break;
        case "technologie":
            questionsThematiqueChoisie = questionsTechnologie;
            break;
        case "histoire":
            questionsThematiqueChoisie = questionsHistoire;
            break;
        case "citations":
            questionsThematiqueChoisie = questionsCitations;
            break;
        case "marvel":
            questionsThematiqueChoisie = questionsMarvel;
            break;
    }

    // On remet le numéro de la question actuelle à 0
    numeroQuestionActuelle = 0

    // On remet le score à 0
    score = 0
    scoreDansHtml.innerText = `Score: ${score} / ${questionsThematiqueChoisie.length}`;

    chargerLaQuestion();
}

function changerLeMessageDeFinEnFonctionDuScoreEtDeThematique() {
    // on récupère le bouton thématique actif
    const boutonThematiqueActif = document.querySelector(".active");

    // on récupère la thématique actuelle via l'attribut data-thematique du bouton thématique
    const thematique = boutonThematiqueActif.getAttribute("data-thematique");

    let messageDeFin;
    if (score === questionsThematiqueChoisie.length) {
        messageDeFin = tousLesMessagesDeFin[thematique].perfect;
    } else if (score > (3 * questionsThematiqueChoisie.length) / 4) {
        messageDeFin = tousLesMessagesDeFin[thematique].high;
    } else if (score > questionsThematiqueChoisie.length / 2) {
        messageDeFin = tousLesMessagesDeFin[thematique].medium;
    } else if (score > 0) {
        messageDeFin = tousLesMessagesDeFin[thematique].low;
    } else {
        messageDeFin = tousLesMessagesDeFin[thematique].fail;
    }
    
    sectionDuMessageDeFinDansHtml.innerText = messageDeFin;
    sectionDuMessageDeFinDansHtml.style.display = "block";
    return messageDeFin;
}

function activerBoutonThematiqueSelectionne(boutonThematiqueSelectionne) {
    // on récupère les boutons thématiques dans le HTML
    const boutonsThematiquesDansHtml = document.querySelectorAll("#thematiques button");

    // on parcourt les boutons thématiques dans le HTML
    boutonsThematiquesDansHtml.forEach((boutonThematique) => {
        // on enlève la classe active à tous les boutons thématiques
        boutonThematique.classList.remove("active");
    });

    // on ajoute la classe active au bouton thématique sélectionné
    boutonThematiqueSelectionne.classList.add("active");
}

function creerBoutonsThematiquesDansHtml() {
    listeThematiques.forEach((thematique, index) => {
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

creerBoutonsThematiquesDansHtml();
chargerLaQuestion();

/* ============================================== */


/* =============== GESTION DES ÉVÉNEMENTS =============== */

// on ajoute un événement click au bouton suivant
boutonSuivantDansHtml.addEventListener("click", () => {
    // On incrémente le numéro de la question actuelle
    numeroQuestionActuelle = numeroQuestionActuelle + 1;

    // On vérifie si il reste des questions
    if (numeroQuestionActuelle < questionsThematiqueChoisie.length) {
        // On charge la question
        chargerLaQuestion();
    } else {
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
    }
});

// on ajoute un événement click au bouton rejouer
boutonRejouerDansHtml.addEventListener("click", () => {
    // On remet le score à 0
    score = 0
    scoreDansHtml.innerText = `Score: ${score} / ${questionsThematiqueChoisie.length}`;
    // On remet le numéro de la question actuelle à 0
    numeroQuestionActuelle = 0

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
})



/* ===================================================== */
