<template>
  <div class="w-full flex justify-center h-screen bg-[#EAEAEA]">
    <div class="w-[80%] pt-14">
      <form>
        <div class="flex justify-between">
          <div class="pt-16 flex flex-col gap-16 w-[40%]">
            <div class="flex flex-col gap-8">
              <div class="flex flex-col gap-3">
                <strong class="text-[22px]">სახელი<span>*</span></strong>
                <input
                  type="text"
                  placeholder="იოსებ"
                  class="w-[75%] h-12 border-[0.8px] border-[#232323] pl-5 outline-none"
                />
              </div>

              <div class="flex flex-col gap-3">
                <strong class="text-[22px]">გვარი<span>*</span></strong>
                <input
                  type="text"
                  placeholder="ჯუღაშვილი"
                  class="w-[75%] h-12 border-[0.8px] border-[#232323] pl-5 outline-none"
                />
              </div>
              <div class="flex flex-col gap-3">
                <strong class="text-[22px]">მეილი<span>*</span></strong>
                <input
                  type="text"
                  placeholder="fbi@redberry.ge"
                  class="w-[75%] h-12 border-[0.8px] border-[#232323] pl-5 outline-none"
                />
              </div>
            </div>
            <div class="pt-14 w-[50%]">
              <div class="w-full h-[1px] bg-[#000000]"></div>
              <p class="pt-3 text-[#626262]">*-ით მონიშნული ველების შევსება სავალდებულოა</p>
            </div>
          </div>
          <div class="w-[60%]">
            <img src="../assets/Group 5.svg" alt="" />
          </div>
        </div>

        <div class="flex justify-center gap-16">
          <button type="submit">
            <img src="../assets/Vector 2.svg" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>
