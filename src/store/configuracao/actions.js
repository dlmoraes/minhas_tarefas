import {LocalStorage} from 'quasar'

export function setModeDark({commit, dispatch}, value) {
  commit('setModeDark', value)
  dispatch('saveSettings')
}

export function saveSettings({state}) {
  console.log('saveSettings')
  LocalStorage.set('settings', state.settings)
}

export function getSettings({commit}) {
  let settings = LocalStorage.getItem('settings')
  if (settings) {
    commit('setSettings', settings)
  }
}
