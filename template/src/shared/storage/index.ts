import {MMKV} from 'react-native-mmkv'
import {Storage} from 'redux-persist'

const MMKVStorage = new MMKV()

export const storage: Storage = {
  setItem: (key, value) => {
    MMKVStorage.set(key, value)
    return Promise.resolve(true)
  },
  getItem: key => {
    const value = MMKVStorage.getString(key)
    return Promise.resolve(value)
  },
  removeItem: key => {
    MMKVStorage.delete(key)
    return Promise.resolve()
  },
}
