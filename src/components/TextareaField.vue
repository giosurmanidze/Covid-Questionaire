<template>
  <div class="flex flex-col gap-4">
    <label class="text-[22px] text-[#232323] font-semibold">{{ label }}*</label>
    <textarea
      :name="name"
      class="w-full border-[0.8px] border-[#232323] h-36"
      :value="value"
      @input="updateInput(name, $event.target.value)"
    ></textarea>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  name: {
    name: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  updateInput: {
    type: Function,
    required: true
  }
})
</script>
