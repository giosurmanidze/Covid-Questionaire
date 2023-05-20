export default {
  updateInputValue(state, payload) {
    state[payload.key] = payload.value
    localStorage.setItem(payload.key, payload.value)
  },
  setCovidCondition(state, payload) {
    state[payload.name] = payload.value
    localStorage.setItem(payload.name, payload.value)
  },
  setHadVaccine(state, had_vaccine) {
    state.had_vaccine = had_vaccine
    localStorage.setItem('had_vaccine', JSON.stringify(had_vaccine))
  },
  setVaccinationStage(state, vaccination_stage) {
    state.vaccination_stage = vaccination_stage
    localStorage.setItem('vaccination_stage', vaccination_stage)
  },
  setWaitingFor(state, waiting_for) {
    state.waiting_for = waiting_for
    localStorage.setItem('waiting_for', waiting_for)
  },
  setNonFormalMeetings(state, non_formal_meetings) {
    state.non_formal_meetings = non_formal_meetings
    localStorage.setItem('non_formal_meetings', non_formal_meetings)
  },
  setNumberOfDaysFromOffice(state, number_of_days_from_office) {
    state.number_of_days_from_office = number_of_days_from_office
    localStorage.setItem('number_of_days_from_office', JSON.stringify(number_of_days_from_office))
  },
  setWhatAboutMeetingsInLive(state, what_about_meetings_in_live) {
    state.what_about_meetings_in_live = what_about_meetings_in_live
    localStorage.setItem('what_about_meetings_in_live', what_about_meetings_in_live)
  },
  setTellUsYourOpinionAboutUs(state, tell_us_your_opinion_about_us) {
    state.tell_us_your_opinion_about_us = tell_us_your_opinion_about_us
    localStorage.setItem('tell_us_your_opinion_about_us', tell_us_your_opinion_about_us)
  }
}
