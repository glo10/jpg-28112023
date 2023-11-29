class CityWeather extends HTMLElement {
  // Propriété de classe, ne dépend pas des instances
  static TEMPERATURE_FORMAT = /\d{1,2}(\.\d{1,2}\s+)?/
  /**
   * 
   * @param {object} city contient les propriétés latitute et long d'une ville 
   * @param {DataFetch} dataFetch classe qui gère les appels vers des contenus local ou externe 
   */
  constructor (city, dataFetch) {
    super()
    this.city = city
    this.dataFetch = dataFetch
  }

  connectedCallback () {
    // get() retourne une promesse
    // on affiche le contenu du HTML uniquement après avoir obtenu la météo
    this.get().then(() => {
      this.render()
    })
  }

  /**
   * Affiche la météo à partir de la propriété city
   */
  render () {
    let result = this.city.name
    /**
     * Objet RegExp permet d'écrire des expressions régulières qu'on verra un peu plus tard
     * Ce n'était pas demandé de traiter avec les expression reg
     * On aurait pu juste faire typeof sur la temperature pour vérifier que c'est un nombre et ça marche aussi
     */
    const rgxTemp = new RegExp(CityWeather.TEMPERATURE_FORMAT)
    if (rgxTemp.test(this.city.temperature)) {
      result = `${result} ${this.city.temperature} ° C`
    }
    this.innerHTML = `<p>${result}</p>`
  }

  /**
   * Ici un exemple avec l'utilisation d'async et await pour attendre le résultat de la météo
   * Modifier notre propriété city et le retourner quoi qu'il arrive succès (try) ou error (catch) grâce à finally
   * @returns object
   */
  async get () {
    try {
      const data = await this.dataFetch.json(`https://api.open-meteo.com/v1/forecast?latitude=${this.city.latitude}&longitude=${this.city.longitude}&current_weather=true`)
      this.city.temperature = data.current_weather.temperature
    } catch (error) {
      // gestion de l'erreur mettant un message
      this.city.temperature = 'Impossible d\'obtenir la température de la ville'
    } finally {
      return this.city
    }
  }
}
customElements.define('city-weather', CityWeather)
export default CityWeather
