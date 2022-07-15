import { atom } from 'recoil'

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue))
    })
  }

export const cartState = atom({
  key: 'cart', // unique ID (with respect to other atoms/selectors)
  default: [],
  effects: [localStorageEffect('cart')], // default value (aka initial value)
})
