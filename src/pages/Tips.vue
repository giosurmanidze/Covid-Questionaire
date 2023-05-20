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
                    <radio-input
                      type="radio"
                      name="non_formal_meetings"
                      value="twice_a_week"
                      :modelValue="store.state.non_formal_meetings"
                      rules="required"
                      label="კვირაში ორჯერ"
                    />
                    <radio-input
                      type="radio"
                      name="non_formal_meetings"
                      value="once_a_week"
                      :modelValue="store.state.non_formal_meetings"
                      rules="required"
                      label="კვირაში ერთხელ"
                    />
                    <radio-input
                      type="radio"
                      name="non_formal_meetings"
                      value="Fortnightly"
                      :modelValue="store.state.non_formal_meetings"
                      rules="required"
                      label="ორ კვირაში ერთხელ"
                    />
                    <radio-input
                      type="radio"
                      name="non_formal_meetings"
                      value="one_a_month"
                      :modelValue="store.state.non_formal_meetings"
                      rules="required"
                      label="თვეში ერთხელ"
                    />
                  </div>
                </div>
                <div class="flex flex-col gap-4">
                  <p class="text-[22px] text-[#232323] font-semibold">
                    კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
                  </p>
                  <div>
                    <radio-input
                      type="radio"
                      name="number_of_days_from_office"
                      value="0"
                      :modelValue="store.state.number_of_days_from_office"
                      rules="required"
                      label="0"
                    />
                    <radio-input
                      type="radio"
                      name="number_of_days_from_office"
                      value="1"
                      :modelValue="store.state.number_of_days_from_office"
                      rules="required"
                      label="1"
                    />
                    <radio-input
                      type="radio"
                      name="number_of_days_from_office"
                      value="2"
                      :modelValue="store.state.number_of_days_from_office"
                      rules="required"
                      label="2"
                    />
                    <radio-input
                      type="radio"
                      name="number_of_days_from_office"
                      value="3"
                      :modelValue="store.state.number_of_days_from_office"
                      rules="required"
                      label="3"
                    />
                    <radio-input
                      type="radio"
                      name="number_of_days_from_office"
                      value="4"
                      :modelValue="store.state.number_of_days_from_office"
                      rules="required"
                      label="4"
                    />
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
          <div class="w-[50%] pt-20">
            <img src="../assets/bike2 1.svg" />
            <div class="absolute w-[62rem] h-[7.5rem] top-[26%] left-[58%] rectangle"></div>
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
import { Form } from 'vee-validate'
import TextareaField from '../components/TextareaField.vue'
import RadioInput from '../components/RadioInput.vue'

const store = useStore()

const updateInput = (key, value) => {
  store.commit('updateInputValue', { key, value })
}
function onSubmit(values) {
  console.log(values)
}
</script>

<style scoped>
.rectangle {
  animation: rect 0.2s ease-in forwards;
}
@keyframes rect {
  0% {
    scale: 1.5;
  }
  100% {
    scale: 1;
  }
}
.rectangle {
  position: absolute;
  margin-top: 10px;
  width: 100px;
  height: 100px;
  transform: rotate(-56deg) scale(1.18);
  background-color: hsla(0, 79%, 65%, 0.531);
}

.rectangle::before,
.rectangle::after {
  content: '';
  position: absolute;
  top: -50px;
  width: 100px;
  height: 50px;
  border-radius: 150px 150px 0 0;
  background-color: hsla(0, 79%, 65%, 0.531);
}

.rectangle::before {
  left: 100px;
  transform: rotate(90deg);
  transform-origin: 0 100%;
}

.rectangle::after {
  left: 0;
  transform: rotate(0);
  transform-origin: 100% 100%;
}
</style>
