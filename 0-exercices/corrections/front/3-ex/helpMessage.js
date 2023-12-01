export function getHelpMessages (element) {
  return [
    {
      el: element.querySelector('[name=lastname]'),
      msg: 'Veuillez saisir votre nom !'
    },
    {
      el: element.querySelector('[name=firstname]'),
      msg: 'Veuillez saisir votre prénom !'
    },
    {
      el: element.querySelector('input[type=email]'),
      msg: 'Veuillez saisir votre adresse e-mail !'
    },
    {
      el: element.querySelector('[name=password]'),
      msg: 'Veuillez saisir votre mot de passe !'
    },
    {
      el: element.querySelector('[name=confirm]'),
      msg: 'Veuillez confirmer votre mot de passe !'
    },
    {
      el: element.querySelector('[name=age]'),
      msg: 'Veuillez saisir votre age !'
    },
    {
      el: element.querySelector('[name=country]'),
      msg: 'Veuillez choisir un pays !'
    },
    {
      el: element.querySelector('[name=city]'),
      msg: 'Veuillez choisir une ville !'
    }
  ]
}
