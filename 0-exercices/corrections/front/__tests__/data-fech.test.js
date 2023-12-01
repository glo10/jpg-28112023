import { describe, it, expect, vi, afterEach } from 'vitest'
import { fetchMockText, baseHtml } from './utilities'
import fileFetch from 'file-fetch'
import DataFetch from '../3-ex/data-fetch'
const templateProvider = [
  ['Sign up', `${baseHtml}/_partials/sign-up.tpl`, fileFetch(`${baseHtml}/_partials/sign-up.html`), '<h1>Inscription</h1>'],
  ['Sign in', `${baseHtml}/_partials/sign-in.tpl`, fileFetch(`${baseHtml}/_partials/sign-in.html`), '<h1>Connexion</h1>'],
  ['Article', `${baseHtml}/_partials/article.tpl`, fileFetch(`${baseHtml}/_partials/article.html`), '<article class="card">'],
  ['Article', `${baseHtml}/_partials/modal.tpl`, fileFetch(`${baseHtml}/_partials/modal.html`), '<div class="modal">']
]
global.fetch = vi.fn()
describe.skip('Fetch data testing', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it.each(templateProvider)('Should get %s template from %s', async (name, src, file, expected) => {
    // Arrange
    const dataFetch = new DataFetch()
    await fetch.mockResolvedValue(fetchMockText(file))
    // Act
    const res = await dataFetch.html(src)
    const html = await res.text()
    // Assert
    expect(fetch).toHaveBeenCalledWith(src)
    expect(html).toContain(expected)
  })
})
