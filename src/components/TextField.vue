<script setup>
import { Field, ErrorMessage } from 'vee-validate'
import { defineProps } from 'vue'

const props = defineProps({
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
    required: true
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

<template>
  <div class="flex flex-col gap-3">
    <Field
      as="input"
      :type="props.type"
      :value="props.value"
      :rules="props.rules"
      :name="props.name"
      :placeholder="props.placeholder"
      class="w-[75%] h-12 border-[0.8px] border-[#232323] pl-5 outline-none"
      @input="props.updateInput(props.name, $event.target.value)"
      :validateOnInput="true"
    />
    <p class="error-message text-[#F15524]">
      <ErrorMessage :name="props.name" v-slot="{ message }">
        {{ message }}
      </ErrorMessage>
    </p>
  </div>
</template>
