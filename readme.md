<!-- readme.md -->

**Aperçu**

Il s'agit d'une application web de quiz qui permet aux utilisateurs de répondre à des questions sur différents thèmes. L'application est construite à l'aide de HTML, CSS et JavaScript. Elle comporte un chargement dynamique des questions, un suivi des scores, une barre de progression et un message de fin de quiz basé sur les performances de l'utilisateur.

---

**Structure du code**

1. **HTML (`index.html`)**

   - **Structure** : Le fichier HTML définit la structure de base de l'application de quiz, y compris la barre de progression, l'en-tête, la section principale du quiz et la navigation pour la sélection du thème.
   - **Éléments** :
     - **Barre de progression** : Indique la progression de l'utilisateur dans le quiz.
     - **Header** : Contient la navigation pour les thèmes, un bouton de mise à jour et l'affichage du score.
     - **Section principale** : Affiche le minuteur, l'image de la question, le texte de la question, les options et les boutons de navigation (« Suivant » pour passer à la question suivante et « Rejouer » pour refaire le questionnaire).

2. **Scripts principaux (`script.js`)**

   - **Imports** :
     - **Variables** : Variables centralisées utilisées dans l'ensemble de l'application.
     - **Éléments HTML** : Références aux éléments DOM qui sont manipulés.
     - **Fonctions** : Fonctions modulaires gérant des tâches spécifiques au sein de la logique du quiz.
   - **Initialisation** :
     - Met à jour l'affichage des scores.
     - Crée les boutons de thème dynamiquement.
     - Initialise le quiz en chargeant la première question.
   - **Gestion des événements** :
     - **Bouton suivant** : Passe à la question suivante ou affiche le message de fin de quiz.
     - **Bouton de relecture** : Réinitialise le quiz pour permettre à l'utilisateur de rejouer.

3. **Variables (`variables.js`)**

   - **Objectif** : Stocke l'état de l'application, y compris la série de questions en cours, le numéro de la question en cours, le score de l'utilisateur, le temps restant pour la minuterie.
   - **Valeurs initiales** :
     - **`questionsThematiqueChoisie`** : La valeur initiale est celle des questions « Films et Séries ».
     - **`numeroQuestionActuelle`** : Commence à 0.
     - **`score`** : Commence à 0.
     - **`tempsRestant`** : Fixé à 15 secondes par question.
     - **`timer`** : Initialement `null`.

4. **Fichiers de données (par exemple, `questionsFilmsEtSeries.js`)**

   - **Structure** : Tableaux d'objets de questions pour chaque thème.
   - **Objet question** :
     - **`texte`** : Le texte de la question.
     - **`tableauDeChoix`** : Un tableau de réponses possibles.
     - **`réponse`** : La bonne réponse.
     - **`image`** : URL ou chemin d'accès à une image en rapport avec la question.

5. **Fonctions**

   - **`chargerLaQuestion.js`** : Charge et affiche la question courante et ses options.
   - **`desactiverLesBoutonsOptions.js`** : Désactive les boutons d'option lorsqu'une réponse est sélectionnée ou que le temps est écoulé.
   - **`verifierBonneReponse.js`** : Vérifie si la réponse sélectionnée est correcte et met à jour le score.
   - **`demarrerLeTemps.js`** : Démarre le timer pour chaque question.
   - **`arreterLeTemps.js`** : Arrête le chronomètre lorsqu'une réponse est sélectionnée ou que le temps est écoulé.
   - **`changerImageEnFonctionDeLaQuestion.js`** : Met à jour l'image de la question en fonction de la question en cours.
   - **`mettreAJourScore.js`** : Met à jour l'affichage du score dans l'interface utilisateur.
   - **`changerLeMessageDeFinEnFonctionDuScoreEtDeThematique.js`** : Affiche un message final basé sur le score de l'utilisateur et le thème sélectionné.
   - **`creerBoutonsThematiquesDansHtml.js`** : Crée dynamiquement des boutons de thème dans l'interface utilisateur.
   - **`changerThematique.js`** : Modifie l'ensemble des questions en fonction du thème sélectionné.
   - **`activerBoutonThematiqueSelectionne.js`** : Met en évidence le bouton du thème sélectionné.
   - **`mettreAJourProgressBar.js`** : Met à jour la barre de progression au fur et à mesure que l'utilisateur avance dans le quiz.
   - **`initialiserQuiz.js`** : Réinitialise l'état du quiz et démarre le quiz.

6. **Références aux éléments HTML (`elementsHtmlRecuperes.js`)**

   - Centralise les références aux éléments DOM qui sont fréquemment accédés et manipulés, tels que le texte de la question, la section des options, les boutons, l'affichage du score, le chronomètre et la barre de progression.

