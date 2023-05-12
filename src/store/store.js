import { createStore } from 'vuex'

export default createStore({
  state: {
    first_name: localStorage.getItem('first_name') || '',
    last_name: localStorage.getItem('last_name') || '',
    email: localStorage.getItem('email') || '',
    isFormValid: JSON.parse(localStorage.getItem('isFormValid')) || false,
    errorMessage: ''
  },
  mutations: {
    updateInputValue(state, payload) {
      state[payload.key] = payload.value
      localStorage.setItem(payload.key, payload.value)
    },
    updateFormValidity(state, isValid) {
      state.isFormValid = isValid
      localStorage.setItem('isFormValid', JSON.stringify(isValid))

      state.errorMessage = isValid ? '' : 'Form validation failed'
    }
  },
  actions: {},
  modules: {}
})
