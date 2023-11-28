class FormComponent extends HTMLElement {
  constructor () {
    super()
    this.innerHTML = ` 
    <form action="">
      <input type="text" placeholder="nom">
      <input type="text" placeholder="prenom">
      <input type="submit" value="envoyer">
    </form>
    `
  }

  connectedCallback () {
    this.onFocus()
    this.onBlur()
  }

  disconnectedCallback () {
    console.log('disconnected')
  }

  onBlur () {
    console.log('blur')
  }

  onFocus () {
    const inputs = this.querySelectorAll('input[type=text]')
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('focus', (e) => {
        console.log('focus', e.target.value)
      })
    }
  }
}
customElements.define('my-form', FormComponent)
export default FormComponent
