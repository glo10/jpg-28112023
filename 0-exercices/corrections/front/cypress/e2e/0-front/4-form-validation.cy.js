describe('Form validation testing', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Sign In', () => {
    it('Should show error message for email', () => {
      cy.get('[type=email]').type('hello@gmail')
      cy.get('.alert.alert-info').should(elt => {
        expect(elt.text()).to.equal('Format incorrect')
      })
    })

    it('Should show error message for password', () => {
      cy.get('[type=password]').type('12345')
      cy.get('.alert.alert-info').should(elt => {
        expect(elt.text()).to.equal('Format incorrect')
      })
    })
  })

  describe('Sign Up', () => {
    beforeEach(() => {
      cy.get('[type=button]').click({ force: true })
    })

    it('Should show error message for lastname', () => {
      cy.get('[name=lastname]').type('A')
      cy.get('.alert.alert-info').should(elt => {
        expect(elt.text()).to.include('Au moins 2 caractères')
      })
    })

    it('Should show error message for firstname', () => {
      cy.get('[name=firstname]').type('A1')
      cy.get('.alert.alert-info').should(elt => {
        expect(elt.text()).to.include('aucun chiffre')
      })
    })

    it('Should show error for email', () => {
      cy.get('[type=email]').type('A')
      cy.get('.alert.alert-info').should(elt => {
        expect(elt.text()).to.include('Exemple')
      })
    })

    it('Should show error for password', () => {
      cy.get('[type=password]:first').type('1Ab$234567890')
      cy.get('.alert.alert-info').should(elt => {
        expect(elt.text()).to.include('15 et 36')
      })
    })

    it('Should not show error for password', () => {
      cy.get('[type=password]:first').type('1Ab$23456789014')
      cy.get('[type=password]:first').focus()
      cy.get('.alert.alert-info').should('not.exist')
    })

    it('Should show error for age under 14', () => {
      cy.get('[type=number]').type('13')
      cy.get('.alert.alert-info').should(elt => {
        expect(elt.text()).to.include('14 et 130')
      })
    })

    it('Should show error for age above 130', () => {
      cy.get('[type=number]').type('131')
      cy.get('.alert.alert-info').should(elt => {
        expect(elt.text()).to.include('14 et 130')
      })
    })
  })
})
