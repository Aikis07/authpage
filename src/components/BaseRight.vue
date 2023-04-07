<template>
  <div class="right lg:text-5xl font-semibold flex flex-col items-center justify-between">
    <div class="right__slogan flex flex-col gap-3">
      <h2 class="right__title whitespace-nowrap">Securely Upload And Store</h2>
      <h2 class="right__title ml-10 whitespace-nowrap">Your Important Documents</h2>
      <h2 class="right__title ml-32 whitespace-nowrap">Width <span class="right__color text-blue-600">Airspace!</span></h2>
    </div>
    <div class="right__imgs w-full relative flex justify-center">
      <tablet class="right__icon absolute top-2 right-0 max-w-xs fill-gray-400"/>
      <cloud class="right__icon max-w-lg z-10"/>
      <arrow class="right__icon absolute bottom-10 left-0 max-w-xs z-20 fill-gray-400"/>
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