---

**Fonctionnalité et flux**

1. **Initialisation du quiz**

   - Le quiz s'initialise avec un thème par défaut (« Films et Séries »).
   - Les boutons de thème sont créés dynamiquement, et le premier thème est défini comme actif.
   - La première question est chargée et affichée.

2. **Chargement de la question (`chargerLaQuestion.js`)**

   - Affiche le texte et les options de la question en cours.
   - Met à jour l'image de la question si elle est disponible.
   - Démarre le minuteur de la question.
   - Désactive le bouton « Suivant » jusqu'à ce qu'une réponse soit sélectionnée ou que le temps soit écoulé.

3. **Sélection des réponses**

   - Lorsque l'utilisateur sélectionne une option, la minuterie s'arrête.
   - L'exactitude de l'option sélectionnée est vérifiée.
     - Si elle est correcte :
       - Le score augmente.
       - Le bouton de l'option est coché.
     - Si elle est incorrecte :
       - Le bouton d'option affiche une croix.
   - Tous les boutons d'option sont désactivés pour éviter les sélections multiples.
   - L'affichage du score est mis à jour par une animation.
   - Le bouton « Suivant » est activé.

4. **Fonctionnalité de minuterie**

   - Chaque question est assortie d'un minuteur de 15 secondes.
   - Si le temps s'écoule avant qu'une réponse ne soit sélectionnée, le chronomètre s'arrête :
     - Le minuteur s'arrête.
     - Tous les boutons d'option sont désactivés.
     - Le bouton « Suivant » est activé.

5. **Progression et achèvement**

   - L'utilisateur clique sur le bouton « Suivant » pour passer à la question suivante.
   - La barre de progression se met à jour pour refléter la progression de l'utilisateur.
   - Lorsque l'utilisateur a répondu à toutes les questions :
     - Le score final est évalué.
     - Un message de fin de questionnaire s'affiche, adapté à la performance de l'utilisateur et au thème sélectionné.
     - Le bouton « Rejouer » s'affiche, permettant à l'utilisateur de recommencer le quiz.

6. **Sélection de thème**

   - Les utilisateurs peuvent sélectionner différents thèmes à l'aide des boutons de thème créés dynamiquement.
   - La sélection d'un nouveau thème réinitialise l'état du quiz et charge les questions du thème choisi.
   - Le bouton du thème actif est mis en évidence.

---

**Données et thèmes**

- Le quiz prend en charge plusieurs thèmes, chacun avec son propre ensemble de questions :
  - **Films et Séries**
  - **Musique**
  - **Technologie**
  - **Histoire**
  - **Citations**
  - **Marvel**
- Les questions sont stockées dans des fichiers de données distincts correspondant à chaque thème.
- Les messages de fin de question sont personnalisés pour chaque thème et chaque niveau de performance.

---

**Analyse des codes**

1. **Modularité et organisation**

   - **Modules ES6** : Le code est bien organisé à l'aide des modules ES6, ce qui favorise la réutilisation du code et la séparation des préoccupations.
   - **Fonctions** : Chaque fonction gère une tâche spécifique, ce qui rend le code maintenable et évolutif.
   - **Fichiers de données** : Les questions et les messages sont stockés séparément, ce qui facilite les mises à jour et les ajouts.

2. **Gestion des variables**

   - Variables centralisées** : Les variables clés sont stockées dans un seul fichier `variables.js`, ce qui facilite le suivi et la gestion de l'état de l'application.
   - Gestion de l'état** : L'état de l'application (question en cours, score, timer) est géré efficacement par l'objet `variables`.

3. **Gestion des événements**

   - **Interaction avec l'utilisateur** : Des récepteurs d'événements sont ajoutés pour les boutons d'option, le bouton « Suivant », le bouton « Rejouer » et les boutons de thème.
   - **États des boutons** : Les boutons sont activés ou désactivés de manière appropriée afin de guider l'interaction de l'utilisateur et d'éviter tout comportement involontaire.

4. **Mises à jour de l'interface utilisateur**

   - **Contenu dynamique** : L'interface utilisateur est mise à jour dynamiquement en fonction des actions de l'utilisateur et de l'état du quiz.
   - **Animations** : Des classes CSS sont ajoutées ou supprimées pour créer un retour d'information visuel (par exemple, des animations de score, des boutons en surbrillance).

