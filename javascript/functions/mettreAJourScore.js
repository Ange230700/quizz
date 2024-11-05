// javascript\functions\mettreAJourScore.js

// import des variables
import variables from '../variables.js';

// import des éléments HTML récupérés
import {
    scoreDansHtml
} from '../elementsHtmlRecuperes.js';

function mettreAJourScore() {
    scoreDansHtml.innerText = `${variables.score} pts`;
}

export default mettreAJourScore;