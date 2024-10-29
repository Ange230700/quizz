// script.js

// on importe le tableau de questions depuis questions.js
import questions from './questions.js';

// on récupère les éléments HTML pour la question 
const questionDansHtml = document.querySelector(".question");

//on récupère les éléments HTML pour les options
const sectionDesOptionsDansHtml = document.querySelector(".options");

// on récupère la première question dans le tableau de question
const premiereQuestion = questions[0];

// on affiche le texte de la question de question.js dans le HTML
questionDansHtml.innerText = premiereQuestion.texte;

// on affiche les options de la question de question.js dans le HTML
premiereQuestion.tableauDeChoix.forEach((choix) => {
    // on crée un bouton pour chaque option dans le HTML
    const boutonDansHtml = document.createElement("button");
    
    // on affiche le texte de tableau de choix dans la section de classe options HTML
    boutonDansHtml.innerText = choix;
   
    // on ajoute une classe option du CSS à chaque bouton
    boutonDansHtml.classList.add("option");
    
    // on ajoute chaque bouton à la section des options dans le HTML
    sectionDesOptionsDansHtml.appendChild(boutonDansHtml);
});

