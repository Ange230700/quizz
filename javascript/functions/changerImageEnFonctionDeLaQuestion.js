// javascript\functions\changerImageEnFonctionDeLaQuestion.js

import variables from '../variables.js';

function changerImageEnFonctionDeLaQuestion() {
    // On récupère la question actuelle
    const questionActuelle = variables.questionsThematiqueChoisie[variables.numeroQuestionActuelle];

    // On vérifie si la question actuelle a une image
    if (questionActuelle.image) {
        // On change l'image en fonction de la question actuelle
        document.querySelector(".test").src = questionActuelle.image;
    }
}

export default changerImageEnFonctionDeLaQuestion;