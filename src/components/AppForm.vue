<template>
  <div class="form flex flex-col items-center">
    <base-logo />
    <form-inputs />
    <form-button />
    <div class="form__inner flex justify-center relative w-full mt-9">
      <p class="form__text relative z-10 px-2 text-xl font-semibold">or</p>
      <span class="form__line absolute left-0 top-1/2 w-45% h-2px bg-gradient-to-l from-gray-400 to-opacity-0"></span>
      <span class="form__line absolute right-0 top-1/2 w-45% h-2px bg-gradient-to-r from-gray-400 to-opacity-0"></span>
    </div>
    <div class="form__signup flex items-center gap-1 mt-6">
      <p class="form__text"><span class="form__text opacity-50">Don't have account?</span><span
          class="form__link text-blue-500 cursor-pointer"> Sign-up</span></p>
    </div>
    <socials-buttons />
    <div class="form__copyright mt-9 opacity-30 flex gap-2 items-center">
      <p class="form__text text-xl">©</p>
      <p class="form__text">Copyright 2023 Airspace Corporation</p>
    </div>
  </div>
</template>

<script>
import BaseLogo from '@/components/BaseLogo.vue';
import FormInputs from '@/components/UI/FormInputs.vue';
import FormButton from '@/components/UI/FormButton.vue';
import SocialsButtons from '@/components/UI/SocialsButtons.vue'

export default {
  components: {
    BaseLogo,
    FormInputs,
    FormButton,
    SocialsButtons,
  },
}
</script>

<style lang="scss" scoped></style>