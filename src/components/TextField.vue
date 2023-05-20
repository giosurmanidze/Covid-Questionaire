<template>
  <div class="flex flex-col gap-3">
    <label v-if="label" class="text-[22px] text-black font-bold">{{ ` ${label} *` }}</label>
    <Field
      as="input"
      :type="type"
      :value="value"
      :rules="rules"
      :name="name"
      :placeholder="placeholder"
      class="w-[75%] h-12 border-[0.8px] border-[#232323] pl-5 outline-none"
      @input="updateInput(name, $event.target.value)"
      :validateOnInput="true"
    />
    <p class="text-[#F15524]">
      <ErrorMessage :name="name" />
    </p>
  </div>
</template>
<script setup>
import { Field, ErrorMessage } from 'vee-validate'
import { defineProps } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: false
  },
  type: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  rules: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  },
  updateInput: {
    type: Function,
    required: true
  }
})
</script>
