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
  /*
  * Attention pour la callback (fonction de rappel)
  * Avec la notation fléché () => {}, vous allez perdre le contexte de l'événement
  *   this va faire référence au contexte globale
  * Avec function() {} this fait référence directement à l'élément qu'on a séléctionné
  */
  $('input').on('keyup', function () {
    console.log('check', $(this).check())
  })
})