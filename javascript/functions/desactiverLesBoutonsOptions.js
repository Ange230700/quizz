// javascript\functions\desactiverLesBoutonsOptions.js

// javascript\functions\desactiverLesBoutonsOptions.js

function desactiverLesBoutonsOptions() {
  // On récupère tous les boutons options
  const boutonOptionsDansHtml = document.querySelectorAll(".option");

  // On désactive tous les boutons options
  boutonOptionsDansHtml.forEach((bouton) => {
    bouton.disabled = true;
  });
}

export default desactiverLesBoutonsOptions;
