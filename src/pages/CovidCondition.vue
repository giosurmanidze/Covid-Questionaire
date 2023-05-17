<template>
  <div class="w-full flex justify-center h-screen bg-[#EAEAEA]">
    <div class="w-[80%] pt-14">
      <Header :currentPage="2" />
      <Form @submit="onSubmit" v-slot="{ meta, handleSubmit }">
        <div class="flex justify-between">
          <div class="pt-16 flex flex-col gap-16 w-[40%]">
            <div class="flex flex-col items-start gap-5">
              <strong class="text-[22px]">გაქვს გადატანილი Covid-19?*</strong>
              <div class="flex items-center gap-3">
                <Field
                  type="radio"
                  name="had_covid"
                  value="yes"
                  class="w-6 h-6"
                  rules="required"
                  @input="updateCovidConditon('yes')"
                  v-model="store.state.had_covid"
                />
                <strong class="text-[20px] pb-1">კი</strong>
              </div>
              <div class="flex items-center gap-3">
                <Field
                  type="radio"
                  name="had_covid"
                  value="no"
                  class="w-6 h-6"
                  rules="required"
                  v-model="store.state.had_covid"
                  @input="updateCovidConditon('no')"
                  @click="clearFirstInput"
                />
                <strong class="text-[20px] pb-1">არა</strong>
              </div>
              <div class="flex items-center gap-3">
                <Field
                  type="radio"
                  name="had_covid"
                  value="current"
                  rules="required"
                  class="w-6 h-6"
                  v-model="store.state.had_covid"
                  @input="updateCovidConditon('current')"
                  @click="clearFirstInput"
                />
                <strong class="text-[20px] pb-1">ახლა მაქვს</strong>
              </div>
              <div
                v-if="store.state.had_covid === 'yes'"
                class="flex flex-col items-start gap-5 pt-4"
              >
                <strong class="text-[22px]">ანტისხეულების ტესტი გაქვს გაკეთებული?*</strong>
                <div class="flex items-center gap-3">
                  <Field
                    @input="updateIfTested('yes')"
                    type="radio"
                    class="w-6 h-6"
                    name="covid_if_tested_radio"
                    rules="required"
                    value="yes"
                    v-model="store.state.covid_if_tested_radio"
                    @click="clearCovidDateInput"
                  />
                  <strong class="text-[20px] pb-1">კი</strong>
                </div>
                <div class="flex items-center gap-3">
                  <Field
                    @input="updateIfTested('no')"
                    type="radio"
                    class="w-6 h-6"
                    rules="required"
                    name="covid_if_tested_radio"
                    value="no"
                    v-model="store.state.covid_if_tested_radio"
                    @click="clearCovidTestAnswerYes"
                  />
                  <strong class="text-[20px] pb-1">არა</strong>
                </div>
                <div
                  v-if="store.state.covid_if_tested_radio === 'yes'"
                  class="flex flex-col gap-3 w-[100%] pt-4"
                >
                  <strong class="text-[22px]"
                    >თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
                    რაოდენობა</strong
                  >
                  <Field
                    type="text"
                    v-model="store.state.number_date"
                    @input="updateInput('number_date')"
                    name="number_date"
                    placeholder="რიცხვი"
                    class="w-full h-12 border-[0.8px] border-[#232323] pl-5 outline-none"
                  />
                  <Field
                    type="text"
                    v-model="store.state.number_of_anti"
                    @input="updateInput('number_of_anti')"
                    name="number_of_anti"
                    placeholder="ანტისხეულების რაოდენობა"
                    class="w-full h-12 border-[0.8px] border-[#232323] pl-5 outline-none mt-3"
                  />
                </div>
                <div
                  v-if="store.state.covid_if_tested_radio === 'no'"
                  class="flex flex-col gap-3 w-[100%] pt-4"
                >
                  <text-field
                    label="მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*"
                    type="text"
                    rules="regex_date"
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
            <img src="../assets/Group 4.svg" alt="" />
          </div>
        </div>
        <div class="flex justify-center gap-16">
          <RouterLink to="private-info">
            <img src="../assets/Vector 9.svg" />
          </RouterLink>
          <submit-button :meta="meta.valid" destination="/vaccination" @click="handleSubmit" />
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import { RouterLink } from 'vue-router'
import { useStore } from 'vuex'
import { Field, Form } from 'vee-validate'
import SubmitButton from '../components/SubmitButton.vue'
import TextField from '../components/TextField.vue'

const store = useStore()

const updateInput = (key, value) => {
  store.commit('updateInputValue', { key, value })
}
const updateCovidConditon = (value) => {
  store.commit('setCovidCondition', value)
}
const updateIfTested = (value) => {
  store.commit('setIfTested', value)
}

const clearFirstInput = () => {
  store.state.covid_if_tested_radio = ''
  localStorage.removeItem('covid_if_tested_radio')
}
const clearCovidDateInput = () => {
  store.state.covid_date = ''
  localStorage.removeItem('covid_date')
}
const clearCovidTestAnswerYes = () => {
  store.state.number_date = ''
  localStorage.removeItem('number_date')
  store.state.number_of_anti = ''
  localStorage.removeItem('number_of_anti')
}

function onSubmit(values) {
  console.log(values)
}
</script>
