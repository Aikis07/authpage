<template>
  <div class="slogan lg:text-5xl font-semibold flex flex-col items-center justify-between">
    <div class="slogan__slogan flex flex-col gap-3">
      <h2 class="slogan__title leading-tight flex flex-col"><span class="slogan__title">Securely Upload And
          Store</span><br /><span class="slogan__title ml-10">Your
          Important Documents</span><br /><span class="slogan__color ml-24">With <span
            class="slogan__color text-blue-600">Airspace!</span></span></h2>
    </div>
    <div class="slogan__imgs w-full relative flex justify-center">
      <tablet class="slogan__icon absolute top-2 right-0 max-w-xs fill-gray-400" />
      <cloud class="slogan__icon max-w-lg z-10" />
      <arrow class="slogan__icon absolute bottom-10 left-0 max-w-xs z-20 fill-gray-400" />
    </div>
  </div>
</template>

<script>
import Cloud from '@/assets/img/cloud.svg'
import Tablet from '@/assets/img/tablet.svg'
import Arrow from '@/assets/img/arrow.svg'

export default {
  components: {
    Cloud,
    Tablet,
    Arrow,
  },
}
</script>

<style lang="scss" scoped></style>