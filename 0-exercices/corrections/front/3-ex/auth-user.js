import { getHelpMessages } from './helpMessage.js'

class AuthUser extends HTMLElement {
  // static variables propre à la classe, "globale à toutes les instances (objets)"
  static SIGN_IN_TPL = 'html/_partials/sign-in.html'
  static SIGN_UP_TPL = 'html/_partials/sign-up.html'

  /**
   * Constructor
   * @param {string} src source of form HTML template
   * @param {Object} dataFetch object to fetch template
   * @param {Array} fields inputs, select, etc.
   * @param {Object} countryCity Object to get countries and cities
   */
  constructor (src = null, dataFetch = null, fields = null, countryCity = null) {
    super()
    this.fields = fields
    this.src = src
    this.dataFetch = dataFetch
    this.countryCity = countryCity
  }

  /**
   * @returns void
   */
  async connectedCallback () {
    this.innerHTML = await this.dataFetch.html(this.src)
    this.fields = getHelpMessages(this)
    this.switch()
    this.onToggleHelpMessage()
    // this.onSubmit()
    this.countryCity.render()
      .then(() => {
        return this.onChangeCountry()
      })
      .then(() => {
        this.onChangeCity()
      })
  }

  /**
   * Switch forms (sign in and sign up)
   * @returns void
   */
  switch () {
    this.querySelector('input[type=button]').addEventListener('click', (e) => {
      e.preventDefault()
      if (!this.querySelector('input[type=button]').value.endsWith('xion')) {
        this.src = this.src.replace(/sign-in\.html/g, 'sign-up.html')
      } else {
        this.src = this.src.replace(/sign-up\.html/g, 'sign-in.html')
      }
      this.replaceWith(this)
    })
  }

  /**
  * Handle blur and focus event
  * @returns void
  */
  onToggleHelpMessage () {
    const size = this.fields.length
    for (let i = 0; i < size; i++) {
      const field = this.fields[i]
      // l'objet gère 2 template (connexion, inscription) qui n'ont pas les mêmes éléments dans leur formulaire
      if (field.el) {
        ['focus', 'blur'].forEach(event => {
          field.el.addEventListener(event, (e) => {
            const msg = event === 'focus' ? field.msg : ''
            e.target.parentElement.firstElementChild.innerHTML = msg
          })
        })
      }
    }
  }

  /**
   * Handle contries
   * @returns Promise
   */
  onChangeCountry () {
    return new Promise(resolve => {
      const el = document.querySelector('[name=country]')
      if (el) {
        el.addEventListener('change', async () => {
          const cities = await this.countryCity.getCitiesFrom(el.value)
          this.countryCity.replaceInputBySelect(this.querySelector('[name=city]'), 'Choisir une ville', cities)
          resolve(1)
        })
      }
    })
  }

  /**
   * Handle cities
   * @returns void
   */
  onChangeCity () {
    const el = this.querySelector('[name=city]')
    // évite d'avoir une erreur dans le contexte d'exécution avec le formulaire de connexion
    if (el) {
      el.addEventListener('change', (e) => {
        const data = e.target.options[e.target.selectedIndex].dataset
        this.querySelector('[name=cityLatitude]').value = data.latitude
        this.querySelector('[name=cityLongitude]').value = data.longitude
      })
    }
  }

  /**
   * Handle submit
   * @returns void
   */
  onSubmit () {
    this.querySelector('input[type=submit]').addEventListener('click', (e) => this.checkValues(e))
  }

  /**
   * Check form values
   * @param {object} e event object
   * @returns void
   */
  checkValues (e) {
    e.preventDefault()
    const alertUser = this.querySelector('.alert.alert-danger')
    let isEmpty = false // témoin (flag)
    const size = this.fields.length
    for (let i = 0; i < size; i++) {
      const field = this.fields[i]
      if (field.el && field.el.value === '') { // identifie un champ vide
        isEmpty = true
        if (!alertUser) { // création d'un paragraphe
          const p = document.createElement('p')
          p.classList.add('alert', 'alert-danger', 'my-3')
          p.textContent = field.msg
          this.insertAdjacentHTML('afterbegin', p.outerHTML)
        } else { // remplacement du texte actuel
          alertUser.textContent = field.msg
        }
        /*
        * Inutile de boucler les autres champs vide
        * on peut quitter la boucle dès le premier champ vide rencontré.
        */
        break
      }
    }
    if (!isEmpty && alertUser) { // tous les champs sont remplis
      alertUser.remove()
    }
  }
}
customElements.define('auth-user', AuthUser)
export default AuthUser
