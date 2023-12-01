import { createServer } from 'node:http'
import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { createDir, createFile, getContent } from './files.mjs'

const PORT = 5000
createServer((req, res) => {
  const headers = { 'Content-Type': 'application/json' }
  const usersDir = resolve('12-ex', 'data')
  const usersFile = resolve(usersDir, 'users.json')
  if (/\/$/.test(req.url) && /post$/i.test(req.method)) {
    let formData = ''
    // Récupération des données envoyées par le client
    req.on('data', async (chunk) => {
      formData += chunk
    })
    req.on('end', () => {
      let status = 200
      let msg = ''
      const newUser = JSON.parse(formData)
      // Dossier n'existe pas => création du fichier
      const dir = createDir(usersDir)
      // Fichier n'existe pas => création du fichier
      const f = createFile(usersFile, '[]')
      // lecture du fichier des utilisateurs
      const content = getContent(usersFile)
        .then((data) => {
          console.log('data', data)
          return JSON.parse(data)
        }).catch((error) => {
          console.log('error getContent', error)
          // Gestion du fichier json vide
          if (/.*(end of json).*/i.test(error.message)) {
            console.log('here')
            return []
          }
        })
      Promise.all([dir, f, content])
        .then((results) => {
          const users = results[2]
          // users est un tableau (collection des objets user)
          console.log('users', users)
          const isUserExist = users?.find(user => newUser.email === user.email)
          if (isUserExist) {
            status = 200
            msg = '{"message": "user is already exist"}'
          } else {
            // réecriture complète du fichier, on peut mieux faire
            users.push(newUser)
            writeFile(usersFile, JSON.stringify(users))
            status = 201
            msg = '{"message": "user created"}'
          }
        }).catch(error => {
          console.log('error all promise', error)
          status = 500
          msg = '{"message": "can\'t get data"}'
        }).finally(() => {
          res.writeHead(status, headers)
          res.end(msg)
        })
    })
  } else {
    res.writeHead(404, headers)
    res.end('404 not found')
  }
}).listen(PORT, () => {
  console.info(`App on http://localhost:${PORT}`)
})
