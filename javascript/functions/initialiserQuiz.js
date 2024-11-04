// import des variables
import variables from '../variables.js';

// import des fonctions
import chargerLaQuestion from './chargerLaQuestion.js';
import mettreAJourProgressBar from './mettreAJourProgressBar.js';

// import des éléments HTML récupérés
import {
    progressBar
} from '../elementsHtmlRecuperes.js';

function initialiserQuiz() {
    // Initialisation des variables
    variables.numeroQuestionActuelle = 0;
    variables.score = 0;
    progressBar.value = 0;

    chargerLaQuestion();
    mettreAJourProgressBar();
}

export default initialiserQuiz;