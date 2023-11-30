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

  const name = 'nom'
  /**
   * On peut mélanger JQuery et VanillaJS (JavaScript natif)
   * JQuery est une façade (design patter)
   * qui permet de faire les mêmes choses que JS de façon simplifiée
   * Donc JQuery c'est du JS et les 2 notations peuvent être utilisé dans votre code
   */
  // Concaténation avec ` et ${nomVariable}` ${} va récupéré la valeur de la variable
  $(`input[name=${name}]`).on('keydown', function(e) {
    const p = document.querySelector('p')
    /**
     * avec $('p') on récupère un objet
     * donc si on fait une condition if($('p)) ça sera toujours vraie
     */ 
    // Concaténation avec l'opérateur + 
    const msg = 'Vous avez tapé ' + e.target.value
    if(p !== null) { // revient au même que de mettre if(p)
      p.innerHTML = msg
    } else {
      const newP = document.createElement('p')
      newP.innerHTML = msg
      $('body').append(newP)
    }
  })
})