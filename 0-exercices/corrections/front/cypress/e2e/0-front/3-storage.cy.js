describe('Storage testing', () => {
  beforeEach(() => {
    cy.visit('html/news.html')
  })

  afterEach(() => {
    cy.clearAllLocalStorage()
  })

  describe('Extern call APIs and item in news in localStorage', () => {
    it('Should request successfully france24 and lemonde', () => {
      cy.intercept('GET', 'https://www.france24.com/fr/rss', { fixture: 'france24.xml' }).as('france24')
      cy.intercept('GET', 'https://www.lemonde.fr/rss/plus-lus.xml', { fixture: 'lemonde.xml' }).as('lemonde')
      // cy.visit('news.html')
      cy.wait('@france24').its('response.statusCode').should('eq', 200)
      cy.wait('@lemonde').its('response.body').should('include', '<?xml version="1.0" encoding="UTF-8"?>')
      cy.get('h1').should(() => {
        expect(localStorage.getItem('news')).to.not.be.null
      })
    })

    describe('Clear localStorage and don\'t use it', () => {
      [
        'https://www.lemonde.fr/rss/plus-lus.xml',
        'https://www.france24.com/fr/rss'
      ].forEach(function (url) {
        it(`Should get data from ${url}`, () => {
          let requestCounter = 0
          const responseCounter = 0

          cy.intercept(url, (req) => {
            requestCounter++
            req.on('response', () => { requestCounter++ })
          })

          cy.wait(1000).then(() => {
            expect(requestCounter).to.eq(1)
            expect(responseCounter).to.eq(1)
          })
        })
      })
    })
  })

  describe('Use localStorage', () => {
    [
      'https://www.lemonde.fr/rss/plus-lus.xml',
      'https://www.france24.com/fr/rss'
    ].forEach(function (url) {
      it(`Should get data from ${url}`, () => {
        cy.visit('news.html') // second call = data in localstorage
        let requestCounter = 0
        const responseCounter = 0

        cy.intercept(url, (req) => {
          requestCounter++
          req.on('response', () => { requestCounter++ })
        })

        cy.wait(1000).then(() => {
          expect(requestCounter).to.eq(0)
          expect(responseCounter).to.eq(0)
        })

        cy.get('.card').should('have.length.greaterThan', 10)
      })
    })
  })
})
