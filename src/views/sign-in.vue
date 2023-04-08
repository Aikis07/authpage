<template>
  <div class="sign-in bg-gradient-to-tl from-blue-100 to-white h-screen">
    <div class="wrapper flex justify-center gap-24 2xl:gap-56 pt-6 lg:pt-28 w-full">
      <app-form class="left"/>
      <app-slogan class="right hidden xl:flex"/>
    </div>
  </div>
</template>

<script>
import AppForm from '@/components/AppForm.vue';
import AppSlogan from '@/components/AppSlogan.vue'

  export default {
    components: {
      AppForm,
      AppSlogan,
    },
  }
</script>

<style lang="scss" scoped>

</style>