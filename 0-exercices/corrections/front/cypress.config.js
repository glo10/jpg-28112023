const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5501/0-exercices/corrections/front/1-ex/src',
    viewportHeight: 619,
    viewportWidth: 1304,
    chromeWebSecurity: false
  }
})
