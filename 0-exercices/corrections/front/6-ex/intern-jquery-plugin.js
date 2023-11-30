/**
 * From intern
 */
export default addJQuery  = () => {
    (function ($) {
      const RegExTests = [
        {
          name: 'email',
          test: /\w+@\w+\.\w+/,
          message: 'Le format de l\'adresse mail n\'est pas correct'
        },
        {
          name: 'lastname',
          test: /\w{2,}/,
          message: 'Ce champ doit faire au moins 2 caractères'
        },
        {
          name: 'firstname',
          test: /\w{2,}/,
          message: 'Ce champ doit faire au moins 2 caractères'
        }
      ]
 
      $.fn.checkField = function () {
        const TestToDo = RegExTests.find((element) => element.name === $(this).get(0).name)
        console.dir(TestToDo)
        const Test = TestToDo.test.test($(this).val())
        if (Test) { $(this).parent().children('p').text('') } else { $(this).parent().children('p').text(TestToDo.message) }
      }
 
      $('input').on('keyup', function () {
        $(this).checkField()
      })
    }(jQuery))
  }