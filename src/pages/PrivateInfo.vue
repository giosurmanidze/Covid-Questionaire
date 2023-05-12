<template>
  <div class="w-full flex justify-center h-screen bg-[#EAEAEA]">
    <div class="w-[80%] pt-14">
      <form @submit.prevent="handleSubmit">
        <Header :currentPage="1" />
        <div class="flex justify-between">
          <div class="pt-16 flex flex-col gap-16 w-[40%]">
            <div class="flex flex-col gap-8">
              <div class="flex flex-col gap-3">
                <strong class="text-[22px]">სახელი<span>*</span></strong>
                <input
                  type="text"
                  placeholder="იოსებ"
                  v-model="first_name"
                  @input="updateInput('first_name')"
                  class="w-[75%] h-12 border-[0.8px] border-[#232323] pl-5 outline-none"
                />
                <p class="error-message text-[#F15524]">{{ first_nameError }}</p>
              </div>

              <div class="flex flex-col gap-3">
                <strong class="text-[22px]">გვარი<span>*</span></strong>
                <input
                  type="text"
                  v-model="last_name"
                  @input="updateInput('last_name')"
                  placeholder="ჯუღაშვილი"
                  class="w-[75%] h-12 border-[0.8px] border-[#232323] pl-5 outline-none"
                />
                <p class="error-message text-[#F15524]">{{ last_nameError }}</p>
              </div>
              <div class="flex flex-col gap-3">
                <strong class="text-[22px]">მეილი<span>*</span></strong>
                <input
                  type="text"
                  v-model="email"
                  @input="updateInput('email')"
                  placeholder="fbi@redberry.ge"
                  class="w-[75%] h-12 border-[0.8px] border-[#232323] pl-5 outline-none"
                />
                <p class="error-message text-[#F15524]">{{ emailError }}</p>
              </div>
            </div>
            <div class="pt-14 w-[50%]">
              <div class="w-full h-[1px] bg-[#000000]"></div>
              <p class="pt-3 text-[#626262]">*-ით მონიშნული ველების შევსება სავალდებულოა</p>
            </div>
          </div>
          <div class="w-[60%]">
            <img src="../assets/Group 5.svg" alt="" />
          </div>
        </div>
        <div class="flex justify-center gap-16">
          <button type="submit">
            <img src="../assets/Vector 2.svg" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import store from '../store/store'
import { useField, useForm } from 'vee-validate'
import validationSchema from '../validators/privateInfoSchema'

export default {
  components: {
    Header
  },
  data() {
    return {
      first_name: store.state.first_name || '',
      last_name: store.state.last_name || '',
      email: store.state.email || ''
    }
  },
  setup() {
    const { resetForm, validate } = useForm({
      initialValues: store.state,
      validationSchema
    })

    const { value: first_name, errorMessage: first_nameError } = useField(
      'first_name',
      validationSchema
    )
    const { value: last_name, errorMessage: last_nameError } = useField(
      'last_name',
      validationSchema
    )
    const { value: email, errorMessage: emailError } = useField('email', validationSchema)
    return {
      resetForm,
      validate,
      first_name,
      first_nameError,
      last_name,
      last_nameError,
      email,
      emailError
    }
  },

  methods: {
    updateInput(key) {
      store.commit('updateInputValue', { key, value: this[key] })
    },
    handleSubmit() {
      this.validate().then((isValid) => {
        store.commit('updateFormValidity', isValid.valid)
        if (isValid.valid) {
          this.$router.push('covid-condition')
        }
      })
    }
  }
}
</script>
