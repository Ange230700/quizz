// javascript\functions\arreterLeTemps.js

import variables from "../variables.js";

function arreterLeTemps() {
  // si le timer est en cours, on l'arrête
  if (variables.timer) {
    // arrête le compte à rebours
    clearInterval(variables.timer);

    // réinitialise le timer
    variables.timer = null;
  }
}

export default arreterLeTemps;
