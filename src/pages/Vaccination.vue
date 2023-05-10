<template>
  <div class="w-full flex justify-center h-screen bg-[#EAEAEA]">
    <div class="w-[80%] pt-14">
      <Header :currentPage="3" />
      <form >
        <div class="flex justify-between">
          <div class="pt-16 flex flex-col gap-16 w-[40%]">
            <div class="flex flex-col items-start gap-5">
              <strong class="text-[22px]">უკვე აცრილი ხარ?*</strong>
              <div class="flex items-center gap-3">
                <input
                  type="radio"
                  class="w-6 h-6"
                />
                <p class="text-[20px] pb-1">კი</p>
              </div>
              <div class="flex items-center gap-3">
                <input
                  type="radio"
                  class="w-6 h-6"
              
                />
                <p class="text-[20px] pb-1">არა</p>
              </div>

              <div  class="flex flex-col items-start gap-5 pt-4">
                <strong class="text-[22px]">აირჩიე რა ეტაპზე ხარ*</strong>
                <div class="flex items-center gap-3">
                  <input
                    type="radio"
                    class="w-6 h-6"
                  />
                  <p class="text-[20px] pb-1">პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</p>
                </div>
                <div class="flex items-center gap-3">
                  <input
                    type="radio"
                    class="w-6 h-6"
                  />
                  <p class="text-[20px] pb-1">სრულად აცრილი ვარ</p>
                </div>
                <div class="flex items-center gap-3">
                  <input
                    type="radio"
                    class="w-6 h-6"
                  />
                  <p class="text-[20px] pb-1">პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</p>
                </div>

                <div
                  class="text-[20px] pl-10"
                >
                  <p>რომ არ გადადო,</p>
                  <p>ბარემ ახლავე დარეგისტრირდი</p>
                  <a class="text-[#1289AE]" href="https://booking.moh.gov.ge/"
                    >https://booking.moh.gov.ge/</a
                  >
                </div>
              </div>

              <div  class="flex flex-col items-start gap-5 pt-4">
                <strong class="text-[22px]">რას ელოდები?*</strong>
                <div class="flex items-center gap-3">
                  <input
                    type="radio"
                    class="w-6 h-6"
                  
                  />
                  <p class="text-[20px] pb-1">დარეგისტრირებული ვარ და ველოდები რიცხვს</p>
                </div>
                <div class="flex items-center gap-3">
                  <input
                    type="radio"
                    class="w-6 h-6"
                   
                  />
                  <p class="text-[20px] pb-1">არ ვგეგმავ</p>
                </div>
                <div class="flex items-center gap-3">
                  <input
                    type="radio"
                    class="w-6 h-6"
                 
                  />
                  <p class="text-[20px] pb-1">გადატანილი მაქვს და ვგეგმავ აცრას</p>
                </div>
              </div>
              <div
                class="text-[20px] pl-10 flex flex-col gap-3"
              
              >
                <div>
                  <p>ახალი პროტოკოლით კოვიდის გადატანიდან 1</p>
                  <p>თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.</p>
                </div>
                <div>
                  <p>👉 რეგისტრაციის ბმული</p>
                  <a class="text-[#1289AE]" href="https://booking.moh.gov.ge/"
                    >https://booking.moh.gov.ge/</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="w-[50%]">
            <img src="../assets/Group 3.svg" alt="" />
          </div>
        </div>
        <div class="flex justify-center gap-16">
          <RouterLink to="covid-condition">
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
  },
}
</script>
