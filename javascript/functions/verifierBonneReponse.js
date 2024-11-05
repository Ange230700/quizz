// javascript\functions\verifierBonneReponse.js

import variables from '../variables.js';

function verifierBonneReponse(reponseJoueur) {
    // On récupère la bonne réponse de la question actuelle
    const bonneReponseDeQuestionActuelle = variables.questionsThematiqueChoisie[variables.numeroQuestionActuelle].reponse;

    // On compare la réponse du joueur avec la bonne réponse
    if (reponseJoueur === bonneReponseDeQuestionActuelle) {
        // On incrémente le score si la réponse est correcte
        variables.score = variables.score + 1;

        return true;
    } else {
        return false;
    }
}

export default verifierBonneReponse;