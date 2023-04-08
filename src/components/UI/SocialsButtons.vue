<template>
  <div class="socials w-full flex flex-col gap-3 mt-5">
    <div class="social__wrapper flex items-center justify-center cursor-pointer gap-2 border-2 rounded-lg py-2">
      <google class="socials__icon w-5"/>
      <h2 class="social__button">Sign in with Google</h2>
    </div>
    <div class="social__wrapper w-full flex py-2 bg-blue-500 text-white rounded-lg gap-2 justify-center items-center cursor-pointer">
      <facebook class="socials__icon w-5"/>
      <h2 class="social__button">Sign in with Facebook</h2>
    </div>
    <div class="social__wrapper w-full flex py-2 bg-black text-white rounded-lg gap-2 justify-center items-center cursor-pointer">
      <apple class="socials__icon w-5 fill-white"/>
      <h2 class="social__button">Sign in with Apple</h2>
    </div>
  </div>
</template>

<script>
import Google from '@/assets/img/google.svg'
import Facebook from '@/assets/img/facebook.svg'
import Apple from '@/assets/img/apple.svg'

  export default {
    components: {
      Google,
      Facebook,
      Apple
    },
  }
</script>

<style lang="scss" scoped>

</style>