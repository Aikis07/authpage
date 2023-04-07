<template>
  <div class="left flex flex-col items-center">
    <div class="logo flex items-center gap-2 font-bold text-4xl">
      <logo class="logo__icon w-14"/>
      <h2 class="logo_title">Airspace</h2>
    </div>
    <base-inputs />
    <base-button />
    <div class="flex justify-center relative w-full mt-9">
      <p class="relative z-10 bg-white px-2 text-xl font-semibold">or</p>
      <span class="absolute left-0 top-1/2 w-1/2 h-2px bg-gradient-to-l from-gray-400 to-opacity-0"></span>
      <span class="absolute right-0 top-1/2 w-1/2 h-2px bg-gradient-to-r from-gray-400 to-opacity-0"></span>
    </div>
    <div class="left__signup flex items-center gap-1 mt-6">
      <p class="left__text opacity-50">Don't have account?</p>
      <p class="left__link text-blue-500 cursor-pointer">Sign-up</p>
    </div>
    <socials-buttons />
    <div class="left__copyright mt-9 opacity-30 flex gap-2 items-center">
      <p class="left__text text-xl">©</p>
      <p class="left__text">Copyright 2023 Airspace Corporation</p>
    </div>
  </div>
</template>

<script>
import Logo from '@/assets/img/logo.svg'
import BaseInputs from '@/components/UI/BaseInputs.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import SocialsButtons from '@/components/UI/SocialsButtons.vue'

  export default {
    components: {
      Logo,
      BaseInputs,
      BaseButton,
      SocialsButtons,
    },
  }
</script>

<style lang="scss" scoped>

</style>