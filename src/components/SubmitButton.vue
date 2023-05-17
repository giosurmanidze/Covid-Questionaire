<template>
  <button
    type="submit"
    :disabled="!meta"
    :class="{ disabled: !meta }"
    @click="navigateToPage(destination)"
  >
    <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 1L15 11.3158L1 21.6316"
        :stroke="[!meta ? '#8D8D8D' : '#232323']"
        stroke-width="2.4"
      />
    </svg>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  meta: { type: Boolean, required: true },
  destination: { type: String, required: true }
})

const router = useRouter()

function navigateToPage(destination) {
  router.push(destination)
}
</script>
