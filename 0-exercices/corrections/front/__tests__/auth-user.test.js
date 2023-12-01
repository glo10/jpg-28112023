import { describe, it, expect, afterEach } from 'vitest'
import AuthUser from '../3-ex/auth-user'
import userEvent from '@testing-library/user-event'
describe('Form authentification testing', async () => {
  const providers = [
    ['sign up', 'sign in', 'sign-up.html', 'connexion', 'sign-in.html'],
    ['sign in', 'sign up', 'sign-in.html', 'inscription', 'sign-up.html']
  ]

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it.each(providers)('Should change template from %s to %s', async (from, to, src, value, finalSrc) => {
    // Arrange
    const auth = new AuthUser(src)
    auth.innerHTML = `<input type="button" value="${value}" />`
    // Act
    auth.switch()
    await userEvent.click(auth.querySelector('input[type=button]'))
    // Assert
    expect(auth.src.endsWith(finalSrc)).toBe(true)
  })

  it.todo('Should have alert message')
  it.todo('Should not have alert message')
})
