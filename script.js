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
        
    }
})

// on ajoute un événement click au bouton rejouer
boutonRejouerDansHtml.addEventListener("click", () => {
    // On remet le numéro de la question actuelle à 0
    numeroQuestionActuelle = 0

    // On cache le bouton rejouer
    boutonRejouerDansHtml.style.display = "none";

    // On affiche le bouton suivant
    //boutonSuivantDansHtml.style.display = "inline-block";

    // On remet le texte de la section quiz à vide
    sectionQuizDansHtml.innerHTML = `
     <h1 class="question"></h1>

      <section class="options"></section>
      <section class="section-bouton">
        <button class="bouton-clique-en-bas-a-droite" id="bouton-suivant">Suivant</button>
        <button class="bouton-clique-en-bas-a-droite" id="bouton-rejouer" style="display: none;">Rejouer</button>
      </section>
    `;

    // On charge la question
    chargerLaQuestion();

})
// // on récupère la première question dans le tableau de question
// const premiereQuestion = questions[0];

// // on affiche le texte de la question de question.js dans le HTML
// questionDansHtml.innerText = premiereQuestion.texte;

// // on affiche les options de la question de question.js dans le HTML
// premiereQuestion.tableauDeChoix.forEach((choix) => {
//     // on crée un bouton pour chaque option dans le HTML
//     const boutonDansHtml = document.createElement("button");

//     // on affiche le texte de tableau de choix dans la section de classe options HTML
//     boutonDansHtml.innerText = choix;

//     // on ajoute une classe option du CSS à chaque bouton
//     boutonDansHtml.classList.add("option");

//     // on ajoute chaque bouton à la section des options dans le HTML
//     sectionDesOptionsDansHtml.appendChild(boutonDansHtml);
// });

// on appelle la fonction chargerLaQuestion
chargerLaQuestion();

