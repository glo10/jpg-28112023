import { EventEmitter } from 'events'
const app = new EventEmitter()
app.addListener('start', () => {
  console.log('hello world')
})
app.emit('start')
