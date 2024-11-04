import variables from '../variables.js';

function changerImageEnFonctionDeLaQuestion() {
    const questionActuelle = variables.questionsThematiqueChoisie[variables.numeroQuestionActuelle];
    if (questionActuelle.image) {
        document.querySelector(".test").src = questionActuelle.image;
    }
}

export default changerImageEnFonctionDeLaQuestion;