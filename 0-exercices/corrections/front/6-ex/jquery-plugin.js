import jQuery from 'jquery'

(function ($) {
  $.fn.checkName = function (e) { // vérification du prénom et nom
    return /^[a-z]+(?!_)(\s|-)?[a-z]+$/i.test(e.target.value)
  }

  $.fn.checkAge = function (e) { // verification de l'age
    const age = parseInt(e.target.value) //  parseInt convertie un string en number
    return /^(1[0-2][0-9]|1[4-9]|[2-9][0-9]|130)$/.test(age)
  }

  $.fn.checkLocation = function (e) { // vérification de la ville et pays
    return /^[a-z]+(?!_)(\s|-)?[a-z0-9|\s]+$/i.test(e.target.value)
  }

  $.fn.checkEmail = function (e) { // vérification email
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/.test(e.target.value)
  }

  $.fn.checkPassword = function (e) { // vérification du mot de passe
    return /^(?!abcdef|qwerty|azerty|123456)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[&$+\-*\/#~€%^!-_]).{15,36}/.test(e.target.value)
  }

  $.fn.check = function (e) { // agregateur de toutes les fonctions de vérification précédente
    /*
    * on recupère la valeur de l'attribut type d'un input ou le nom de la balise HTML
    * get(0) permet d'accéder à l'élément, vous pouvez faire un console.log($(this)) pour voir la structure globale
    * 
    */
    const el = $(this).get(0).type ?? $(this).get(0).tagName 
    switch (el.toLowerCase()) {
      case 'option':
        return $(this).checkLocation(e)
      case 'number':
        return $(this).checkAge(e)
      case 'text':
        return $(this).checkName(e)
      case 'email':
        return $(this).checkEmail(e)
      case 'password':
        return $(this).checkPassword(e)
      default:
        throw new Error('Can\'t check data')
    }
  }

  $.fn.validation = function () { // gestion des événements et des vérifications
    $(this).on('keyup change', function (e) { // vérification à chaque lever de la touche du clavier
      const alertInfo = $(this).parent().find('.alert.alert-info')
      if (!$(this).check(e)) { // format incorrect
        const format = $(this).data('format') ?? 'Format incorrect'
        $(this).css({ 'border-color': 'red' })
        if (alertInfo.length === 0) { // Création d'un span pour afficher le message d'erreur
          $(this).parent().append(`<span class="alert alert-info">${format}</span>`)
          $(this).parent().find('.alert.alert-info')
            .animate({ bottom: '-10px' }, 'slow')
        }
      } else { // format correct
        $(this).css({ 'border-color': '#ced4da' })
        alertInfo
          .fadeOut(2000, () => {
            $(alertInfo).remove()
          })
      }
    })
    return $.fn
  }

  $.fn.fadeOutRemove = () => {
    $(this).on('blur', function () {
      const alertInfo = $(this).parent().find('.alert.alert-info')
      $(alertInfo).parent().find('.alert.alert-info')
        .fadeOut(3000, () => {
          $(alertInfo).remove()
        })
    })
    return $.fn
  }
}(jQuery))
