// script.js

// on importe le tableau de questions depuis questions.js
import questions from './questions.js';
let numeroQuestionActuelle = 0;

// on récupère les éléments HTML pour la question 
const questionDansHtml = document.querySelector(".question");

//on récupère les éléments HTML pour les options
const sectionDesOptionsDansHtml = document.querySelector(".options");

// on récupère les éléments HTML pour le bouton suivant
const boutonSuivantDansHtml = document.querySelector("#bouton-suivant");

// on récupère la section quiz dans le HTML
const sectionQuizDansHtml = document.querySelector("#section-quiz");

// on récupère le bouton rejouer dans le HTML
const boutonRejouerDansHtml = document.querySelector("#bouton-rejouer");



function chargerLaQuestion() {
    //on vide la section des options dans HTML
    sectionDesOptionsDansHtml.innerHTML = "";

    // on récupère la question actuelle
    const questionActuelle = questions[numeroQuestionActuelle];

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
    });
}

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
        questionDansHtml.innerText = 'Quiz terminé';

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
    // On remet le numéro de la question actuelle à 0
    numeroQuestionActuelle = 0

    // On cache le bouton rejouer
    boutonRejouerDansHtml.style.display = "none";

    // On affiche le bouton suivant
    boutonSuivantDansHtml.style.display = "inline-block";

    // On charge la question
    chargerLaQuestion();

})

chargerLaQuestion();

const boutonsOptionsDansHtml = document.querySelectorAll(".option");

boutonsOptionsDansHtml.forEach((bouton) => {
    bouton.addEventListener("click", () => {
        if (verifierBonneReponse(bouton.innerText)
            === true
        )
        {
            bouton.style.backgroundColor = "green";
            bouton.style.color = "white";
        } else {
            bouton.style.backgroundColor = "red";
            bouton.style.color = "white";
        }
    });
})

function verifierBonneReponse(reponseJoueur) {
    const bonneReponseDeQuestionActuelle = questions[numeroQuestionActuelle].reponse;

    if (reponseJoueur === bonneReponseDeQuestionActuelle) {
        return true;
    } else {
        return false
    }
}

