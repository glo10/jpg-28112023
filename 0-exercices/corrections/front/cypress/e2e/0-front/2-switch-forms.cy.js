describe('Switch sign in and sign up forms', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should show by default sign in form', () => {
    cy.get('h1').should($el => {
      expect($el.text()).equal('Connexion')
    })
  })

  it('Should change form from sign in to sign up', () => {
    cy.get('input[type=button]').click({ force: true })
    cy.get('h1').should($el => {
      expect($el.text()).equal('Inscription')
    })
    cy.get('input, select').should($fields => {
      expect($fields.length).equal(12) // included buttons and hidden
    })
  })

  it('Should change form from sign up in to sign in', () => {
    cy.get('input[type=button]').click({ force: true })
    cy.get('input[type=button]').click({ force: true })
    cy.get('h1').should($el => {
      expect($el.text()).equal('Connexion')
    })

    cy.get('input, select').should($fields => {
      expect($fields.length).equal(4) // included buttons
    })
  })

  describe('Countries and cities testing', () => {
    beforeEach(() => {
      cy.get('input[type=button]').click({ force: true })
    })

    it('Should have countries on load', () => {
      cy.get('select[name=country]').should('exist')
    })

    it('Should have cities when country have been selected', () => {
      cy.get('select[name=country]').select('France')
      cy.get('select[name=city]').should('exist')
    })
  })
})
