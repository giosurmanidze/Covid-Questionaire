<template>
  <div class="w-full flex justify-center h-screen bg-[#EAEAEA]">
    <div class="w-[80%] pt-14">
      <Header :currentPage="2" />
      <form>
        <div class="flex justify-between">
          <div class="pt-16 flex flex-col gap-16 w-[40%]">
            <div class="flex flex-col items-start gap-5">
              <strong class="text-[22px]">გაქვს გადატანილი Covid-19?*</strong>
              <div class="flex items-center gap-3">
                <input type="radio" class="w-6 h-6" />
                <strong class="text-[20px] pb-1">კი</strong>
              </div>
              <div class="flex items-center gap-3">
                <input type="radio" class="w-6 h-6" />
                <strong class="text-[20px] pb-1">არა</strong>
              </div>
              <div class="flex items-center gap-3">
                <input type="radio" class="w-6 h-6" />
                <strong class="text-[20px] pb-1">ახლა მაქვს</strong>
              </div>

              <div class="flex flex-col items-start gap-5 pt-4">
                <strong class="text-[22px]">ანტისხეულების ტესტი გაქვს გაკეთებული?*</strong>
                <div class="flex items-center gap-3">
                  <input type="radio" class="w-6 h-6" />
                  <strong class="text-[20px] pb-1">კი</strong>
                </div>
                <div class="flex items-center gap-3">
                  <input type="radio" class="w-6 h-6" />
                  <strong class="text-[20px] pb-1">არა</strong>
                </div>

                <div class="flex flex-col gap-3 w-[100%] pt-4">
                  <strong class="text-[22px]"
                    >თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
                    რაოდენობა</strong
                  >
                  <input
                    type="text"
                    placeholder="რიცხვი"
                    class="w-full h-12 border-[0.8px] border-[#232323] pl-5 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="ანტისხეულების რაოდენობა"
                    class="w-full h-12 border-[0.8px] border-[#232323] pl-5 outline-none mt-3"
                  />
                </div>

                <div class="flex flex-col gap-3 w-[100%] pt-4">
                  <strong class="text-[22px]"
                    >მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*</strong
                  >
                  <input
                    type="date"
                    class="w-full h-12 border-[0.8px] border-[#232323] pl-5 outline-none pr-5"
                  />
                  <p></p>
                  <div class="text-[#F15524]">შეიყვანეთ სწორი ფორმატით</div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-[60%]">
            <img src="../assets/Group 4.svg" alt="" />
          </div>
        </div>
        <div class="flex justify-center gap-16">
          <RouterLink to="private-info">
            <img src="../assets/Vector 9.svg" />
          </RouterLink>
          <button type="submit">
            <img src="../assets/Vector 2.svg" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Header from '../components/Header.vue'
import { RouterLink } from 'vue-router'

export default {
  components: {
    Header
  }
}
</script>
