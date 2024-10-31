// script.js

// on importe le tableau de questions depuis questions.js
import questionsFilmsEtSeries from './javascript/questionsFilmsEtSeries.js';
import questionsMusique from "./javascript/questionsMusique.js";
import questionsTechnologie from "./javascript/questionsTechnologie.js";
import questionsHistoire from "./javascript/questionsHistoire.js";
import questionsCitations from "./javascript/questionsCitations.js";
import questionsMarvel from "./javascript/questionsMarvel.js";

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

const boutonsThematiquesDansHtml = document.querySelectorAll("#thematiques button");

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

chargerLaQuestion();

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

function changerLeMessageEnFonctionDuScore() {
    if (score === questionsThematiqueChoisie.length) {
        questionDansHtml.innerText = "Bravo! T'es un boss des séries!";
    } else if (score > (3 * questionsThematiqueChoisie.length) / 4) {
        questionDansHtml.innerText = "Excellent ! Tu maîtrises vraiment bien tes séries !";
    } else if (score > questionsThematiqueChoisie.length / 2) {
        questionDansHtml.innerText = "Pas mal ! Tu connais bien tes séries !";
    } else if (score > 0) {
        questionDansHtml.innerText = "Pas encore ça, mais tu as de bonnes bases !";
    } else {
        questionDansHtml.innerText = "Tu devrais regarder plus de séries !";
    }
    return questionDansHtml.innerText;
}

function activerBoutonThematiqueSelectionne(boutonThematiqueSelectionne) {
    boutonsThematiquesDansHtml.forEach((bouton) => {
        bouton.classList.remove("active");
    });

    boutonThematiqueSelectionne.classList.add("active");
}

boutonsThematiquesDansHtml.forEach((bouton) => {
    const thematique = bouton.getAttribute("data-thematique");
    if (thematique === "films-et-series") {
        bouton.classList.add("active");
    }
})


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
        // S'il y a plus de questions, on indique que le quiz est terminé
        questionDansHtml.innerText = changerLeMessageEnFonctionDuScore();

        //on vide la section des options dans HTML
        sectionDesOptionsDansHtml.innerHTML = "";

        // // on cache le bouton suivant
        boutonSuivantDansHtml.style.display = "none";

        // on affiche le bouton rejouer
        boutonRejouerDansHtml.style.display = "inline-block";
    }
})

// on ajoute un événement click au bouton rejouer
boutonRejouerDansHtml.addEventListener("click", () => {
    // On remet le score à 0
    score = 0
    scoreDansHtml.innerText = `Score: ${score} / ${questionsThematiqueChoisie.length}`;
    // On remet le numéro de la question actuelle à 0
    numeroQuestionActuelle = 0

    // On cache le bouton rejouer
    boutonRejouerDansHtml.style.display = "none";

    // On affiche le bouton suivant
    boutonSuivantDansHtml.style.display = "inline-block";

    // On charge la question
    chargerLaQuestion();
})

boutonsThematiquesDansHtml.forEach((bouton) => {
    bouton.addEventListener("click", () => {
        activerBoutonThematiqueSelectionne(bouton);
        const thematique = bouton.getAttribute("data-thematique");
        changerThematique(thematique);
    });
});


/* ===================================================== */