5. **Fonctionnalité de minuterie**

   - **Précision** : Le compte à rebours s'effectue par intervalles d'une seconde et des actions sont entreprises lorsque le temps est écoulé.
   - **Contrôle** : Les fonctions de démarrage et d'arrêt de la minuterie permettent d'éviter que plusieurs minuteries ne fonctionnent simultanément.

6. **Évaluation à la fin de l'exercice**

   - **Évaluation des performances** : Le score de l'utilisateur est évalué par rapport à des seuils pour déterminer le message final.
   - **Personnalisation** : Les messages sont adaptés au thème sélectionné et au niveau de performance de l'utilisateur.

---

**Améliorations potentielles**

1. **Réutilisation du code**

   - **Réduire les répétitions** : Certaines fonctions et structures de données (par exemple, les formats de questions) sont similaires d'un thème à l'autre et pourraient être généralisées.
   - **Importations dynamiques** : Au lieu de coder en dur les importations pour les questions de chaque thème, envisagez d'importer dynamiquement les données en fonction du thème sélectionné.

2. **Gestion des erreurs**

   - **Validation des entrées** : S'assurer que les données (par exemple, les questions, les images) sont valides et gérer les cas où les données peuvent être manquantes ou mal formées.
   - **Opérations asynchrones** : Si les images sont chargées à partir d'URL externes, mettre en œuvre une gestion des erreurs en cas d'échec des requêtes réseau.

3. **Expérience utilisateur**

   - **Conception réactive** : S'assurer que l'interface utilisateur est réactive et accessible sur différents appareils et tailles d'écran.
   - **Mécanismes de rétroaction** : Fournir un retour d'information immédiat pour les réponses correctes ou incorrectes au-delà de la simple mise à jour du score (par exemple, mettre en évidence les réponses correctes après la sélection).

4. **Optimisation du code**

   - **Refactoring** : Certaines fonctions pourraient être remaniées pour plus de clarté et d'efficacité, par exemple en combinant des fonctions similaires ou en simplifiant la logique.
   - **Utilisation de classes** : Envisagez d'utiliser des classes ES6 pour encapsuler la fonctionnalité des quiz, ce qui peut améliorer l'organisation du code.

5. **Évolutivité**

   - **Gestion des thèmes** : Au fur et à mesure que le nombre de thèmes augmente, mettez en place un système pour gérer les thèmes et les questions plus efficacement.
   - **Localisation** : Si vous visez un public plus large, envisagez d'ajouter la prise en charge de plusieurs langues.

6. **Accessibilité**

   - **Attributs ARIA** : Ajoutez des attributs ARIA pour améliorer l'accessibilité pour les utilisateurs de technologies d'assistance.
   - **Navigation au clavier** : S'assurer que l'application peut être entièrement naviguée à l'aide d'un clavier.


---

**Principaux enseignements**

- **Conception modulaire** : L'utilisation des modules ES6 favorise une organisation propre du code.
- **Mises à jour dynamiques de l'interface utilisateur** : L'interactivité est améliorée par la manipulation dynamique du DOM.
- **Gestion des états** : La centralisation des variables d'état simplifie le suivi de l'état de l'application.
- **Engagement de l'utilisateur** : Les minuteries, les barres de progression et les animations contribuent à rendre l'expérience de l'utilisateur attrayante.
- **Personnalisation** : L'adaptation du contenu (questions, messages) en fonction des thèmes améliore la rejouabilité.

Dans l'ensemble, l'application est un exemple de pratiques de développement web, combinant efficacement la structure, la fonctionnalité et l'interaction avec l'utilisateur.

# Tutoriel : Gérer les données dans votre application de jeu-concours

Ce tutoriel vous guidera dans le processus d'ajout ou de suppression de sujets (thèmes) et de questions dans votre application de quiz. À la fin de ce tutoriel, vous serez en mesure de personnaliser votre quiz pour inclure de nouveaux thèmes et questions, ou supprimer des thèmes et questions existants, afin d'adapter le contenu à vos besoins.

---

## Comprendre la structure des données

Avant d'effectuer des modifications, il est important de comprendre comment les données sont structurées dans votre application de quiz.

- **Thèmes (sujets)** : Chaque thème possède son propre fichier de données contenant un tableau d'objets questions.
- **Structure de l'objet question** :

  ```javascript
  {
    texte: "Question text here",
    tableauDeChoix: ["Option 1", "Option 2", "Option 3", "Option 4"],
    reponse: "Correct Answer",
    image: "path/to/image.jpg"
  }
  ```

- **L'emplacement des fichiers de données** : Tous les fichiers de données sont situés dans le répertoire `javascript/data/`.
- **Liste des thèmes** : La liste des thèmes disponibles est gérée dans `javascript/data/listeThematiques.js`.

