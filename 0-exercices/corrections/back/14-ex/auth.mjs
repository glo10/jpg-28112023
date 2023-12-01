import { hash, compare } from 'bcrypt'
import Database from '../13-ex/db.mjs'
import jwt from 'jsonwebtoken'
import { jsonToArray } from '../13-ex/utilities.mjs'

export default class Auth {
  /**
   * La clé doit être gardé dans les variables d'environnement NODE et pas stocké en dur ici
   * Pck n'importe qui peut y accéder et alterer les données
   * Utilisez le package dotenv ou la gestion experimental de env-file cf lien suivant
   * https://nodejs.org/dist/latest-v20.x/docs/api/cli.html#--env-fileconfig
  */
  static SECRET = 'u8B>FU^Yn,ACnP2p=uFd1NgJsAbfvYkiCmfwGks0!9Wuc]Mn'
  constructor (file) {
    this.db = new Database(file)
  }

  async signUp (user) {
    const hashPwd = hash(user.password, 12)
      .then(hash => hash)
      .catch(() => new Error('can\'t encrypt password'))
    const connect = this.db.connect()
      .then(sqlite => sqlite)
      .catch(() => new Error('can\'t connect to database'))
    return Promise.all([hashPwd, connect])
      .then(async (res) => {
        user.password = res[0]
        const db = res[1]
        user = jsonToArray(user)
        return db
      })
      .then((db) => {
        return new Promise((resolve, reject) => {
          db.instanceSqlite.run(this.db.requests.insert, user, (error) => {
            if (error) {
              reject(error)
            }
            resolve(JSON.stringify({ message: 'ok', status: 201 }))
          })
        })
      })
      .catch(error => {
        console.error('error ', error)
        return JSON.stringify({ message: error.message, status: 404 })
      })
      .finally(() => {
        this.db.end()
      })
  }

  async signIn (email, password) {
    const req = 'SELECT lastname, firstname, email, age, country, city, password, latitude, longitude FROM user WHERE email = ?'
    const user = await this.db.connect()
      .then(d => {
        return new Promise((resolve, reject) => {
          d.instanceSqlite.get(req, [email], (error, row) => {
            if (!error) {
              resolve(row)
            } else {
              console.log('error sign in last promise', error)
              reject(error)
            }
          })
        })
      })
    return compare(password, user.password)
      .then(ok => {
        if (!ok) {
          return JSON.stringify({ message: 'email and/or password incorrect', status: 404 })
        }
        const token = jwt.sign(
          {
            id: user.id,
            email: user.email,
            lastname: user.lastname,
            address: {
              country: user.country,
              city: user.city,
              longitude: user.longitude,
              latitude: user.latitude
            }
          },
          Auth.SECRET, // SECRET
          { expiresIn: '2h' }
        )
        return JSON.stringify({ message: token, status: 200 })
      })
      .catch(error => {
        console.error('error ', error)
        return new Error('can\'t verify data')
      })
      .finally(() => {
        this.db.end()
      })
  }
}
