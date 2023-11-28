class SignIn extends HTMLElement {
  /**
   * Constructor
   * @returns void
   */
  constructor () {
    super() // Héritage du constructeur de la classe mère HTMLElement
    this.render() // Notre fonction pour le rendu du DOM
    this.inputs = [ // Nos inputs element dans le DOM + message d'aide
      {
        el: this.querySelector('input[type=email]'),
        msg: 'Veuillez saisir votre adresse e-mail !'
      },
      {
        el: this.querySelector('input[type=password]'),
        msg: 'Veuillez saisir votre mot de passe !'
      }
    ]

    this.submitEl = this.querySelector('input[type=submit]')
  }

  /**
   * Appelé une fois que le DOM est chargé
   * Ajout des écouteurs des événements
   * @returns void
   */
  connectedCallback () {
    this.onFocusShowHelpMessage()
    this.onBlurRemoveHelpMessage()
    this.onSubmitCheckEmptyFields()
  }

  /**
   * Appelé une fois que l'élément est supprimé du DOM
   * @returns void
   */
  disconnectedCallback () {
    // console.info('supprimé du DOM')
  }

  /**
   * Rendu HTML
   * @returns void
   */
  render () {
    this.innerHTML =
    `
    <h1>Connexion</h1>
    <form autocomplete="off">
      <div class="my-3">
        <p class="form-help"></p>
        <input
          type="email"
          class="form-control"
          name="email"
          placeholder="email"
        >
      </div>
      <div class="my-3">
        <p class="form-help"></p>
        <input
          type="password"
          class="form-control"
          name="password"
          placeholder="mot de passe"
        >
      </div>
      <div class="my-3 align-right">
        <input type="submit" value="Valider" class="btn btn-success me-5" data-endpoint="signin">
        <input type="button" value="Inscription" class="btn btn-info">
      </div>
    </form>`
  }

  /**
   * Gestion de l'événement focus
   * @returns void
   */
  onFocusShowHelpMessage () {
    const size = this.inputs.length
    for (let i = 0; i < size; i++) {
      const input = this.inputs[i]
      input.el.addEventListener('focus', (e) => {
        e.target.parentElement.firstElementChild.innerHTML = input.msg
      })
    }
  }

  /**
   * Gestion de l'événement perte de focus (blur)
   * @returns void
   */
  onBlurRemoveHelpMessage () {
    const size = this.inputs.length
    for (let i = 0; i < size; i++) {
      const input = this.inputs[i].el
      input.addEventListener('blur', (e) => {
        e.target.parentElement.firstElementChild.innerHTML = ''
      })
    }
  }

  /**
   * Gestion de l'événement submit
   * @returns void
   */
  onSubmitCheckEmptyFields () {
    this.submitEl.addEventListener('click', (e) => {
      e.preventDefault()
      const alertUser = this.querySelector('.alert.alert-danger')
      let isEmpty = false
      const size = this.inputs.length
      for (let i = 0; i < size; i++) {
        const input = this.inputs[i]
        if (input.el.value === '') {
          isEmpty = true
          if (!alertUser) {
            const p = document.createElement('p')
            p.classList.add('alert', 'alert-danger', 'my-3')
            p.textContent = 'email et/ou mot de passe obligatoires'
            this.insertAdjacentHTML('afterbegin', p.outerHTML)
          }
          return
        }
      }
      if (!isEmpty && alertUser) {
        alertUser.remove()
      }
    })
  }
}

/*
 * La balise customisé
 * convention de nommage kebab-case (séparé par un tiret)
 * Permet de faire la distinction avec les balises html classique
 */
customElements.define('sign-in', SignIn)
/*
* Export de la classe pour pouvoir l'importer et l'utiliser
* dans un ou plusieurs autres fichiers JS
*/
export default SignIn
