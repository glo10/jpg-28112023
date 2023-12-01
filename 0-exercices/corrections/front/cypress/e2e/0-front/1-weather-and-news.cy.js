import CityWeather from '../../../2-ex/city-weather'

describe('News and weather testing', () => {
  beforeEach(() => {
    cy.visit('html/news.html')
    cy.wait(5000)
  })

  describe('Article', () => {
    it('Should have almost one title, image, link, author and publication date', () => {
      cy.get('.h5').should('exist')
      cy.get('.card-img-top:first').should('exist')
      cy.get('.btn:first').should('exist')
      cy.get('.h5 + p').should('exist')
      cy.get('p>small').should('exist')
    })
  })

  describe('Modal', () => {
    beforeEach(() => {
      cy.get('article:first-of-type .open-modal:first').click({ force: true, timeout: 5000 })
    })

    it('Should show modal', () => {
      cy.get('.modal').should('be.visible')
    })

    it('Should show title on modal', () => {
      cy.get('.modal h5').should(($elt) => {
        expect($elt[0].innerText).to.not.eq('{{title}}')
      })
    })

    it('Should show description on modal', () => {
      cy.get('.modal .card-text').should(($elt) => {
        expect($elt[0].innerText).to.not.eq('{{description}}')
      })
    })

    it('Should show image on modal', () => {
      cy.get('.modal .modal-content img').should(($elt) => {
        expect($elt[0].innerText).to.not.eq('{{thumbnail.url}}')
      })
    })
  })

  describe('Weather', () => {
    it('Should show current weather', () => {
      cy.get('header p').should($elt => {
        expect($elt.text()).to.match(CityWeather.TEMPERATURE_FORMAT)
      })
    })
  })
})
