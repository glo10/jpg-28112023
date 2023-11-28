import FormComponent from './form-component.js'

// Ajout dynamique du customElement avec la logique (comportement géré depuis la classe du CustomElement)
document.querySelector('button').addEventListener('click', () => {
  const newForm = new FormComponent()
  document.querySelector('body').append(newForm)
})
