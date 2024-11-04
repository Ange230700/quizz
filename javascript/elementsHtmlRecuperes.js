// on récupère le titre h1 dont l'attribut classe est 'question' dans le HTML
const questionDansHtml = document.querySelector(".question");

// on récupère la section dont l'attribut classe est 'options' dans le HTML
const sectionDesOptionsDansHtml = document.querySelector(".options");

// on récupère le bouton dont l'attribut id est 'bouton-suivant' dans le HTML
const boutonSuivantDansHtml = document.querySelector("#bouton-suivant");

// on récupère le bouton dont l'attribut id est 'bouton-rejouer' dans le HTML
const boutonRejouerDansHtml = document.querySelector("#bouton-rejouer");

// on récupère le titre h1 dont l'attribut id est 'score'
const scoreDansHtml = document.querySelector("#score");

// on récupère l'élément html du timer
const timeurDansHtml = document.querySelector("#timer")

// on récupère la section des boutons thématiques dans le HTML
const sectionDesBoutonsThematiquesDansHtml = document.querySelector("#thematiques");

// on récupère la section du message de fin dans le HTML
const sectionDuMessageDeFinDansHtml = document.querySelector("#message-de-fin-de-quiz");

// on récupère l'image de la question dont l'attribut classe est 'test' dans le HTML
const imageQuestionDansHtml = document.querySelector(".test");

// on récupère la barre de progression dans le HTML
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