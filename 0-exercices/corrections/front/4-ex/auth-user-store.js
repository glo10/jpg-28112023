import AuthUser from '../3-ex/auth-user.js'

export default class AuthUserStore extends AuthUser {
  onSubmit () {
    super.onSubmit()
    document.querySelector('input[type=submit]').addEventListener('click', (e) => {
      e.preventDefault()
      const form = new FormData(document.querySelector('form'))
      const user = {}
      for (const data of form.entries()) {
        const key = data[0]
        const value = data[1]
        if (!(key === 'password' || key === 'confirm' || key.length === 0 || value.length === 0)) {
          user[key] = value
        }
      }
      this.dispatchEvent(new CustomEvent('user'), {
        detail: { user },
        bubbles: true,
        cancelable: true
      })
    })
  }
}
customElements.define('auth-user-store', AuthUserStore)
