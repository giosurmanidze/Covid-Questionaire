<template>
  <div class="w-full flex justify-center h-screen bg-[#EAEAEA]">
    <div class="w-[80%] pt-14">
      <Header :currentPage="3" />
      <Form @submit="onSubmit" v-slot="{ meta, handleSubmit }">
        <div class="flex justify-between">
          <div class="pt-16 flex flex-col gap-16 w-[40%]">
            <div class="flex flex-col items-start gap-5">
              <strong class="text-[22px]">უკვე აცრილი ხარ?*</strong>
              <div class="flex items-center gap-3">
                <Field
                  type="radio"
                  name="had_vaccine"
                  :value="true"
                  class="w-6 h-6"
                  rules="required"
                  @input="updateIsVaccinated(true)"
                  v-model="store.state.had_vaccine"
                  @click="clearSecondInput()"
                />
                <p class="text-[20px] pb-1">კი</p>
              </div>
              <div class="flex items-center gap-3">
                <Field
                  type="radio"
                  name="had_vaccine"
                  class="w-6 h-6"
                  :value="false"
                  v-model="store.state.had_vaccine"
                  @input="updateIsVaccinated(false)"
                  @click="clearFirstInput()"
                />
                <p class="text-[20px] pb-1">არა</p>
              </div>

              <div v-if="store.state.had_vaccine" class="flex flex-col items-start gap-5 pt-4">
                <strong class="text-[22px]">აირჩიე რა ეტაპზე ხარ*</strong>
                <div class="flex items-center gap-3">
                  <Field
                    type="radio"
                    name="vaccination_stage"
                    value="first_dosage_and_registered_on_the_second"
                    class="w-6 h-6"
                    v-model="store.state.vaccination_stage"
                    @input="updateVaccinationStage('first_dosage_and_registered_on_the_second')"
                  />
                  <p class="text-[20px] pb-1">პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</p>
                </div>
                <div class="flex items-center gap-3">
                  <Field
                    type="radio"
                    name="vaccination_stage"
                    value="fully_vaccinated"
                    v-model="store.state.vaccination_stage"
                    class="w-6 h-6"
                    @input="updateVaccinationStage('fully_vaccinated')"
                  />
                  <p class="text-[20px] pb-1">სრულად აცრილი ვარ</p>
                </div>
                <div class="flex items-center gap-3">
                  <Field
                    type="radio"
                    name="vaccination_stage"
                    value="first_dosage_and_not_registered_on_the_second"
                    class="w-6 h-6"
                    v-model="store.state.vaccination_stage"
                    @input="updateVaccinationStage('first_dosage_and_not_registered_on_the_second')"
                  />
                  <p class="text-[20px] pb-1">პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</p>
                </div>

                <div
                  class="text-[20px] pl-10"
                  v-if="
                    store.state.vaccination_stage ===
                    'first_dosage_and_not_registered_on_the_second'
                  "
                >
                  <p>რომ არ გადადო,</p>
                  <p>ბარემ ახლავე დარეგისტრირდი</p>
                  <a class="text-[#1289AE]" href="https://booking.moh.gov.ge/"
                    >https://booking.moh.gov.ge/</a
                  >
                </div>
              </div>

              <div
                v-if="store.state.had_vaccine === false"
                class="flex flex-col items-start gap-5 pt-4"
              >
                <strong class="text-[22px]">რას ელოდები?*</strong>
                <div class="flex items-center gap-3">
                  <Field
                    type="radio"
                    name="waiting_for"
                    value="registered_and_waiting_for_a_number"
                    rules="required"
                    class="w-6 h-6"
                    v-model="store.state.waiting_for"
                    @input="updateWaitingFor('registered_and_waiting_for_a_number')"
                  />
                  <p class="text-[20px] pb-1">დარეგისტრირებული ვარ და ველოდები რიცხვს</p>
                </div>
                <div class="flex items-center gap-3">
                  <Field
                    type="radio"
                    class="w-6 h-6"
                    rules="required"
                    name="waiting_for"
                    value="do_not_plan"
                    v-model="store.state.waiting_for"
                    @input="updateWaitingFor('do_not_plan')"
                  />
                  <p class="text-[20px] pb-1">არ ვგეგმავ</p>
                </div>
                <div class="flex items-center gap-3">
                  <Field
                    type="radio"
                    name="waiting_for"
                    value="transferred_and_plan_to_get_vaccinated"
                    rules="required"
                    class="w-6 h-6"
                    v-model="store.state.waiting_for"
                    @input="updateWaitingFor('transferred_and_plan_to_get_vaccinated')"
                  />
                  <p class="text-[20px] pb-1">გადატანილი მაქვს და ვგეგმავ აცრას</p>
                </div>
              </div>
              <div
                class="text-[20px] pl-10 flex flex-col gap-3"
                v-if="store.state.waiting_for === 'transferred_and_plan_to_get_vaccinated'"
              >
                <div>
                  <p>ახალი პროტოკოლით კოვიდის გადატანიდან 1</p>
                  <p>თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.</p>
                </div>
                <div>
                  <p>👉 რეგისტრაციის ბმული</p>
                  <a class="text-[#1289AE]" href="https://booking.moh.gov.ge/"
                    >https://booking.moh.gov.ge/</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="w-[50%]">
            <img src="../assets/Group 3.svg" alt="" />
          </div>
        </div>
        <div class="flex justify-center gap-16">
          <RouterLink to="/covid-condition">
            <img src="../assets/Vector 9.svg" />
          </RouterLink>
          <submit-button :meta="meta.valid" destination="/tips" @click="handleSubmit" />
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import { RouterLink } from 'vue-router'
import { Field, Form } from 'vee-validate'
import { useStore } from 'vuex'
import SubmitButton from '../components/SubmitButton.vue'

const store = useStore()

const updateIsVaccinated = (value) => {
  store.commit('setHadVaccine', value)
}
const updateVaccinationStage = (value) => {
  store.commit('setVaccinationStage', value)
}
const updateWaitingFor = (value) => {
  store.commit('setWaitingFor', value)
}
const clearFirstInput = () => {
  store.state.vaccination_stage = ''
  localStorage.removeItem('vaccination_stage')
}
const clearSecondInput = () => {
  store.state.waiting_for = ''
  localStorage.removeItem('waiting_for')
}

function onSubmit(values) {
  console.log(values)
}
</script>
