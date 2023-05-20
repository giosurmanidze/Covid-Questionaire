export default {
  updateTextInput(state, payload) {
    state[payload.key] = payload.value
    localStorage.setItem(payload.key, payload.value)
  },
  updateRadioInput(state, payload) {
    state[payload.name] = payload.value
    localStorage.setItem(payload.name, payload.value)
  }
}
