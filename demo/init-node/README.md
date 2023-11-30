# Packages dans node

---

## Documentation

- [Node officiel](https://nodejs.org/en/docs)
- [Avec devdocs.io](https://devdocs.io/node/)

---

## Préfixe, suffixe des paquets et/ou méthodes
1. Sans suffixe : exemple `fs`
2. Avec suffixe Sync : synchrone exemple `import {statSync} from 'fs'`
3. Avec le suffixe /promises : exemple `import * from readline/promises`

Ce n'est pas obligatoire, mais vous pouvez préfixer toutes les dépendances intrinsèques de Node dans votre code avec le préfixe `node:`, par exemple `import { createInterface } from 'node:readline/promises'

---

## Variables d'environnement

- Avec l'installation du package [dotenv](https://www.npmjs.com/package/dotenv)
- Ou en expérimenta en faisant `node --env-file=.env --env-file=.env index.js` voir cette [documentation](https://nodejs.org/dist/latest-v20.x/docs/api/cli.html#--env-fileconfig)

![warning](https://api.iconify.design/ic:outline-warning.svg) ![warning](https://api.iconify.design/ic:outline-warning.svg) ![warning](https://api.iconify.design/ic:outline-warning.svg) le fichier .env dédié à la production ne doit pas être versionné et donc présent dans le `.gitignore`.