$(function() {
  // Animation avec Jquery
  // $('h1')
  // .fadeIn(5000)
  // .hide(10000)
  
  // Créer un plugin regex avec jquery

  /**
   * vérifie qu'une valeur du formulaire respecte un certain format donné
   * via une regex
   * @returns boolean
   */
  $.fn.check = function() {
    /*
    Expression regulière qui va se faire sur la valeur du champ sélectionné 
    depuis le sélecteur jquery actuel
    */
    return /\w{2,}/.test($(this).val())
  }

  // utilisation de la fonction
  $('input').on('keyup', function () {
    console.log('check', $(this).check())
  })
})