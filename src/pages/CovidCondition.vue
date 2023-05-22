<template>
  <div class="w-full flex justify-center h-screen bg-[#EAEAEA]">
    <div class="w-[80%] pt-14">
      <Header :currentPage="2" />
      <Form v-slot="{ meta, values, handleSubmit }">
        <div class="flex justify-between">
          <div class="pt-16 flex flex-col gap-16 w-[40%]">
            <div class="flex flex-col items-start gap-5">
              <strong class="text-[22px]">გაქვს გადატანილი Covid-19?*</strong>
              <radio-input
                type="radio"
                name="had_covid"
                class="w-6 h-6"
                value="yes"
                :modelValue="store.state.had_covid"
                rules="required"
                label="კი"
              />
              <radio-input
                type="radio"
                class="w-6 h-6"
                name="had_covid"
                value="no"
                :modelValue="store.state.had_covid"
                :clearInput="removeInput"
                rules="required"
                label="არა"
              />
              <radio-input
                type="radio"
                class="w-6 h-6"
                name="had_covid"
                value="have_right_now "
                :modelValue="store.state.had_covid"
                rules="required"
                label="ახლა მაქვს"
              />
              <div v-if="values.had_covid === 'yes'" class="flex flex-col items-start gap-5 pt-4">
                <strong class="text-[22px]">ანტისხეულების ტესტი გაქვს გაკეთებული?*</strong>
                <radio-input
                  type="radio"
                  class="w-6 h-6"
                  name="had_antibody_test"
                  value="true"
                  :modelValue="store.state.had_antibody_test"
                  :clearInput="clearCovidTestAnswerNo"
                  rules="required"
                  label="კი"
                />
                <radio-input
                  type="radio"
                  class="w-6 h-6"
                  name="had_antibody_test"
                  value="false"
                  :modelValue="store.state.had_antibody_test"
                  :clearInput="clearCovidTestAnswerYes"
                  rules="required"
                  label="არა"
                />
                <div
                  v-if="values.had_covid === 'yes' && values.had_antibody_test === 'true'"
                  class="flex flex-col gap-5 w-[100%] pt-4"
                >
                  <strong class="text-[22px]"
                    >თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
                    რაოდენობა</strong
                  >
                  <text-field
                    type="text"
                    rules="regex_date"
                    name="number_date"
                    :value="store.state.number_date"
                    placeholder="რიცხვი (დდ/მმ/წწ)"
                    :updateInput="updateInput"
                  />
                  <text-field
                    type="text"
                    :value="store.state.number_of_anti"
                    name="number_of_anti"
                    placeholder="ანტისხეულების რაოდენობა"
                    :updateInput="updateInput"
                  />
                </div>
                <div
                  v-if="values.had_covid === 'yes' && values.had_antibody_test === 'false'"
                  class="flex flex-col gap-3 w-[100%] pt-4"
                >
                  <text-field
                    label="მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19"
                    type="text"
                    rules="regex_date|required"
                    name="covid_date"
                    :value="store.state.covid_date"
                    placeholder="დდ/მმ/წწ"
                    :updateInput="updateInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="w-[60%]">
            <img src="../assets/main_logo_2.svg" class="rectangle absolute" />
            <img src="../assets/vaccinate2.svg" class="relative" />
          </div>
        </div>
        <div class="flex justify-center gap-16">
          <RouterLink to="private-info">
            <img src="../assets/back-arrow.svg" />
          </RouterLink>
          <submit-button :isValid="meta.valid" destination="/vaccination" @click="handleSubmit" />
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import { RouterLink } from 'vue-router'
import { useStore } from 'vuex'
import { Form } from 'vee-validate'
import SubmitButton from '../components/SubmitButton.vue'
import TextField from '../components/TextField.vue'
import RadioInput from '../components/RadioInput.vue'

const store = useStore()

const updateInput = (key, value) => {
  store.commit('updateTextInput', { key, value })
}

const removeInput = () => {
  store.state.number_date = ''
  store.state.number_of_anti = ''
  store.state.covid_date = ''
  store.state.had_antibody_test = ''
  localStorage.removeItem('number_date')
  localStorage.removeItem('number_of_anti')
  localStorage.removeItem('covid_date')
  localStorage.removeItem('had_antibody_test')
}
const clearCovidTestAnswerNo = () => {
  store.state.covid_date = ''
  localStorage.removeItem('covid_date')
}
const clearCovidTestAnswerYes = () => {
  store.state.number_date = ''
  localStorage.removeItem('number_date')
  store.state.number_of_anti = ''
  localStorage.removeItem('number_of_anti')
}

const validateNumberDate = () => {
  !/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/\d{4}$/.test(value)
}

</script>

<style scoped>
.rectangle {
  animation: rect 0.36s ease-in forwards;
}
@keyframes rect {
  0% {
    width: 32rem;
    height: 7.5rem;
    top: 20%;
    left: 50%;
    background-color: hsla(57, 56%, 64%, 0.702);
  }
  100% {
    width: 14rem;
    height: 14rem;
    border-radius: 100%;
    top: 33.5%;
    left: 47%;
    background-color: rgba(255, 0, 0, 0.702);
  }
}
</style>
