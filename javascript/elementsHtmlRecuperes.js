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
const timeurDansHtml = document.querySelector("#timer")

// on récupère la section des boutons thématiques dans le HTML
const sectionDesBoutonsThematiquesDansHtml = document.querySelector("#thematiques");

// on récupère la section du message de fin dans le HTML
const sectionDuMessageDeFinDansHtml = document.querySelector("#message-de-fin-de-quiz");

//on récupère l'element HTML de l'image de la question
const imageQuestionDansHtml = document.querySelector(".test");

//on récupère l'élément HTML de la barre de progression
const progressBar = document.querySelector("#progressBar");

export {
    questionDansHtml,
    sectionDesOptionsDansHtml,
    boutonSuivantDansHtml,
    boutonRejouerDansHtml,
    scoreDansHtml,
    timeurDansHtml,
    sectionDesBoutonsThematiquesDansHtml,
    sectionDuMessageDeFinDansHtml,
    imageQuestionDansHtml,
    progressBar
};