---

## Ajouter un nouveau thème

Pour ajouter un nouveau thème à votre quiz, suivez les étapes suivantes :

### Etape 1 : Créer un nouveau fichier de données

1. **Naviguez dans le répertoire de données** :

   ```plaintext
   javascript/data/
   ```

2. **Créer un nouveau fichier** :

   Créez un nouveau fichier JavaScript pour votre thème. Par exemple, si votre thème est « Science », créez `questionsScience.js`.

   ```plaintext
   javascript/data/questionsScience.js
   ```

### Étape 2 : Définir vos questions

1. **Ouvrir le nouveau fichier** :

   Ouvrez `questionsScience.js` dans votre éditeur de code.

2. **Structurez vos questions** :

   Définissez un tableau d'objets questions en suivant la structure existante. Voici un exemple :

   ```javascript
   // javascript/data/questionsScience.js

   const questionsScience = [
     {
       texte: "What is the chemical symbol for water?",
       tableauDeChoix: ["O2", "H2O", "CO2", "NaCl"],
       reponse: "H2O",
       image: "images/water.jpg"
     },
     {
       texte: "Who proposed the theory of relativity?",
       tableauDeChoix: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
       reponse: "Albert Einstein",
       image: "images/einstein.jpg"
     },
     // Ajoutez d'autres questions si nécessaire
   ] ;

   export default questionsScience ;
   ```

3. **Exporter les questions** :

   Assurez-vous d'exporter le tableau en utilisant `export default`.

### Étape 3 : Mise à jour de la liste des thèmes

1. **Ouvrir le fichier de la liste des thèmes** :

   ```plaintext
   javascript/data/listeThematiques.js
   ```

2. **Ajouter votre nouveau thème à la liste** :

   Ajoutez votre nouveau thème au tableau `listeThematiques` :

   ```javascript
   // javascript/data/listeThematiques.js

   const listeThematiques = [
     // Thèmes existants...
     {
       nom: "Science",
       data_thematique: "science",
     },
   ] ;

   export default listeThematiques ;
   ```

   - **`nom`** : Le nom d'affichage de votre thème.
   - **`data_thematique`** : Un identifiant unique utilisé dans le code. Utilisez des lettres minuscules et des traits d'union.

### Étape 4 : Importer les questions du nouveau thème

1. **Ouvrez la fonction de changement de thème :

   ```plaintext
   javascript/functions/changerThematique.js
   ```

2. **Importez votre nouveau fichier de questions** :

   En haut du fichier, importez vos questions :

   ```javascript
   // javascript/functions/changerThematique.js

   // Importations existantes...
   import questionsScience from "../data/questionsScience.js";
   ```

3. **Mettre à jour l'instruction Switch** :

   Dans la fonction `changerThematique`, ajoutez un cas pour votre nouveau thème :

   ```javascript
   // javascript/functions/changerThematique.js

   function changerThematique(thematique) {
     switch (thematique) {
       // Cas existants...
       case "science":
         variables.questionsThematiqueChoisie = questionsScience;
         break;
       // Il n'est pas nécessaire d'avoir un cas par défaut à moins d'avoir un thème de repli.
     }

     // Réinitialisation de l'état du quiz...
   }
   ```

---

## Supprimer un thème existant

Pour supprimer un thème de votre quiz, suivez les étapes suivantes :

### Étape 1 : Supprimer le fichier de données du thème

1. **Localiser le fichier de données** :

   Trouvez le fichier de données du thème dans `javascript/data/`. Par exemple, pour supprimer « Marvel », localisez `questionsMarvel.js`.

2. **Supprimez le fichier** :

   Supprimez `questionsMarvel.js`.

### Étape 2 : Mise à jour de la liste des thèmes

1. **Ouvrir le fichier de la liste des thèmes** :

   ```plaintext
   javascript/data/listeThematiques.js
   ```

2. **Supprimez le thème du tableau** :

   Trouvez et supprimez l'objet du thème :

   ```javascript
   // Avant la suppression
   const listeThematiques = [
     // Autres thèmes...
     {
       nom: "Marvel",
       data_thematique: "marvel",
     },
   ] ;

   // Après suppression
   const listeThematiques = [
     // Autres thèmes...
   ] ;
   ```

### Étape 3 : Supprimer les importations et les références

1. **Ouvrir la fonction de changement de thème** :

   ```plaintext
   javascript/functions/changerThematique.js
   ```

2. **Supprimez la déclaration d'importation** :

   Supprimez l'importation des questions du thème :

   ```Javascript
   // Supprimez cette ligne
   import questionsMarvel from "../data/questionsMarvel.js";
   ```

