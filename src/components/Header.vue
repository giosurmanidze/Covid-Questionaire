<template>
  <div class="flex flex-col gap-3">
    <div class="flex justify-between">
        <img src="../assets/Group.svg" />
        <span class="text-xl">{{ currentPage }} / 4</span>
    </div>
    <div class="h-[3px] bg-[#232323] w-full"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  props: {
    currentPage: {
      type: Number
    },
  }
})
</script>
