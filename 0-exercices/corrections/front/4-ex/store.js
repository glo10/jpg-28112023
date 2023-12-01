export default class Store {
  #feeds = []
  #user = {}
  #weather = {}
  constructor () {
    // Design pattern singleton = on aura qu'une seule instance du store dans toute l'application
    if (!Store.instance) {
      Store.instance = this
    }
    return Store.instance
  }

  /**
   * Save on sessionStorage or localStorage
   * @param {Object} st StorageAPI sessionStorage or localStorage
   * @param {string} key
   * @param {string} value
   * @returns self
   */
  save (st, key, value) {
    if (typeof value === 'object') {
      // empeche de stocker un objet vide
      if (!Object.keys(value).length) {
        return this
      }
      value = JSON.stringify(value)
    }
    st.setItem(key, value)
    return this
  }

  /**
   * Save news
   * @param {Object} e Event object
   */
  news (e) {
    if (e.detail.data !== null && this.#feeds.includes(t => t.feed.url !== e.detail.data.feed.url)) {
      this.#feeds.push(e.detail.data)
      this.save(localStorage, 'news', this.#feeds)
    }
  }

  /**
   * Get news from localStorage with the key 'news'
   * @returns Array
   */
  getNews () {
    const feeds = localStorage.getItem('news')
    return feeds !== null ? JSON.parse(feeds) : null
  }

  // --------Pour le dernier exercie-------
  /**
   * Get user from sessionStorage
   * @returns Object user
   */
  getUser () {
    const user = sessionStorage.getItem('user')
    return user !== null ? JSON.parse(user) : null
  }

  /**
   * Save user on sessionStorage
   * @param {Object} data user
   * @returns void
   */
  user (data) {
    this.#user = data
    this.save(sessionStorage, 'user', this.#user)
  }

  /**
   * Remove user from sessionStorage
   * @returns void
   */
  logout () {
    this.#user = null
    sessionStorage.removeItem('user')
  }

  // ---- BONUS HORS exercice, besoin plus tard après les exercices du back-end
  /**
   * Save temperature in localStorage
   * @param {Object} e Event
   * @returns void
   */
  weather (e) {
    this.#weather.temperature = e.detail.temperature
    this.save(localStorage, 'weather', this.#weather)
  }
}
