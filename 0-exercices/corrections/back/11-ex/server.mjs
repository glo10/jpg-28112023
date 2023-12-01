import { createServer } from 'node:http'
import { readFile } from 'node:fs'
import { resolve } from 'path'
const PORT = 4000
createServer((req, res) => {
  const baseDir = resolve('./11-ex', 'template')
  let page = req.url
  let status = 200
  if (/\/(index\.html)?$/.test(req.url)) {
    page = 'html/index.html'
  } else if (!/\/(css|favicon){1}.+/.test(req.url)) {
    page = 'html/404.html'
    status = 404
  }
  readFile(`${baseDir}/${page}`, { encoding: 'utf-8' }, (err, data) => {
    if (!err) {
      res.writeHead(status)
      res.write(data)
      res.end()
    } else {
      console.error('error', err)
    }
  })
}).listen(PORT, () => {
  console.info(`App on http://localhost:${PORT}`)
})
