import { parse } from 'rss-to-json'
export default class DataFetch {
  static PROXY = 'http://127.0.0.1:7000'
  async html (src) {
    return fetch(src)
      .then(res => res.text())
  }

  async json (src) {
    const res = await fetch(src)
    return await res.json()
  }

  async xml (src) {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
    const onProxy = parse(`${DataFetch.PROXY}/${src}`, headers)
    const offProxy = parse(src, headers)
    return Promise.any([onProxy, offProxy]).then(res => res)
  }
}
