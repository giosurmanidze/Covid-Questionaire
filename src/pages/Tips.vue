<template>
  <div class="w-full flex justify-center h-screen bg-[#EAEAEA]">
    <div class="w-[80%] pt-14">
      <Header :currentPage="4" />
      <Form @submit="onSubmit">
        <div class="flex justify-between">
          <div class="pt-16 flex flex-col gap-16 w-[40%]">
            <div class="flex flex-col items-start gap-5 h-[70vh]">
              <div class="flex flex-col gap-10 overflow-auto pl-5 pr-5 pt-5 pb-8">
                <div>
                  <p class="text-[22px] text-[#232323] font-semibold">
                    რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო, რომელსაც ჩვენი
                    თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების განმავლობაში მიზნებისთვის
                    ერთად ბრძოლის მიზეზი, ბევრისთვის კი — ჩვენთან გადმოსვლის.
                  </p>
                  <p class="text-[22px] text-[#232323] font-semibold pt-3">
                    პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და ყოველდღიური
                    კომუნიკაციაც გაიშვიათდა.
                  </p>
                </div>
                <div class="flex flex-col gap-4">
                  <p class="text-[22px] text-[#232323] font-semibold">
                    რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა
                    სურვილისამებრ ჩაერთვება?*
                  </p>
                  <div>
                    <div class="flex items-center gap-3">
                      <Field
                        type="radio"
                        class="w-6 h-6"
                        name="non_formal_meetings"
                        rules="required"
                        value="twice_a_week"
                        v-model="store.state.non_formal_meetings"
                        @input="updateNonFormalMeetings('twice_a_week')"
                      />
                      <p class="text-[20px] pb-1 text-[#232323]">კვირაში ორჯერ</p>
                    </div>
                    <div class="flex items-center gap-3">
                      <Field
                        type="radio"
                        class="w-6 h-6"
                        name="non_formal_meetings"
                        rules="required"
                        value="once_a_week"
                        v-model="store.state.non_formal_meetings"
                        @input="updateNonFormalMeetings('once_a_week')"
                      />
                      <p class="text-[20px] pb-1 text-[#232323]">კვირაში ერთხელ</p>
                    </div>
                    <div class="flex items-center gap-3">
                      <Field
                        type="radio"
                        class="w-6 h-6"
                        name="non_formal_meetings"
                        rules="required"
                        value="Fortnightly"
                        v-model="store.state.non_formal_meetings"
                        @input="updateNonFormalMeetings('Fortnightly')"
                      />
                      <p class="text-[20px] pb-1 text-[#232323]">ორ კვირაში ერთხელ</p>
                    </div>
                    <div class="flex items-center gap-3">
                      <Field
                        type="radio"
                        class="w-6 h-6"
                        name="non_formal_meetings"
                        rules="required"
                        value="one_a_month"
                        v-model="store.state.non_formal_meetings"
                        @input="updateNonFormalMeetings('one_a_month')"
                      />
                      <p class="text-[20px] pb-1 text-[#232323]">თვეში ერთხელ</p>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-4">
                  <p class="text-[22px] text-[#232323] font-semibold">
                    კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
                  </p>
                  <div>
                    <div class="flex items-center gap-3">
                      <Field
                        type="radio"
                        class="w-6 h-6"
                        rules="required"
                        name="number_of_days_from_office"
                        :value="0"
                        v-model="store.state.number_of_days_from_office"
                        @input="updateNumberOfDaysFromOffice(0)"
                      />
                      <p class="text-[20px] pb-1 text-[#232323]">0</p>
                    </div>
                    <div class="flex items-center gap-3">
                      <Field
                        type="radio"
                        class="w-6 h-6"
                        rules="required"
                        name="number_of_days_from_office"
                        :value="1"
                        v-model="store.state.number_of_days_from_office"
                        @input="updateNumberOfDaysFromOffice(1)"
                      />
                      <p class="text-[20px] pb-1 text-[#232323]">1</p>
                    </div>
                    <div class="flex items-center gap-3">
                      <Field
                        type="radio"
                        class="w-6 h-6"
                        rules="required"
                        name="number_of_days_from_office"
                        :value="2"
                        v-model="store.state.number_of_days_from_office"
                        @input="updateNumberOfDaysFromOffice(2)"
                      />
                      <p class="text-[20px] pb-1 text-[#232323]">2</p>
                    </div>
                    <div class="flex items-center gap-3">
                      <Field
                        type="radio"
                        class="w-6 h-6"
                        rules="required"
                        name="number_of_days_from_office"
                        :value="3"
                        v-model="store.state.number_of_days_from_office"
                        @input="updateNumberOfDaysFromOffice(3)"
                      />
                      <p class="text-[20px] pb-1 text-[#232323]">3</p>
                    </div>
                    <div class="flex items-center gap-3">
                      <Field
                        type="radio"
                        class="w-6 h-6"
                        rules="required"
                        name="number_of_days_from_office"
                        :value="4"
                        v-model="store.state.number_of_days_from_office"
                        @input="updateNumberOfDaysFromOffice(4)"
                      />
                      <p class="text-[20px] pb-1 text-[#232323]">4</p>
                    </div>
                  </div>
                </div>
                <textarea-field
                  label="რას ფიქრობ ფიზიკურ შეკრებებზე?"
                  name="what_about_meetings_in_live"
                  :value="store.state.what_about_meetings_in_live"
                  :updateInput="updateInput"
                />
                <textarea-field
                  label="რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
                  name="tell_us_your_opinion_about_us"
                  :value="store.state.tell_us_your_opinion_about_us"
                  :updateInput="updateInput"
                />
              </div>
            </div>
          </div>
          <div class="w-[50%] pt-10">
            <img src="../assets/Group 6.svg" alt="" />
          </div>
        </div>
        <div class="flex justify-center pr-[520px] pt-10">
          <button
            type="submit"
            class="text-[18px] bg-[#208298] w-44 h-12 rounded-[42px] text-[#FFFFFF]"
          >
            დასრულება
          </button>
        </div>
      </Form>
      <div class="flex justify-center pt-5">
        <RouterLink to="vaccination">
          <img src="../assets/Vector 9.svg" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import { RouterLink } from 'vue-router'
import { useStore } from 'vuex'
import { Field, Form } from 'vee-validate'
import TextareaField from '../components/TextareaField.vue'

const store = useStore()

const updateNonFormalMeetings = (value) => {
  store.commit('setNonFormalMeetings', value)
}
const updateNumberOfDaysFromOffice = (value) => {
  store.commit('setNumberOfDaysFromOffice', value)
}

const updateInput = (key, value) => {
  store.commit('updateInputValue', { key, value })
}
function onSubmit(values) {
  console.log(values)
}
</script>
