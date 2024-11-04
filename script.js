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

let tempsRestant = 15

let timer = null

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

// on récupère l'élément html du timer
const timmeurDansHtml = document.querySelector("#timer")

// on récupère la section des boutons thématiques dans le HTML
const sectionDesBoutonsThematiquesDansHtml = document.querySelector("#thematiques");

const sectionDuMessageDeFinDansHtml = document.querySelector("#message-de-fin-de-quiz");

scoreDansHtml.innerHTML = `<span>${score}</span> <div class="separator"></div> <span>${questionsThematiqueChoisie.length}</span>`;

//on récupère l'element HTML de l'image de la question
const imageQuestionDansHtml = document.querySelector(".test");

//on récupère l'élément HTML de la barre de progression
const progressBar = document.querySelector("#progressBar");

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


function demarerLeTemps() {
    if (timer) return;
    //initialise le temps
    tempsRestant = 15
    //affiche les 30 secondes et le texte temps restant
    timmeurDansHtml.innerText = "Temps Restant " + tempsRestant

    timer = setInterval(() => {
        tempsRestant--
        timmeurDansHtml.innerText = "Temps Restant " + tempsRestant

        if (tempsRestant <= 0) {
            clearInterval(timer)
            timmeurDansHtml.innerText = "Temps Écoulé"
            desactiverLesBoutonsOptions()
            boutonSuivantDansHtml.disabled = false
        }
    }, 1000)
}

function arreterLeTemps() {
    if (timer) { //arrete le timer
        clearInterval(timer)
        timer = null
    }
}

function changerImageEnFonctionDeLaQuestion() {
    const questionActuelle = questionsThematiqueChoisie[numeroQuestionActuelle];
    if (questionActuelle.image) {
        document.querySelector(".test").src = questionActuelle.image;
    }
}

function chargerLaQuestion() {
    //on vide la section des options dans HTML
    sectionDesOptionsDansHtml.innerHTML = "";

    // on récupère la question actuelle
    const questionActuelle = questionsThematiqueChoisie[numeroQuestionActuelle];

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

        // on ajoute une classe option du CSS à chaque bouton
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
                boutonSuivantDansHtml.disabled = false;
                scoreDansHtml.innerHTML = `<span>${score}</span> <div class="separator"></div> <span>${questionsThematiqueChoisie.length}</span>`;
                // Ajoute la coche ✔️
                boutonDansHtml.innerHTML = `<span class="coche">✔️</span> ${choix}`;

            } else {
                boutonDansHtml.innerHTML = `<span class="croix-style">❌</span> ${choix}`
                scoreDansHtml.innerHTML = `<span>${score}</span> <div class="separator"></div> <span>${questionsThematiqueChoisie.length}</span>`;
                boutonSuivantDansHtml.disabled = false;
            }


            // Retire la classe d'animation après un certain temps pour permettre un nouveau clignotement à l'avenir
            setTimeout(() => {
                boutonDansHtml.classList.remove("clignotant");
            }, 1000); // Retire après 1 seconde
        });
    });

    demarerLeTemps()
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
    scoreDansHtml.innerHTML = `<span>${score}</span> <div class="separator"></div> <span>${questionsThematiqueChoisie.length}</span>`;

    // On cache le message de fin
    sectionDuMessageDeFinDansHtml.style.display = "none";

    // On affiche la question
    questionDansHtml.style.display = "block";

    chargerLaQuestion();
}

function mettreAJourScore() {
    scoreDansHtml.innerHTML = `
        <span>${score}</span>
        <div class="separator"></div>
        <span>${questionsThematiqueChoisie.length}</span>
    `;
}


mettreAJourScore();

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


function mettreAJourProgressBar() {
       // Calcul de la progression en fonction du numéro de la question actuelle
       let progression = (numeroQuestionActuelle / questionsThematiqueChoisie.length) * 100;

       // S'assurer que la progression n'excède pas 100%
       progression = Math.min(progression, 100);
   
       // Mettre à jour la valeur de la barre de progression
       progressBar.value = progression;
   
       console.log(`Progression: ${progression}%`); // Debug
   }



function initialiserQuiz() {
    numeroQuestionActuelle = 0;
    score = 0;
    progressBar.value = 0;
    chargerLaQuestion();
    mettreAJourProgressBar();
}




creerBoutonsThematiquesDansHtml();



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
        mettreAJourProgressBar();

    } else {

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
    score = 0
    progressBar.value = 0;
    // On remet le numéro de la question actuelle à 0
    numeroQuestionActuelle = 0

    scoreDansHtml.innerHTML = `<span>${score}</span> <div class="separator"></div> <span>${questionsThematiqueChoisie.length}</span>`;


    // On cache le message de fin
    sectionDuMessageDeFinDansHtml.style.display = "none";

    // On affiche la question
    questionDansHtml.style.display = "block";

    // On cache le bouton rejouer
    boutonRejouerDansHtml.style.display = "none";

    // On affiche le bouton suivant
    boutonSuivantDansHtml.style.display = "inline-block";

    //a retirer si ne fonctionne pas
    // On remet à jour la barre de progression  

    //-----------------------------------------
    // On charge la question
    chargerLaQuestion();
})

initialiserQuiz();






