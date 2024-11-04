import variables from '../variables.js';
import chargerLaQuestion from './chargerLaQuestion.js';
import mettreAJourProgressBar from './mettreAJourProgressBar.js';
import {
    progressBar
} from '../elementsHtmlRecuperes.js';

function initialiserQuiz() {
    variables.numeroQuestionActuelle = 0;
    variables.score = 0;
    progressBar.value = 0;
    chargerLaQuestion();
    mettreAJourProgressBar();
}

export default initialiserQuiz;