3. **Supprimez le cas dans la déclaration Switch** :

   Supprimez le cas qui gère le thème :

   ```javascript
   // Supprimez ce cas
   case "marvel":
     variables.questionsThematiqueChoisie = questionsMarvel;
     break;
   ```

---

## Ajouter des questions à un thème existant

Pour ajouter de nouvelles questions à un thème existant :

1. **Ouvrez le fichier de données du thème** :

   Par exemple, pour ajouter des questions à « Technologie » :

   ```plaintext
   javascript/data/questionsTechnologie.js
   ```

2. **Ajouter de nouveaux objets questions** :

   Ajoute de nouveaux objets questions au tableau :

   ```javascript
   // javascript/data/questionsTechnologie.js

   const questionsTechnologie = [
     // Questions existantes...
     {
       texte: "What does 'CPU' stand for in computer terms?",
       tableauDeChoix: ["Central Processing Unit", "Computer Personal Unit", "Central Performance Unit", "Compute Power Unit"],
       reponse: "Central Processing Unit",
       image: "images/cpu.jpg" // Optional
     },
     // Ajouter d'autres questions si nécessaire
   ];

   export default questionsTechnologie ;
   ```

3. **S'assurer que la syntaxe est correcte** :

   - Chaque objet question doit être séparé par une virgule.
   - Le tableau doit être placé entre crochets `[]`.

---

## Supprimer des questions d'un thème

Pour supprimer des questions d'un thème :

1. **Ouvrez le fichier de données du thème** :

   Par exemple :

   ```plaintext
   javascript/data/questionsHistoire.js
   ```

2. **Localisez la question à supprimer** :

   Trouvez l'objet de la question que vous souhaitez supprimer.

3. **Supprimer l'objet de la question** :

   Supprimez l'ensemble de l'objet question, en veillant à supprimer également la virgule s'il s'agit du dernier élément.

   ```javascript
   // Avant la suppression
   const questionsHistoire = [
     {
       texte: "Question to keep",
       //...
     },
     {
       texte: "Question to remove",
       //...
     },
     //...
   ];

   // Après la suppression
   const questionsHistoire = [
     {
       texte: "Question to keep",
       //...
     },
     //...
   ];
   ```

---

## Tester vos modifications

Après avoir effectué les modifications, il est important de tester votre quiz pour s'assurer que tout fonctionne correctement.

1. **Exécutez votre application** :

   Démarrez votre serveur de développement si vous en avez un, ou ouvrez `index.html` dans un navigateur.

2. **Vérifiez les nouveaux thèmes** :

   - Vérifiez que votre nouveau thème apparaît dans la navigation.
   - Sélectionnez le thème et assurez-vous que les questions se chargent correctement.

3. **Vérifier les questions** :

   - Passez en revue les questions pour vérifier qu'elles s'affichent comme prévu.
   - Assurez-vous que les images (le cas échéant) se chargent correctement.

4. **Tester la fonctionnalité** :

   - Répondez aux questions pour vérifier la mise à jour des scores.
   - Vérifiez que le chronomètre fonctionne correctement.
   - Assurez-vous que les messages de fin de test s'affichent correctement.

5. **Erreurs dans la console** :

   - Ouvrez la console de développement du navigateur pour vérifier s'il y a des erreurs JavaScript.
   - Corrigez les erreurs en vérifiant que votre code ne contient pas de fautes de frappe ou de problèmes de syntaxe.

---

**Points clés à retenir** :

- **Maintenir une structure de données cohérente** : Assurez-vous que tous les objets de question suivent le même format.
- **Mettez à jour toutes les références** : Lorsque vous ajoutez ou supprimez des thèmes, mettez à jour tous les fichiers pertinents (`listeThematiques.js`, imports, switch cases).
- **Testez minutieusement** : Testez toujours votre application après avoir effectué des modifications afin de détecter rapidement toute erreur.

---

**Conclusion**

Le code fourni constitue une base solide pour une application de quiz modulaire et dynamique. Il utilise efficacement les fonctionnalités modernes de JavaScript pour créer une expérience utilisateur interactive. La séparation des éléments HTML récupérés dans Javascript, avec des modules dédiés aux variables, aux fonctions et aux données, rend la base de code maintenable et extensible.

En prenant en compte les améliorations potentielles, telles que l'amélioration de la gestion des erreurs, l'optimisation de la structure du code et l'attention portée à l'expérience utilisateur, l'application peut être élevée au rang d'une plateforme plus robuste et performante.