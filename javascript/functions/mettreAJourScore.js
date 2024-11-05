// javascript\functions\mettreAJourScore.js

// import des variables
import variables from '../variables.js';

// import des éléments HTML récupérés
import {
    scoreDansHtml
} from '../elementsHtmlRecuperes.js';

function mettreAJourScore() {
    scoreDansHtml.innerHTML = `
        <span>${variables.score}</span>
        <div class="separator"></div>
        <span>${variables.questionsThematiqueChoisie.length}</span>
    `;
}

export default mettreAJourScore;