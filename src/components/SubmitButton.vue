<template>
  <button
    type="submit"
    :disabled="!isValid"
    :class="{ disabled: !isValid }"
    @click="navigateToPage(destination)"
  >
    <right-arrow :isValid="isValid" />
  </button>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import RightArrow from './RightArrow.vue'

const props = defineProps({
  isValid: { type: Boolean, required: true },
  destination: { type: String, required: true }
})

const router = useRouter()

function navigateToPage(destination) {
  router.push(destination)
}
</script>
