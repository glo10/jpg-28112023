import sqlite3 from 'sqlite3'
import { readFile } from 'node:fs/promises'
import reqs from './database/requests.mjs'
export default class Db {
  instance

  constructor (filename) {
    this.filename = filename
    this.requests = reqs
  }

  async connect () { // Connexion à la base de données sqlite (un fichier)
    return readFile(this.filename, (err) => {
      if (err) {
        throw new Error('database file does not exist')
      }
      console.info('database found')
    })
      .then(() => { // Connexion Ok, on stocke l'objet dans une propriété pour pouvoir facilement l'utiliser pour toutes nos ops
        this.instance = new sqlite3.Database(this.filename, sqlite3.OPEN_READWRITE)
        this.createTable() // création de la table
        console.info('database connected and table created')
        return this
      })
      .catch(e => {
        console.error('catch error', e)
      })
  }

  createTable () {
    // On tente de récupérer la table (vérifier si elle existe)
    this.instance.get(this.requests.isTableExist, (err, row) => {
      if (err) { // Erreur au niveau de la base de données
        console.error('error', err)
        throw err // on propage cette erreur pour la traiter plus tard
      }
      if (!row) { // Pas d'erreur au niveau de la bdd et la table n'existe pas.
        this.instance.run(this.requests.create) // donc création de la table
      }
    })
  }

  end () { // fermeture de la connexion à la bdd
    this.instance.close((err) => {
      if (err) {
        console.error('error close database', err)
        console.info('can\'t close database')
      } else {
        console.info('database closed')
      }
    })
  }
}
