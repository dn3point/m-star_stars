import AsyncStorage from '@react-native-async-storage/async-storage'
import {VERSION} from './constants'

export const USER_KEY = 'starstars-user'
export const STAR_KEY = 'starstars-star'
export const VERSION_KEY = 'starstars-version'

export const _getVersionDB = () => {
  return AsyncStorage.getItem(VERSION_KEY)
}

export const _setVersionDB = () => {
  AsyncStorage.getItem(VERSION_KEY, (error, result) => {
    if (error) {
      console.group('SET VERSION')
      console.log('Something went wrong: ', error)
      console.groupEnd()
    } else if (result === null) {
      AsyncStorage.setItem(VERSION_KEY, VERSION)
    } else if (result !== VERSION) {
      // TODO Migrate DB
      AsyncStorage.setItem(VERSION_KEY, VERSION)
    }
  })
}

export const _getUserDB = () => {
  return AsyncStorage.getItem(USER_KEY)
}

export const _getStarsDB = () => {
  return AsyncStorage.getItem(STAR_KEY)
}

export const _createUserDB = (user) => {
  return AsyncStorage.setItem(USER_KEY, user)
}

export const _createStarDB = (star) => {
  return AsyncStorage.mergeItem(STAR_KEY, JSON.stringify({
    ...star,
  }))
}

// export const _updateRateDB = (star) => {
//   return AsyncStorage.mergeItem(STAR_KEY, JSON.stringify({
//     ...star,
//   }))
// }
