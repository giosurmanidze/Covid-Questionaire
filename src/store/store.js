import { createStore } from 'vuex'

const initialState = {
  first_name: localStorage.getItem('first_name') || '',
  last_name: localStorage.getItem('last_name') || '',
  email: localStorage.getItem('email') || '',
  had_covid: localStorage.getItem('had_covid') || '',
  covid_if_tested_radio: localStorage.getItem('covid_if_tested_radio') || '',
  covid_date: localStorage.getItem('covid_date') || '',
  number_of_anti: localStorage.getItem('number_of_anti') || '',
  number_date: localStorage.getItem('number_date') || '',
  isFormValid: JSON.parse(localStorage.getItem('isFormValid')) || {
    formPage2: false,
    formPage3: false,
    formPage4: false
  },
  errorMessage: ''
}

export default createStore({
  state: { ...initialState },
  mutations: {
    updateInputValue(state, payload) {
      state[payload.key] = payload.value
      localStorage.setItem(payload.key, payload.value)
    },
    updateFormValidity(state, payload) {
      state.isFormValid[payload.page] = payload.status
      localStorage.setItem('isFormValid', JSON.stringify(state.isFormValid))
      state.errorMessage = payload.status ? '' : 'Form validation failed'
    },
    setCovidCondition(state, had_covid) {
      state.had_covid = had_covid
      localStorage.setItem('had_covid', had_covid)
    },
    setIfTested(state, covid_if_tested_radio) {
      state.covid_if_tested_radio = covid_if_tested_radio
      localStorage.setItem('covid_if_tested_radio', covid_if_tested_radio)
    },
    setCovidDate(state, covid_date) {
      state.covid_date = covid_date
      localStorage.setItem('covid_date', covid_date)
    }
  },
  actions: {},
  modules: {}
})
