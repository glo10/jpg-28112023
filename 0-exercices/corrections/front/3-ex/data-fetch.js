import { parse } from 'rss-to-json'
export default class DataFetch {
  async html (src) {
    return fetch(src)
      .then(res => res.text())
  }

  async json (src) {
    const res = await fetch(src)
    return await res.json()
  }

  async xml (src) {
    return parse(src, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    })
      .then(data => data)
  }
}
