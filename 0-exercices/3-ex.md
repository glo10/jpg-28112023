# Exercice 3 : API pays et villes

---

## Modalités

**Ne pas modifier le HTML ou CSS directement**.

**Dans le HTML, vous êtes autorisé à modifier uniquement l'attribut source `src` de la balise `<script>`**.

**Toutes les modifications doivent se faire à travers JavaScript**.

**Utilisez le plus possible les classes (programmation orienté objet)**.

## Enoncé

1. Implementez les scénarios suivants pour répondre aux besoins exprimés.

---

## Scénario 1

En tant qu'utilisateur ;

Lorsque, le formulaire courant correspond au formulaire de connexion ;

Et que je clique sur le bouton "Inscription" ;

Alors, le formulaire d'inscription contenant les champs suivants devrait être affiché à la place :
- Nom ;
- Prénom ;
- Email ;
- Mot de passe ;
- Confirmation de mot de passe ;
- Age ;
- Pays ;
- Ville ;

## Scénario 2

En tant qu'utilisateur ;

Lorsque, le formulaire courant correspond au formulaire d'inscription ;

Et que je clique sur le bouton "Connexion" ;

Alors le formulaire de connexion contenant les champs suivants devrait être affiché :
- E-mail ;
- Mot de passe ;


### Spécifications techniques des scénarios 1 et 2

- Le changement d'un formulaire à un autre doit s'effectuer **sans recharger la page courante et à l'infini**.

---

## Scénario 3

En tant qu'utilisateur ; 

Lorsque, j'ai sélectionné un pays ;

Alors, je devrais avoir la liste de toutes les villes de ce pays dans le champ de sélection dédié à la *ville* ;

### Spécifications techniques du scénario 3

- Le champ de type input dédié au choix du pays fournit dans le template doit être remplacé par un champ select contenant tous les pays qu'il faudra récupérer depuis le fichier ***src/data/countries.json*** ou depuis l'API *Country State City API* [https://countrystatecity.in/docs/api/all-countries/](https://countrystatecity.in/docs/api/all-countries/) en vous appuyant sur sa [documentation](https://countrystatecity.in/docs/).
- Le champ de type input dédié au choix de la ville fournit dans le template doit être remplacé par un champ select contenant toutes les villes du pays séléctionné. Vous pouvez récupérer depuis le fichier ***src/data/cities.json*** ou depuis l'API *Country State City* [https://countrystatecity.in/docs/api/cities-by-country/](https://countrystatecity.in/docs/api/cities-by-country/).
- Le choix du pays déclenche la récupération de toutes les villes de ce pays.
- Les select doivent garder la même valeur pour l'attribut name
- Chaque pays et villes présentent dans les sélections doivent avoir les attributs HTML suivants correspondants aux informations récupérées :
 - value = nom de l'entité ;
 - data-latitude = coordonnée de la latitude du pays ou de la ville;
 - data-longitude = coordonnée de la longitude du pays ou de la ville;

 # Bonus 1

- Remplace l'âge par la date de naissance à l'aide de javascript sans modifier le HTML.
- Ajoutez une option supplémentaire "Sélectionnez un pays" qui doit être affiché dans la sélection au moment de la récupération des pays.
- Utilisez directement l' API *Country State City* via sa documentation sur le lien [https://countrystatecity.in/docs/api/all-countries/](https://countrystatecity.in/docs/api/all-countries/) pour récupérer les pays.
- Utilisez directement l' API *Country State City* via sa documentation sur le lien [https://countrystatecity.in/docs/api/cities-by-country/](https://countrystatecity.in/docs/api/cities-by-country/) pour récupérer les villes d'un pays.
