// javascript\variables.js

// on importe les questions de la thématique active par défaut
import questionsFilmsEtSeries from "./data/questionsFilmsEtSeries.js";

// on définit les variables du quiz
const variables = {
  questionsThematiqueChoisie: questionsFilmsEtSeries,
  numeroQuestionActuelle: 0,
  score: 0,
  tempsRestant: 5,
  timer: null,
};

export default variables;
