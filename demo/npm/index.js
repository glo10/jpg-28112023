import FormComponent from './form-component.js'
import User from './fetch-users.js'

// Ajout dynamique du customElement avec la logique (comportement géré depuis la classe du CustomElement)
document.querySelector('button').addEventListener('click', () => {
  const newForm = new FormComponent()
  document.querySelector('body').append(newForm)
})

const user = new User()
user.findAll()
