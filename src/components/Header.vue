<template>
  <div class="flex flex-col gap-3">
    <div class="flex justify-between">
      <img src="../assets/redberry.svg" />
      <span class="text-xl">{{ currentPage }} / 4</span>
    </div>
    <div class="h-[3px] bg-[#232323] w-full"></div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  }
})
</script>
