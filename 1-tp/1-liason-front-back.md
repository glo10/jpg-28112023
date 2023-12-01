# TP 2 : liaison front et back

---

## Enoncé

### Scénario 1

En tant qu'utilisateur anonyme ;

Lorsque, je demande à accéder à la page d'actualité ;

Alors, je devrais être redirigé vers la page d'authentification ;

### Scénario 2

En tant qu'utilisateur connecté ;

Lorsque, je demande à accéder à nouveau à la page d'authentification ;

Alors, je devrais être redirigé vers la page d'actualité ;

### Scénario 3

En tant qu'utilisateur connecté ;

Je peux accéder à la page d'actualité ;

---


#### Spécifications techniques scénarios

1. Récupérez le token côté serveur et le stocker en local
2. A chaque nouveau requête vers le serveur, vous devez rajoutez le token dans les informations d'en tête (headers) sous la formation de `Authorization: bearer token_here`