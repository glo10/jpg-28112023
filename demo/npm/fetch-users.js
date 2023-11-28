export default class user {
  findAll () {
    console.log('1')
    fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(users => {
        console.log('2')
        console.log('users', users)
        const ul = document.querySelector('ul')
        for (let i = 0; i < users.length; i++) {
          const li = document.createElement('li')
          const img = document.createElement('img')
          img.src = users[i].avatar_url
          li.textContent = users[i].login
          li.append(img)
          ul.append(li)
        }
      })
      .catch(error => {
        console.error('error', error)
      })
    console.log('3')
  }
}
