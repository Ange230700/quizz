// on importe le tableau de questions depuis questions.js
import questions from './questions.js';

let numeroQuestionActuelle = 0;

let score = 0

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
scoreDansHtml.innerHTML = `<span>${score}</span> <div class="separator"></div> <span>${questions.length}</span>`;


//on récupère l'element HTML de l'image de la question
const imageQuestionDansHtml = document.querySelector(".test");

/* ==================================== */

/* =============== FONCTIONS =============== */

function desactiverLesBoutonsOptions() {
    const boutonOptionsDansHtml = document.querySelectorAll(".option");

    boutonOptionsDansHtml.forEach((bouton) => {
        bouton.disabled = true;
    });
}

function verifierBonneReponse(reponseJoueur) {
    const bonneReponseDeQuestionActuelle = questions[numeroQuestionActuelle].reponse;

    if (reponseJoueur === bonneReponseDeQuestionActuelle) {
        score = score + 1;
        return true;
    } else {
        return false
    }
}

function changerImageEnFonctionDeLaQuestion() {
    const questionActuelle = questions[numeroQuestionActuelle];
    if (questionActuelle.image) {
        document.querySelector(".test").src = questionActuelle.image;
    }
}



function chargerLaQuestion() {
    //on vide la section des options dans HTML
    sectionDesOptionsDansHtml.innerHTML = "";

    // on récupère la question actuelle
    const questionActuelle = questions[numeroQuestionActuelle];

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
                scoreDansHtml.innerHTML = `<span>${score}</span> <div class="separator"></div> <span>${questions.length}</span>`;
                   // Ajoute la coche ✔️
                   boutonDansHtml.innerHTML = `<span class="coche">✔️</span> ${choix}`;


            } else {
                boutonDansHtml.innerHTML = `<span class="croix-style">❌</span> ${choix}`
                scoreDansHtml.innerHTML = `<span>${score}</span> <div class="separator"></div> <span>${questions.length}</span>`;
                boutonSuivantDansHtml.disabled = false;

            }


            // Retire la classe d'animation après un certain temps pour permettre un nouveau clignotement à l'avenir
            setTimeout(() => {
                boutonDansHtml.classList.remove("clignotant");
            }, 1000); // Retire après 1 seconde
        });
    });



    // on désactive le bouton suivant
    boutonSuivantDansHtml.disabled = true;
}

chargerLaQuestion();

function changerLeMessageEnFonctionDuScore() {
    if (score === questions.length) {
        questionDansHtml.innerText = "Bravo! T'es un boss des séries!";
    } else if (score > (3 * questions.length) / 4) {
        questionDansHtml.innerText = "Excellent ! Tu maîtrises vraiment bien tes séries !";
    } else if (score > questions.length / 2) {
        questionDansHtml.innerText = "Pas mal ! Tu connais bien tes séries !";
    } else if (score > 0) {
        questionDansHtml.innerText = "Pas encore ça, mais tu as de bonnes bases !";
    } else {
        questionDansHtml.innerText = "Tu devrais regarder plus de séries !";
    }
    return questionDansHtml.innerText;
}

function mettreAJourScore() {
    scoreDansHtml.innerHTML = `
        <span>${score}</span>
        <div class="separator"></div>
        <span>${questions.length}</span>
    `;
}


mettreAJourScore();




/* ============================================== */

/* =============== GESTION DES ÉVÉNEMENTS =============== */

// on ajoute un événement click au bouton suivant
boutonSuivantDansHtml.addEventListener("click", () => {
    // On incrémente le numéro de la question actuelle
    numeroQuestionActuelle = numeroQuestionActuelle + 1;

    // On vérifie si il reste des questions
    if (numeroQuestionActuelle < questions.length) {
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

        // Masque l'image de la question
        imageQuestionDansHtml.style.display = "none";
    }
})

// on ajoute un événement click au bouton rejouer
boutonRejouerDansHtml.addEventListener("click", () => {
    // On remet le score à 0
    score = 0
    scoreDansHtml.innerText = `${score} / ${questions.length}`;
    // On remet le numéro de la question actuelle à 0
    numeroQuestionActuelle = 0

    // On cache le bouton rejouer
    boutonRejouerDansHtml.style.display = "none";

    // On affiche le bouton suivant
    boutonSuivantDansHtml.style.display = "inline-block";

    // On charge la question
    chargerLaQuestion();
})

/* ===================================================== */
