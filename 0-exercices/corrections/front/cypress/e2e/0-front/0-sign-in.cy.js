const email = 'input[type=email]'
const pwd = 'input[type=password]'

describe('Homepage sign in', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Focus and blur events', () => {
    it('Should show help message fro email', () => {
      cy.get(email)
        .focus()
        .should(($input) => {
          expect($input.prev().text()).equal('Veuillez saisir votre adresse e-mail !')
        })
    })

    it('Should show password help message', () => {
      cy.get(pwd)
        .focus()
        .should(($input) => {
          expect($input.prev().text()).equal('Veuillez saisir votre mot de passe !')
        })
    })

    it('should remove e-mail help message', () => {
      cy.get(email)
        .focus()
        .blur()
      cy.get(pwd, { timeout: 1 * 1000 }).should(($el) => {
        expect($el[0].previousElementSibling.innerHTML).contains('')
      })
    })

    it('should remove password help message', () => {
      cy.get(pwd)
        .focus()
        .blur()
      cy.get(pwd, { timeout: 1 * 1000 }).should(($el) => {
        expect($el[0].previousElementSibling.innerHTML).contains('')
      })
    })
  })

  describe.only('Submit event', () => {
    const msg = 'email et/ou mot de passe obligatoires'
    it('Should show danger message when password is empty', () => {
      cy.get(email).type('contact@tshimini.fr')
      cy.get('input[type=submit]')
        .click({ force: true })
      cy.get('.alert-danger', { timeout: 1 * 1000 }).should($elt => {
        expect($elt.html()).equal(msg)
      })
    })

    it('Should show danger message when email is empty', () => {
      cy.get(pwd).type('123456')
      cy.get('input[type=submit]')
        .click({ force: true })
      cy.get('.alert-danger').should($elt => {
        expect($elt.html()).equal(msg)
      })
    })

    it('should remove error message', () => {
      cy.get('input[type=submit]').click({ force: true })
      cy.get('.alert-danger').should('exist')
      cy.get(email).type('contact@tshimini.fr')
      cy.get(pwd).type('123456')
      cy.get('input[type=submit]').click({ force: true })
      cy.get('.alert.alert-danger', { timeout: 1 * 1000 }).should('not.exist')
    })
  })
})
