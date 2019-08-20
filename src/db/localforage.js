import localforage from 'localforage'
import { Encrypt } from '@/lib/utils'

localforage.config({
  name: 'DataBase',
  version: '1.0'
})

const users = [
  {
    username: 'Root',
    password: Encrypt('123456'),
    role: 0
  },
  {
    username: 'Admin',
    password: Encrypt('123456'),
    role: 1
  }
]

const airports = [
  {
    ICAO: 'VHHH',
    lon: 121.3,
    lat: 31.4,
    runways: ['16', '34']
  },
  {
    ICAO: 'ZSSS',
    lon: 121.3,
    lat: 31.4,
    runways: ['16', '34']
  }
]

localforage.setItem('user', users).then(() => {
  console.log('success')
}).catch((err) => {
  console.log(err)
})
localforage.setItem('airport', airports).then(() => {
  console.log('success')
}).catch((err) => {
  console.log(err)
})

export default localforage
