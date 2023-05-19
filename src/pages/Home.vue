<template>
  <div class="w-full h-screen bg-[#EAEAEA] flex flex-col items-center justify-center gap-16 pb-16">
    <img src="../assets/redbbery_logo.svg" class="animate_in" />
    <RouterLink to="private-info" class="text-[30px] flex flex-col items-center animate_link">
      <strong>კითხვარის</strong>
      <strong>დაწყება</strong>
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
@keyframes text-appear {
  0%,
  50% {
    opacity: 0;
    transform: translateY(-100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes animate_in {
  from {
    transform: scale(42);
  }
}

.RouterLink {
  position: relative;
}

.RouterLink::after {
  content: 'კითხვარის დაწყება';
  position: absolute;
  top: 0;
  left: 2px;
  color: transparent;
  -webkit-text-stroke: 1px #232323;
  transition: color 0.3s;
}

.RouterLink:hover::after {
  color: #232323;
}

.animate_link {
  animation: 1.3s text-appear ease-out;
}

.animate_in {
  animation: 0.5s animate_in ease;
}
</style>
