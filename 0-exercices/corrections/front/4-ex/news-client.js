import CityWeather from '../2-ex/city-weather'
import DataFetch from '../3-ex/data-fetch'
import Store from './store'
import CurrentNewsStore from './current-news-store'

// Lors du chargement de la page
window.onload = (event) => {
  const proxy = 'http://127.0.0.1:7000'
  const store = new Store()
  event.target.addEventListener('news', (e) => store.news(e))
  // scenario 1 : meteo
  const news = store.getNews() // stocker dans le localStorage
  console.log('localStorage client', news)
  const w = new CityWeather({
    country: 'France',
    name: 'Paris',
    latitude: 48.8534,
    longitude: 2.3488
  })

  // Ajout du customElement dans notre DOM
  document.querySelector('header').prepend(w)
  // Scenario 2 et 3 : news et modal
  const feeds = [
    { url: 'https://www.france24.com/fr/rss' },
    { url: 'https://www.lemonde.fr/rss/plus-lus.xml' }
  ]

  feeds
    .map(feed => {
      // ajoute le proxy à chaque élément de notre tableau et retourne le nouveau tableau à la fin
      feed.url = `${proxy}/${feed.url}`
      return feed
    })
    .forEach(async (feed) => {
      const news = new CurrentNewsStore(new DataFetch(), feed, [])
      document.querySelector('main').append(news)
      /*
      * On dispatche un événement personnalisé nommé news
      * Les éléments qui ont souscrit à cet événement
      * s'exécuteront lorsque l'événement aura lieu
      */
      news.dispatchEvent(new CustomEvent('news', {
        detail: {
          feed: news.feed,
          items: news.items
        },
        bubbles: true,
        cancelable: true
      }))
    })
}
