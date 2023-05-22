<template>
  <div class="w-full flex justify-center h-screen bg-[#EAEAEA]">
    <div class="w-[80%] pt-14">
      <Header :currentPage="3" />
      <Form v-slot="{ meta, values, handleSubmit }">
        <div class="flex justify-between">
          <div class="pt-16 flex flex-col gap-16 w-[40%]">
            <div class="flex flex-col items-start gap-5">
              <strong class="text-[22px]">უკვე აცრილი ხარ?*</strong>
              <radio-input
                type="radio"
                name="had_vaccine"
                class="w-6 h-6"
                value="true"
                :modelValue="store.state.had_vaccine"
                :clearInput="clearSecondInput"
                rules="required"
                label="კი"
              />
              <radio-input
                type="radio"
                name="had_vaccine"
                class="w-6 h-6"
                value="false"
                :modelValue="store.state.had_vaccine"
                :clearInput="clearFirstInput"
                rules="required"
                label="არა"
              />
              <div
                v-if="values.had_vaccine === 'true'"
                class="flex flex-col items-start gap-5 pt-4"
              >
                <strong class="text-[22px]">აირჩიე რა ეტაპზე ხარ*</strong>
                <radio-input
                  type="radio"
                  name="vaccination_stage"
                  class="w-6 h-6"
                  value="first_dosage_and_registered_on_the_second"
                  :modelValue="store.state.vaccination_stage"
                  rules="required"
                  label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
                />
                <radio-input
                  type="radio"
                  name="vaccination_stage"
                  class="w-6 h-6"
                  value="fully_vaccinated"
                  :modelValue="store.state.vaccination_stage"
                  rules="required"
                  label="სრულად აცრილი ვარ"
                />
                <radio-input
                  type="radio"
                  name="vaccination_stage"
                  class="w-6 h-6"
                  value="first_dosage_and_not_registered_yet"
                  :modelValue="store.state.vaccination_stage"
                  rules="required"
                  label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
                />

                <div
                  class="text-[20px] pl-10"
                  v-if="
                    values.vaccination_stage === 'first_dosage_and_not_registered_on_the_second'
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
                v-if="values.had_vaccine === 'false'"
                class="flex flex-col items-start gap-5 pt-4"
              >
                <strong class="text-[22px]">რას ელოდები?*</strong>
                <radio-input
                  type="radio"
                  name="waiting_for"
                  class="w-6 h-6"
                  value="registered_and_waiting"
                  :modelValue="store.state.waiting_for"
                  rules="required"
                  label="დარეგისტრირებული ვარ და ველოდები რიცხვს"
                />
                <radio-input
                  type="radio"
                  name="waiting_for"
                  class="w-6 h-6"
                  value="not_planning"
                  :modelValue="store.state.waiting_for"
                  rules="required"
                  label="არ ვგეგმავ"
                />
                <radio-input
                  type="radio"
                  name="waiting_for"
                  class="w-6 h-6"
                  value="had_covid_and_planning_to_be_vaccinated "
                  :modelValue="store.state.waiting_for"
                  rules="required"
                  label="გადატანილი მაქვს და ვგეგმავ აცრას"
                />
              </div>
              <div
                class="text-[20px] pl-10 flex flex-col gap-3"
                v-if="values.waiting_for === 'transferred_and_plan_to_get_vaccinated'"
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

          <div class="w-[50%] pt-16">
            <img src="../assets/main_logo_3.svg" class="rectangle absolute" />
            <img src="../assets/doctor.svg" class="relative" />
          </div>
        </div>
        <div class="flex justify-center gap-16">
          <RouterLink to="/covid-condition">
            <img src="../assets/back-arrow.svg" />
          </RouterLink>
          <submit-button :isValid="meta.valid" destination="/tips" @click="handleSubmit" />
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import { RouterLink } from 'vue-router'
import { Form } from 'vee-validate'
import { useStore } from 'vuex'
import SubmitButton from '../components/SubmitButton.vue'
import RadioInput from '../components/RadioInput.vue'

const store = useStore()

const clearFirstInput = () => {
  store.state.vaccination_stage = ''
  localStorage.removeItem('vaccination_stage')
}
const clearSecondInput = () => {
  store.state.waiting_for = ''
  localStorage.removeItem('waiting_for')
}
</script>

<style scoped>
.rectangle {
  animation: rect 0.36s ease-in forwards;
  transform: scale(0.8);
}
@keyframes rect {
  0% {
    width: 23rem;
    height: 23rem;
    border-radius: 100%;
    top: 27.5%;
    left: 44%;
    background-color: rgba(237, 119, 119, 0.702);
  }
  100% {
    width: 28.8rem;
    height: 32.1rem;
    clip-path: polygon(
      46% 17.3%,
      55.7% 34.9%,
      95.5% 29.2%,
      60.3% 46.2%,
      94.4% 68.6%,
      50.2% 52.9%,
      6.6% 100%,
      39% 47.1%,
      6.6% 39.7%,
      41.8% 34.9%
    );
    top: 0%;
    left: 47.2%;
    background-color: rgba(201, 203, 106, 0.72);
  }
}
</style>
