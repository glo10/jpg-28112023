const nb1 = 10
const nb2 = '15'
const sum = nb1 + nb2
console.log('somme ', sum)
const numbers = [nb1, nb2]
const user = {
  name: 'Glodie',
  age: 32,
  address: {
    city: 'paris',
    country: 'France',
    cp: 75014
  }
}

const languages = ['JS', 'HTML', 'CSS']
const seasons = ['hiver', 'printemps', 'automne']

class User {
  firstname
  lastname
  age

  constructor (firstname, lastname, age) {
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
  }

  getUser() {
    return `${this.firstname} ${this.lastname}`
  }
}
