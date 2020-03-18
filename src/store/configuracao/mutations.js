import {Dark} from 'quasar'

export function setModeDark(state, value) {
  state.settings.modeDark = value
  Dark.set(state.settings.modeDark)
}

export function setSettings(state, settings) {
  Object.assign(state.settings, settings)
}
