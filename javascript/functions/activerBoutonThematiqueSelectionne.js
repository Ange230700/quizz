function activerBoutonThematiqueSelectionne(boutonThematiqueSelectionne) {
    // on récupère les boutons thématiques dans le HTML
    const boutonsThematiquesDansHtml = document.querySelectorAll("#thematiques button");

    // on parcourt les boutons thématiques dans le HTML
    boutonsThematiquesDansHtml.forEach((boutonThematique) => {
        // on enlève la classe active à tous les boutons thématiques
        boutonThematique.classList.remove("active");
    });

    // on ajoute la classe active au bouton thématique sélectionné
    boutonThematiqueSelectionne.classList.add("active");
}

export default activerBoutonThematiqueSelectionne;