class FormComponent extends HTMLElement {
  constructor () {
    super()
    // Contenu HTML de mon composant
    this.innerHTML = ` 
    <form action="">
      <input type="text" placeholder="nom">
      <input type="text" placeholder="prenom">
      <input type="submit" value="envoyer">
    </form>
    `
  }

  /**
   * S'execute lorsque l'élément est ajouté dans le DOM
   */
  connectedCallback () {
    this.onFocus()
    this.onBlur()
  }

  /**
   * S'exécute lorsque l'élément est rétiré du DOM
   */
  disconnectedCallback () {
    console.log('disconnected')
  }

  /**
   * Fonction classique qui effectue des opérations
   * Cette fonction est appelé dans la fonction connectedCallback
   */
  onBlur () {
    console.log('blur')
  }

  /**
   * Idem que onBlur()
   */
  onFocus () {
    // Récupération de tous les inputs de type text
    // querySelectorAll renvoie un tableau d'ou la nécessité de parcours ce tableau à l'aide d'une boucle
    const inputs = this.querySelectorAll('input[type=text]')
    for (let i = 0; i < inputs.length; i++) {
      // Ajout/greffer un événement focus pour chaque input
      inputs[i].addEventListener('focus', (e) => {
        console.log('focus', e.target.value)
      })
    }
  }
}
// Déterminer la balise associé à notre CustomElement en respectant la convention de nommage kebab-case
customElements.define('my-form', FormComponent)
// Export pour pouvoir l'utiliser ailleurs dans d'autres scripts
export default FormComponent
