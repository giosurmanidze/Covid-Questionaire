<template>
  <div class="w-full h-screen bg-[#232323] flex justify-center items-center">
    <div class="relative">
      <img src="../assets/star.svg" class="w-16 big-star" />
      <h1 class="text-[64px] text-[#FFFFFF]">მადლობა</h1>
      <img src="../assets/star.svg" class="absolute small-star right-0 w-10" />
    </div>
  </div>
</template>

<style scoped>
.small-star {
  animation: small-star .5s ease-out forwards;
}
.big-star {
  animation: big-star .5s ease-out forwards;
}
@keyframes small-star {
  0% {
    transform: scale(0);
    bottom: 0;
    right: 19%;
    opacity: 0;
  }
  75% {
    transform: scale(0);
    bottom: 0;
    right: 19%;
    opacity: 0;
  }
  100% {
    transform: scale(0.9);
    bottom: -27%;
    right: 9%;
    opacity: 1;
  }
}
@keyframes big-star {
  0% {
    transform: scale(0);
    top: 7%;
    left: 16%;
  }
  75% {
    transform: scale(0);
    top: 7%;
    left: 16%;
  }
  100% {
    transform: scale(0.9);
    top: -45%;
    left: 9%;
    opacity: 1;
  }
}

.rectangle {
  animation: rect 0.45s ease-in forwards;
}
.thanks {
  animation: thx 0.9s ease-in forwards;
  letter-spacing: 3px;
}
@keyframes thx {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}
section {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
@keyframes rect {
  0% {
    scale: 0.1;
    top: 30rem;
    left: 45%;
    opacity: 0.7;
  }
  100% {
    scale: 9;
    top: 60rem;
    left: 60%;
    opacity: 1;
  }
}
.rectangle {
  position: relative;
  top: 40rem;
  left: 45%;
  display: inline-block;
  width: 200px;
  height: 200px;
  transform: rotate(20deg);
  background-color: #232323;
}
.rectangle:before,
.rectangle:after {
  position: absolute;
  width: 200px;
  height: 200px;
  content: '';
  border-radius: 50%;
  background-color: #232323;
}
.rectangle:before {
  bottom: 0px;
  left: -100px;
}
.rectangle:after {
  top: -100px;
  right: 0px;
}
</style>
