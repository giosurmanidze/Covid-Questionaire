<template>
  <div class="flex items-center gap-3 w-full">
    <label class="text-[22px] flex items-center gap-3">
      <Field
        :type="type"
        :name="name"
        :value="value"
        :rules="rules"
        class="appearance-none w-5 h-5 flex items-center rounded-full bg-inherit shadow-custom border-2 border-[#B5C0C7] p-2 checked:bg-neutral-900"
        v-model="modelValue"
        @input="updateRadioValue(value)"
        @click="clearInput"
      />
      {{ label }}
    </label>
  </div>
</template>

<script setup>
import { Field } from 'vee-validate'
import { ref, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { defineProps } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  rules: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  clearInput: {
    type: Function,
    required: false
  }
})

const modelValue = ref('')
const store = useStore()

const updateRadioValue = (value) => {
  modelValue.value = value
  store.commit('updateRadioInput', { name: props.name, value })
}

onMounted(() => {
  modelValue.value = store.state[props.name]
})
watch(
  () => props.value,
  (newValue) => {
    modelValue.value = newValue
  }
)
</script>
<style scoped>
.shadow-custom {
  box-shadow: 0 0 0 1px rgb(0, 0, 0);
}
</style>
