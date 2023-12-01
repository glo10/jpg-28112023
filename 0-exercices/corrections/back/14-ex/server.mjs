import { createServer } from 'node:http'
import { resolve } from 'node:path'
import Auth from './auth.mjs'

console.info('server on http://localhost:7000')
const http = createServer().listen(7000)
const headers = { 'Content-Type': 'application/json' }
const dbFile = resolve('13-ex', 'database', 'app.sqlite')
const auth = new Auth(dbFile)

http.on('request', (req, res) => {
  req.setEncoding('utf8')
  let routeName = req.url.split('/')[1]
  let jsonData = ''
  if (/post/i.test(req.method)) {
    req.on('data', (data) => {
      jsonData = data
    })

    req.on('end', () => {
      if (jsonData === '') {
        jsonData = JSON.stringify({ message: 'mandatory json data' })
        routeName = 'not_found'
      }
      http.emit(routeName, JSON.parse(jsonData), res)
    })
  } else {
    http.emit('not_found', '{"message":"wrong HTTP Method"}', res)
  }
})

http.on('signup', async (user, res) => {
  auth.signUp(user)
    .then(data => {
      data = JSON.parse(data)
      const { message, status } = data
      http.emit('success', message, status, res)
    })
    .catch(err => {
      console.error('error sign up', err)
      http.emit('not_found', JSON.stringify({ message: err.message }), res)
    })
})

http.on('signin', (user, res) => {
  auth.signIn(user.email, user.password)
    .then(data => {
      data = JSON.parse(data)
      const { message, status } = data
      http.emit('success', message, status, res)
    })
    .catch(err => {
      console.error('error sign in', err)
      http.emit('not_found', JSON.stringify({ message: err.message }), res)
    })
})

http.on('success', (data, status, res) => {
  res.writeHead(status, headers)
  res.write(data)
  res.end()
})

http.on('not_found', (data, res) => {
  res.writeHead(404, headers)
  res.write(data)
  res.end()
})
