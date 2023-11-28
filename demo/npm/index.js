import FormComponent from './form-component.js'

document.querySelector('button').addEventListener('click', () => {
  const newForm = new FormComponent()
  document.querySelector('body').append(newForm)
})
