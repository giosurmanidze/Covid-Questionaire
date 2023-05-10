<template>
  <div class="w-full flex justify-center h-screen bg-[#EAEAEA]">
    <div class="w-[80%] pt-14">
      <Header :currentPage="4" />
      <form>
        <div class="flex justify-between">
          <div class="pt-16 flex flex-col gap-16 w-[40%]">
            <div class="flex flex-col items-start gap-5 h-[70vh]">
              <div class="flex flex-col gap-10 overflow-auto pl-5 pr-5 pt-5 pb-8">
                <div>
                  <p class="text-[22px] text-[#232323] font-semibold">
                    რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო, რომელსაც ჩვენი
                    თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების განმავლობაში მიზნებისთვის
                    ერთად ბრძოლის მიზეზი, ბევრისთვის კი — ჩვენთან გადმოსვლის.
                  </p>
                  <p class="text-[22px] text-[#232323] font-semibold pt-3">
                    პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და ყოველდღიური
                    კომუნიკაციაც გაიშვიათდა.
                  </p>
                </div>
                <div class="flex flex-col gap-4">
                  <p class="text-[22px] text-[#232323] font-semibold">
                    რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა
                    სურვილისამებრ ჩაერთვება?*
                  </p>
                  <div>
                    <div class="flex items-center gap-3">
                      <input type="radio" class="w-6 h-6" />
                      <p class="text-[20px] pb-1 text-[#232323]">კვირაში ორჯერ</p>
                    </div>
                    <div class="flex items-center gap-3">
                      <input type="radio" class="w-6 h-6" />
                      <parse class="text-[20px] pb-1 text-[#232323]">კვირაში ერთხელ</parse>
                    </div>
                    <div class="flex items-center gap-3">
                      <input type="radio" class="w-6 h-6" />
                      <parse class="text-[20px] pb-1 text-[#232323]">ორ კვირაში ერთხელ</parse>
                    </div>
                    <div class="flex items-center gap-3">
                      <input type="radio" class="w-6 h-6" />
                      <parse class="text-[20px] pb-1 text-[#232323]">თვეში ერთხელ</parse>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-4">
                  <p class="text-[22px] text-[#232323] font-semibold">
                    კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
                  </p>
                  <div>
                    <div class="flex items-center gap-3">
                      <input type="radio" class="w-6 h-6" />
                      <p class="text-[20px] pb-1 text-[#232323]">0</p>
                    </div>
                    <div class="flex items-center gap-3">
                      <input type="radio" class="w-6 h-6" />
                      <p class="text-[20px] pb-1 text-[#232323]">1</p>
                    </div>
                    <div class="flex items-center gap-3">
                      <input type="radio" class="w-6 h-6" />
                      <p class="text-[20px] pb-1 text-[#232323]">2</p>
                    </div>
                    <div class="flex items-center gap-3">
                      <input type="radio" class="w-6 h-6" />
                      <p class="text-[20px] pb-1 text-[#232323]">3</p>
                    </div>
                    <div class="flex items-center gap-3">
                      <input type="radio" class="w-6 h-6" />
                      <p class="text-[20px] pb-1 text-[#232323]">4</p>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col gap-4">
                  <p class="text-[22px] text-[#232323] font-semibold">
                    კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
                  </p>
                  <textarea class="w-full border-[0.8px] border-[#232323] h-36"> </textarea>
                </div>

                <div class="flex flex-col gap-4">
                  <p class="text-[22px] text-[#232323] font-semibold">
                    რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
                  </p>
                  <textarea class="w-full border-[0.8px] border-[#232323] h-36"> </textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="w-[50%] pt-10">
            <img src="../assets/Group 6.svg" alt="" />
          </div>
        </div>
        <div class="flex justify-center pr-[520px] pt-10">
          <button
            type="submit"
            class="text-[18px] bg-[#208298] w-44 h-12 rounded-[42px] text-[#FFFFFF]"
          >
            დასრულება
          </button>
        </div>
      </form>
      <div class="flex justify-center pt-5">
        <RouterLink to="vaccination">
          <img src="../assets/Vector 9.svg" />
        </RouterLink>
      </div>
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
