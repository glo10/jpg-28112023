# TP 2 : liaison front et back

---

## Enoncé

### Scénario 1

En tant qu'utilisateur anonyme ;

Lorsque, je me connecte pour la première fois ;

Alors, je devrais être redirigé vers la page d'actualité ;

### Scénario 2

En tant qu'utilisateur connecté ;

Lorsque, je demande à accéder à nouveau à la page de connexion ou d'inscription ;

Alors, je devrais être redirigé vers la page d'actualité ;

#### Spécifications techniques scénarios 1 et 2

1. Générez un token d'authentification après la première connexion.
Vous pouvez télécharger le module [uuid](https://www.npmjs.com/package/uuid) pour générer des ID.
2. Créez un `middleware` au niveau de l'application front-end qui ajoute le `token` (`bearer token`) renvoyé par le serveur après l'authentification réussie.
3. Permettre l'accès à la page d'actualité `news.html` uniquement si le `token` existe et qu'il est valide. La durée de validité du token est de 2h après le succès de l'authentification.
- Lorsque, le `token` existe et qu'il est valide, empêchez l'accès à la page de connexion ou d'inscription.

---

## Documentation d'aide pour la création du middleware (3)

- Utilisez une solution de stockage local pour stocker le `token` renvoyé par le serveur après une authentification réussie.
- Rajoutez le `token` dans les `headers` de vos requêtes `fetch`.

### Insertion dans la table user

#### Insertion d'un seul utilisateur

`INSERT INTO user(lastname, firstname, email, password, age, country, city)
VALUES ("tshimini", "glodie", "contact@tshimini.fr", "$2y$10$Aic51852FzN792ScOek7iO78sP7G26Sm3MAYXfdTu5FDBjHLlqt7q", "31", "france", "paris")`

#### Insertion de plusieurs utilisateurs

`INSERT INTO user(lastname, firstname, email, password, age, country, city)
VALUES 
("doe", "john", "john@doe.fr", "$2y$10$Aic51852FzN792ScOek7iO78sP7G26Sm3MAYXfdTu5FDBjHLlqt7q", "45", "belgique", "bruxelles"),
("bugg", "aida", "aida@bugg.fr", "$2y$10$dII9kvk1QBovvoGyyPiAh.hnXtjJLNajPBcH839b1eiuHulH9v3z.", "49", "togo", "lomé"),
("first", "maureen", "maureen@first.fr", "$2y$10$aDQYgMZK6Rnyauqy/XA3Vu.35B6WuN2Dy5zkdFEch/bFwfjSX4vFO", "22", "australie", "sydney")
`