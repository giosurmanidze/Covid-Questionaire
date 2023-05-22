<template>
  <div class="w-full flex justify-center h-screen bg-[#EAEAEA]">
    <div class="w-[80%] pt-14">
      <Form v-slot="{ meta, handleSubmit }">
        <Header :currentPage="1" />
        <div class="flex justify-between">
          <div class="pt-16 flex flex-col gap-16 w-[40%]">
            <div class="flex flex-col gap-8">
              <text-field
                label="სახელი"
                type="text"
                :value="store.state.first_name"
                rules="required|min:3|max:255"
                name="first_name"
                placeholder="იოსებ"
                :updateInput="updateInput"
              />
              <text-field
                label="გვარი"
                type="text"
                :value="store.state.last_name"
                rules="required|min:3|max:255"
                name="last_name"
                placeholder="ჯუღაშვილი"
                :updateInput="updateInput"
              />
              <text-field
                label="მეილი"
                type="text"
                :value="store.state.email"
                rules="required|email|regex_email"
                name="email"
                placeholder="fbi@redberry.ge"
                :updateInput="updateInput"
              />
            </div>
            <div class="pt-14 w-[50%]">
              <div class="w-full h-[1px] bg-[#000000]"></div>
              <p class="pt-3 text-[#626262]">*-ით მონიშნული ველების შევსება სავალდებულოა</p>
            </div>
          </div>
          <div class="w-[60%]">
            <img
              src="../assets/main-logo.svg"
              class="absolute top-[324px] right-[340px] rectangle"
            />
            <img src="../assets/scan2.svg" class="relative" />
          </div>
        </div>
        <div class="flex justify-center gap-16">
          <submit-button
            :isValid="meta.valid"
            destination="/covid-condition"
            @click="handleSubmit"
          />
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import { useStore } from 'vuex'
import { Form } from 'vee-validate'
import SubmitButton from '../components/SubmitButton.vue'
import TextField from '../components/TextField.vue'

const store = useStore()

const updateInput = (key, value) => {
  store.commit('updateTextInput', { key, value })
}
</script>

<style scoped>
hr {
  margin-bottom: 2rem;
  width: 40%;
  height: 0.8px;
  background-color: black;
}
.rectangle {
  animation: rect 0.36s ease-in forwards;
}
@keyframes rect {
  0% {
    scale: 0;
    left: 32%;
  }
  100% {
    scale: 1;
    left: 50%;
  }
}
</style>
