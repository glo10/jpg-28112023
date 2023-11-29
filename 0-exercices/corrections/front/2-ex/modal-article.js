class ModalArticle extends HTMLElement {
  constructor (content = null) {
    super()
    this.innerHTML = content
  }

  connectedCallback () {
    this.close()
  }

  /**
   * Fermer la modale = la cacher en modifiant la propriété display
   */
  close () {
    const btns = document.querySelectorAll('.close, .btn-close')
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', () => {
        document.querySelector('.modal').style.display = 'none'
      })
    }
  }
}
customElements.define('modal-article', ModalArticle)
export default ModalArticle
