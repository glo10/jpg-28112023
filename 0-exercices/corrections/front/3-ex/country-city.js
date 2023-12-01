export default class CountryCity {
  /**
   * Constructor
   * @param {string} endpointCountries link to json file contains countries 
   * @param {*} endpointCities link to json file contains cities
   */
  constructor (endpointCountries = null, endpointCities = null) {
    this.endpointCountries = endpointCountries
    this.endpointCities = endpointCities
  }

  /**
   * Get countries and then eplace input by select with items (countries or cities)
   * @returns void
   */
  async render () {
    return this.getCountries()
      .then(countries => {
        this.replaceInputBySelect(document.querySelector('input[name=country]'), 'Choisir un pays', countries)
      })
  }

  /**
   * Replace input by select
   * @param {inputElement} input
   * @param {*} placeHText placeholder
   * @param {Array} data info to create options
   * @returns void
   */
  replaceInputBySelect (input, placeHText, data) {
    const select = document.createElement('select')
    if (select === null || input === null) {
      return
    }
    select.name = input.name
    const placeholder = document.createElement('option')
    placeholder.value = -1
    placeholder.textContent = placeHText
    placeholder.disabled = 'disabled'
    placeholder.selected = 'selected'
    select.append(placeholder)
    for (let i = 0; i < data.length; i++) {
      const v = data[i]
      const option = document.createElement('option')
      option.value = v.name
      option.setAttribute('data-latitude', v.latitude)
      option.dataset.longitude = v.longitude
      const nameFr = ('translations' in v) ? v.translations.fr : v.name
      option.textContent = nameFr
      select.append(option)
    }
    input.replaceWith(select)
  }

  /**
   * Get countries from endpoint
   * @returns {string} JSON collections of countries
   */
  async getCountries () {
    try {
      const data = await fetch(this.endpointCountries)
      return data.json()
    } catch (error) {
      console.error('error', error)
      return []
    }
  }

  async getCitiesFrom (countryName) {
    try {
      const data = await fetch(this.endpointCities)
      const res = await data.json()
      const country = res.find(country => country.name === countryName)
      return country.cities
    } catch (error) {
      console.error('error', error)
      return []
    }
  }
}
