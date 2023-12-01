type USER {
  name: string,
  age: number,
  address: Address
}

type Address {
  city: string,
  country: string,
  cp: number
}

const nb1: number = 10
const nb2: number = 15
const sum = nb1 + nb2
console.log('somme ', sum)
const numbers: number[] = [nb1, nb2]

const user : USER = {
  name: 'Glodie',
  age: 32,
  address: {
    city: 'paris',
    country: 'France',
    cp: 75014
  }
}

const languages : string[] = ['JS', 'HTML', 'CSS']
const seasons: string[] = ['hiver', 'printemps', 'automne']

class User {
  constructor (private firstname: string, private lastname: string , private age: number) {
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
  }

  getUser(): string {
    return `${this.firstname} ${this.lastname}`
  }
}

const userclass: User = new User('Glodie', 'Tshimini', 32)
const username: string = userclass.getUser()