import { createServer } from 'node:http'
import { resolve } from 'node:path'
import Database from './db.mjs'
import { jsonToArray } from './utilities.mjs'

const PORT = 6000
console.info(`server on http://localhost:${PORT}`)
const http = createServer().listen(PORT) // création d'un serveur web qui écoute sur le port 7000
const headers = { 'Content-Type': 'application/json' }
const dbFile = resolve('13-ex', 'db', 'app.sqlite') // résolution du path pour avoir le chemin de la base de données sqlite embarquée
const db = new Database(dbFile)

// l'ordre n'a pas d'importance dans le fichier tout est asynchrone et événementiel
http.on('close_db_connection', () => {
  db.end() // fermeture de la connexion à la bdd
})

// Traitement d'une requête depuis le serveur d'écoute sur le port 7000
http.on('request', (req, res) => { // dès qu'un client effectue une req
  req.setEncoding('utf8')
  let routeName = req.url.split('/')[1]
  let jsonData = ''
  if (/post/i.test(req.method)) { // request avec la méthode HTTP POST
    req.on('data', (data) => {
      jsonData = data
    })

    req.on('end', () => {
      if (jsonData === '') {
        jsonData = JSON.stringify({ message: 'mandatory json data' })
        routeName = 'app_not_found'
      }
      http.emit(routeName, JSON.parse(jsonData), res)
    })
  } else { // Pas une méthode POST
    http.emit('app_not_found', '{"message":"wrong HTTP Method"}', res)
  }
})

http.on('signup', async (data, res) => { // à l'écoute de l'événment subscribe
  // connexion à la bdd
  db.connect()
    .then((c) => {
      // la méthode run ci-après attend un tableau en 2ème paramètre
      const user = jsonToArray(data)
      // cherche à insérer un user dans la bdd
      c.instance.run(db.requests.insert, user, (error) => {
        if (/unique/i.test(error)) { // email existe déjà
          http.emit('app_not_found', '{"message":"user already exists"}', res)
        } else if (error) { // tout autre erreur
          console.info('error insert', error)
          http.emit('app_not_found', '{"message":"can\'t handle request"}', res)
        } else { // insertion réussi
          http.emit('app_success', '{"message":"success"}', 201, res) // emission de l'événement success
        }
      })
    })
})

http.on('signin', (data, res) => {
  const user = [data.email, data.password]
  // connexion à la bdd
  db.connect()
    .then((c) => {
      c.instance.get(db.requests.select, user, (err, row) => {
        if (err) {
          console.error('error sign in', err)
          http.emit('app_not_found', '{"message":"email or password incorrect"}', res)
        } else {
          http.emit('app_success', JSON.stringify(row), 200, res)
        }
      })
    })
})

http.on('app_success', (data, status, res) => { // à l'écoute de l'évément app_success
  res.writeHead(status, headers) // préparation de l'en-tête de la réponse 201 = ressource crée
  res.write(data) // écriture de la réponse
  res.end() // fin de l'écriture de la réponse et donc retour de la réponse au client (le navigateur ou postman)
  http.emit('close_db_connection') // emission de l'événement pour fermer la connexion à la base de données
})

http.on('app_not_found', (data, res) => { // à l'écoute de l'événement not found
  res.writeHead(404, headers)
  res.write(data)
  res.end()
})
