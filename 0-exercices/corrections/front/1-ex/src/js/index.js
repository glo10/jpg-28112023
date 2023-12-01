import SignIn from './sign-in.js'
// Lors du chargement de la page
window.onload = () => {
  // Ajouter le customElement dans notre DOM
  document.querySelector('main').prepend(new SignIn())
}
