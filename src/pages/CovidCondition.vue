<template>
  <div class="w-full flex justify-center h-screen bg-[#EAEAEA]">
    <div class="w-[80%] pt-14">
      <Header :currentPage="2" />
      <form @submit.prevent="handleSubmit">
        <div class="flex justify-between">
          <div class="pt-16 flex flex-col gap-16 w-[40%]">
            <div class="flex flex-col items-start gap-5">
              <strong class="text-[22px]">გაქვს გადატანილი Covid-19?*</strong>
              <div class="flex items-center gap-3">
                <input
                  @input="updateCovidConditon('yes')"
                  type="radio"
                  class="w-6 h-6"
                  :checked="had_covid === 'yes'"
                />
                <strong class="text-[20px] pb-1">კი</strong>
              </div>
              <div class="flex items-center gap-3">
                <input
                  @input="updateCovidConditon('no')"
                  type="radio"
                  class="w-6 h-6"
                  :checked="had_covid === 'no'"
                  @click="clearFirstInput"
                />
                <strong class="text-[20px] pb-1">არა</strong>
              </div>
              <div class="flex items-center gap-3">
                <input
                  @input="updateCovidConditon('current')"
                  type="radio"
                  class="w-6 h-6"
                  :checked="had_covid === 'current'"
                  @click="clearFirstInput"
                />
                <strong class="text-[20px] pb-1">ახლა მაქვს</strong>
              </div>

              <div v-if="had_covid === 'yes'" class="flex flex-col items-start gap-5 pt-4">
                <strong class="text-[22px]">ანტისხეულების ტესტი გაქვს გაკეთებული?*</strong>
                <div class="flex items-center gap-3">
                  <input
                    @input="updateIfTested('yes')"
                    type="radio"
                    class="w-6 h-6"
                    :checked="covid_if_tested_radio === 'yes'"
                    @click="clearCovidDateInput"
                  />
                  <strong class="text-[20px] pb-1">კი</strong>
                </div>
                <div class="flex items-center gap-3">
                  <input
                    @input="updateIfTested('no')"
                    type="radio"
                    class="w-6 h-6"
                    :checked="covid_if_tested_radio === 'no'"
                    @click="clearCovidTestAnswerYes"
                  />
                  <strong class="text-[20px] pb-1">არა</strong>
                </div>

                <div
                  v-if="covid_if_tested_radio === 'yes'"
                  class="flex flex-col gap-3 w-[100%] pt-4"
                >
                  <strong class="text-[22px]"
                    >თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
                    რაოდენობა</strong
                  >
                  <input
                    type="text"
                    v-model="store.state.number_date"
                    @input="updateInput('number_date')"
                    placeholder="რიცხვი"
                    class="w-full h-12 border-[0.8px] border-[#232323] pl-5 outline-none"
                  />
                  <input
                    type="text"
                    v-model="store.state.number_of_anti"
                    @input="updateInput('number_of_anti')"
                    placeholder="ანტისხეულების რაოდენობა"
                    class="w-full h-12 border-[0.8px] border-[#232323] pl-5 outline-none mt-3"
                  />
                </div>

                <div
                  v-if="covid_if_tested_radio === 'no'"
                  class="flex flex-col gap-3 w-[100%] pt-4"
                >
                  <strong class="text-[22px]"
                    >მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*</strong
                  >
                  <input
                    type="text"
                    v-model="covid_date"
                    @input="updateCovidDate"
                    class="w-full h-12 border-[0.8px] border-[#232323] pl-5 outline-none pr-5"
                    placeholder="დდ/მმ/წწ"
                  />
                  <p v-if="!covid_date"></p>
                  <p class="error-message text-[#F15524]">{{ covid_dateError }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-[60%]">
            <img src="../assets/Group 4.svg" alt="" />
          </div>
        </div>
        <div class="flex justify-center gap-16">
          <RouterLink to="private-info">
            <img src="../assets/Vector 9.svg" />
          </RouterLink>
          <button type="submit">
            <img src="../assets/Vector 2.svg" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import { useField, useForm } from 'vee-validate'
import { useRouter, RouterLink } from 'vue-router'
import { useStore } from 'vuex'
import * as yup from 'yup'

const router = useRouter()
const store = useStore()

const validationSchema = yup.object({
  had_covid: yup.string().required(),
  covid_if_tested_radio: yup
    .string()
    .test(
      'required-if-had-covid',
      'This field is required when had_covid is "yes"',
      function (value) {
        const { had_covid } = this.parent

        if (had_covid === 'yes' && !value) {
          return false
        }

        return true
      }
    ),
  covid_date: yup
    .string()
    .test('validate-covid-date', 'შეიყვანეთ სწორი ფორმატით', function (value) {
      const { covid_if_tested_radio } = this.parent

      if (covid_if_tested_radio === 'no') {
        return /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/\d{4}$/.test(value) || this.createError()
      }

      return true
    })
    .nullable()
})

const { validate, values } = useForm({
  initialValues: store.state,
  validationSchema
})

const { value: had_covid } = useField('had_covid', validationSchema)
const { value: covid_if_tested_radio } = useField('covid_if_tested_radio', validationSchema)
const { value: covid_date, errorMessage: covid_dateError } = useField(
  'covid_date',
  validationSchema
)

const updateCovidConditon = (value) => {
  values.had_covid = value
  store.commit('setCovidCondition', value)
}
const updateIfTested = (value) => {
  values.covid_if_tested_radio = value
  store.commit('setIfTested', value)
}
const clearFirstInput = () => {
  values.covid_if_tested_radio = ''
  localStorage.removeItem('covid_if_tested_radio')
}
const clearCovidDateInput = () => {
  values.covid_date = ''
  localStorage.removeItem('covid_date')
}
const clearCovidTestAnswerYes = () => {
  store.state.number_date = ''
  localStorage.removeItem('number_date')
  store.state.number_of_anti = ''
  localStorage.removeItem('number_of_anti')
}

const updateCovidDate = () => {
  store.commit('setCovidDate', values['covid_date'])
}
const updateInput = (key) => {
  store.commit('updateInputValue', { key, value: store.state[key] })
}

const handleSubmit = async () => {
  validate().then((isValid) => {
    console.log(isValid)
    store.commit('updateFormValidity', { status: isValid.valid, page: 'formPage3' })
    if (isValid.valid) {
      router.push('vaccination')
    }
  })
}
</script>
