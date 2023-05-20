<template>
  <div class="flex items-center gap-3">
    <Field
      :type="type"
      :name="name"
      :value="value"
      :rules="rules"
      class="w-6 h-6"
      v-model="modelValue"
      @input="updateCovidCondition(value)"
      @click="clearInput"
    />
    <label class="text-[20px] pb-1">{{ label }}</label>
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

const updateCovidCondition = (value) => {
  modelValue.value = value
  store.commit('setCovidCondition', { name: props.name, value })
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
