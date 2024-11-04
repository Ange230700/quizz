import variables from '../variables.js';

function verifierBonneReponse(reponseJoueur) {
    const bonneReponseDeQuestionActuelle = variables.questionsThematiqueChoisie[variables.numeroQuestionActuelle].reponse;

    if (reponseJoueur === bonneReponseDeQuestionActuelle) {
        variables.score = variables.score + 1;
        return true;
    } else {
        return false
    }
}

export default verifierBonneReponse;