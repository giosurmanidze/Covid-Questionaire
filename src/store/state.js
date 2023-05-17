const state = {
  first_name: localStorage.getItem('first_name') || '',
  last_name: localStorage.getItem('last_name') || '',
  email: localStorage.getItem('email') || '',
  had_covid: localStorage.getItem('had_covid') || '',
  covid_if_tested_radio: localStorage.getItem('covid_if_tested_radio') || '',
  covid_date: localStorage.getItem('covid_date') || '',
  number_of_anti: localStorage.getItem('number_of_anti') || '',
  number_date: localStorage.getItem('number_date') || '',
  had_vaccine:
    localStorage.getItem('had_vaccine') !== null
      ? JSON.parse(localStorage.getItem('had_vaccine'))
      : null,
  vaccination_stage: localStorage.getItem('vaccination_stage') || '',
  waiting_for: localStorage.getItem('waiting_for') || '',
  non_formal_meetings: localStorage.getItem('non_formal_meetings') || '',
  number_of_days_from_office:
    localStorage.getItem('number_of_days_from_office') !== null
      ? JSON.parse(localStorage.getItem('number_of_days_from_office'))
      : null,
  what_about_meetings_in_live: localStorage.getItem('what_about_meetings_in_live') || '',
  tell_us_your_opinion_about_us: localStorage.getItem('tell_us_your_opinion_about_us') || '',
  isFormValid: JSON.parse(localStorage.getItem('isFormValid')) || {
    formPage2: false,
    formPage3: false,
    formPage4: false
  },
  errorMessage: ''
}

export default state
