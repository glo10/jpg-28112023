import { stdin as input, stdout as output } from 'process'
import { createInterface } from 'readline/promises'

const app = createInterface({ input, output })
const lastName = await app.question('Quel est votre nom ? ') // await bloque le script tant qu'on a pas la réponse
const firstName = await app.question('Quel est votre prénom ? ')
console.log(`Bonjour ${lastName} ${firstName} !`)
app.close()
