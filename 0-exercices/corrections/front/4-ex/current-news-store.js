import CurrentNews from '../2-ex/current-news'
import Store from './store'

export default class CurrentNewsStore extends CurrentNews {
  connectedCallback () {
    super.connectedCallback()
    this.render()
  }

  async render () {
    const store = new Store()
    let news = store.getNews() ?? []
    let data = null
    /**
     *
     */
    const isAlreadyExists = news.find(old => old.feed.url === this.feed.url)
    data = isAlreadyExists ?? await super.render()
    this.innerHTML = `<h2>${data.feed.title}</h2>`
    data.items.forEach(item => {
      this.innerHTML += this.replaceWith(data.template, item)
    })
    // on met à jour le localstorage
    if (!isAlreadyExists) {
      news = [...news, data]
      store.save(localStorage, 'news', news)
    }
  }
}
customElements.define('current-news-store', CurrentNewsStore)
