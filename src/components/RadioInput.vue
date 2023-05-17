<template>
  <div class="flex items-center gap-3">
    <input
      type="radio"
      :name="name"
      :value="value"
      class="w-6 h-6"
      :checked="modelValue === value"
      @input="updateValue"
      @click="clearInputs"
    />
    <strong class="text-[20px] pb-1">{{ label }}</strong>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  label: {
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
  modelValue: {
    type: String,
    required: true
  }
})

const emits = defineEmits(['update:modelValue'])

const updateValue = () => {
  emits('update:modelValue', value)
}

const clearInputs = () => {
  // Implement your clear logic here
}
</script>
