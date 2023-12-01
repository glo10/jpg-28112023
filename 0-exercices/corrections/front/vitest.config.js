import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      reporter: ['html'],
      reportsDirectory: './0-exercices/__tests__/coverage'
    },
    environmentMatchGlobs: [
      ['0-exercices/__tests__/*.test.js', 'jsdom']
    ],
    exclude: ['node_modules', 'stock', 'corrections', 'cypress']
  }
})
