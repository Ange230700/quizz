import variables from '../variables.js';

function arreterLeTemps() {
    if (variables.timer) { // arrete le variables.timer
        clearInterval(variables.timer)
        variables.timer = null
    }
}

export default arreterLeTemps;