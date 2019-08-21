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
    longitude: 121.3,
    latitude: 31.4,
    runways: [
      {
        number: '16',
        ident: 'IZSL',
        latitude: 22.31,
        longitude: 113.23,
        elevation: 22,
        frequency: '111.10',
        trueHeading: 18.1,
        magneticHeading: 20,
        glideSlope: 3
      },
      {
        number: '34',
        ident: 'IZSP',
        latitude: 22.31,
        longitude: 113.23,
        elevation: 22,
        frequency: '111.10',
        trueHeading: 18.1,
        magneticHeading: 20,
        glideSlope: 3
      }
    ]
  },
  {
    ICAO: 'ZSSS',
    longitude: 121.3,
    latitude: 31.4,
    runways: [
      {
        number: '16',
        ident: 'IZSL',
        latitude: 22.31,
        longitude: 113.23,
        elevation: 22,
        frequency: '111.10',
        trueHeading: 18.1,
        magneticHeading: 20,
        glideSlope: 3
      },
      {
        number: '34',
        ident: 'IZSP',
        latitude: 22.31,
        longitude: 113.23,
        elevation: 22,
        frequency: '111.10',
        trueHeading: 18.1,
        magneticHeading: 20,
        glideSlope: 3
      }
    ]
  }
]

const saveUser = new Promise((resolve, reject) => {
  localforage.setItem('user', users).then(() => {
    resolve('user save success')
  }).catch((error) => {
    reject(error)
  })
})
const saveAirport = new Promise((resolve, reject) => {
  localforage.setItem('airport', airports).then(() => {
    resolve('airport save success')
  }).catch((error) => {
    reject(error)
  })
})
Promise.all([saveUser, saveAirport]).then((resultList) => {
  console.log(resultList)
}).catch((error) => {
  console.log(error)
})
export default localforage
