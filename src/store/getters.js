export default {
  formData: (state) => {
    const data = {
      first_name: state.first_name,
      last_name: state.last_name,
      email: state.email,
      had_covid: state.had_covid,
      had_antibody_test: state.had_antibody_test,
      covid_sickness_date: state.covid_date,
      antibodies: {
        test_date: state.number_date,
        number: Number(state.number_of_anti)
      },
      had_vaccine: state.had_vaccine === 'true',
      vaccination_stage: state.vaccination_stage,
      non_formal_meetings: state.non_formal_meetings,
      i_am_waiting: state.waiting_for,
      number_of_days_from_office: Number(state.number_of_days_from_office),
      what_about_meetings_in_live: state.what_about_meetings_in_live,
      tell_us_your_opinion_about_us: state.tell_us_your_opinion_about_us
    }

    const nonEmptyData = Object.entries(data).reduce((acc, [key, value]) => {
      if (value !== '' && value !== null && value !== undefined) {
        if (key === 'antibodies' && value.test_date === '') {
          return acc
        }
        acc[key] = value
      }
      return acc
    }, {})

    return nonEmptyData
  }
}
