import AuthUser from './auth-user.js'
import CountryCity from './country-city.js'
import DataFetch from './data-fetch.js'
window.onload = () => {
  const auth = new AuthUser(
    './_partials/sign-in.html',
    new DataFetch(),
    null,
    new CountryCity(
      '../data/countries.json',
      '../data/cities.json'
    )
  )
  document.querySelector('main').append(auth)
}
