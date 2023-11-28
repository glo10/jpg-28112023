# Exercice 1 : création formulaire d'inscription

---

## Modalités

- **Ne modifiez pas le HTML ou CSS directement**.
- **Debuggez votre code depuis à l'aide de l'extension live server de Visual Studio Code**
- **Utilisez les CustomElement**

---

## Énonce

1. Récupérez les sources depuis [les ressources 0-exercices/ressources/front.zip](./ressources/front.zip)
2. Consultez la vidéo [final.mp4](./ressources/videos/final.mp4) pour avoir une idée du travail à réaliser.
3. Installez et configurez le module Eslint.
- Un outil d'analyse statique (sans exécution du code) pour vérifier les erreurs dans son code et s'assurer une meilleure qualité du code grâce à la vérification des bonnes pratiques du langage depuis un fichier de configuration.
- Vous effectuez la configuration d'ESLINT depuis le terminal et la racine de votre projet, copiez/collez la commande suivante : `npm init @eslint/config` et laissez-vous guider et faites vos choix pour la suite (cf. illustration ci-dessous).
3. Créez un formulaire d'inscription et de connexion en reprenant le code contenu dans les fichiers ***html/_partials/sign-up.html*** et ***html/_partials/sign-in.html***.

---

## Illustration

### ESLINT config

![eslint](./ressources/img/eslint.png)

---

## Bonus 1

- Ajoutez un script dans le fichier package.json dédié aux vérifications d'ESLint et un autre pour corriger toutes les erreurs et warning.
Appuyez-vous sur cette [documentation](https://eslint.org/docs/latest/use/command-line-interface) 

---

## Bonus 2

1. Affichez également les messages d'aides pour le formulaire de connexion.