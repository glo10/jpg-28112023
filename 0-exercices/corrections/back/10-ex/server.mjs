import { createServer } from 'http'

console.info('App on http://localhost:3000')

const webServer = createServer((req, res) => {
  const headers = { 'Content-Type': 'application/json; charset=utf-8' }
  if (/\/$/.test(req.url)) {
    res.writeHead(200, headers)
    res.write('{"message": "success"}')
  } else {
    res.writeHead(404, headers)
    res.write('{"message": "not found"}')
  }
  res.end()
})
webServer.listen(3000)
