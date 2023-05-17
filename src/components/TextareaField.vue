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
<template>
  <div class="flex flex-col gap-4">
    <strong class="text-[22px] text-[#232323] font-semibold">
      {{ label }}
    </strong>
    <textarea
      :name="name"
      class="w-full border-[0.8px] border-[#232323] h-36"
      :value="props.value"
      @input="props.updateInput(props.name, $event.target.value)"
    ></textarea>
  </div>
</template>
