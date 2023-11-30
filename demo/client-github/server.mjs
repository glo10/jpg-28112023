import { createWriteStream } from 'node:fs'
import { request } from 'node:https'
const hostname = 'raw.githubusercontent.com'
const path = '/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json'
const countries = createWriteStream('country-states.json')
request({hostname, path, method: 'GET'}, (res) => {
  res.pipe(countries)
  res.on('end', () => { console.log('fin de lecture de la page web')})
  countries.on('close', (err) => {
    if(err) console.log('erreur', err)
    console.log('fin de la copie !')
  })
  res.on('data', (chunk) => {
    console.log('data', chunk.toString())
  })
}).end()