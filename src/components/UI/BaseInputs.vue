<template>
  <div class="inputs flex flex-col gap-4 mt-10 lg:w-96">
    <div class="inputs__email flex flex-col gap-2">
      <p class="inputs__title">Email</p>
      <div class="inputs__wrapper relative flex items-center">
        <mail class="inputs__icon opacity-30 w-8 pl-3 absolute" />
        <input class="inputs__input pl-10 py-3 border border-gray-300 rounded-lg w-full focus:ring-0" type="email"
          placeholder="Airspace@info.com">
      </div>
    </div>
    <div class="inputs__password flex flex-col gap-2">
      <p class="inputs__title">Password</p>
      <div class="inputs__wrapper relative flex items-center">
        <key class="inputs__icon opacity-30 w-8 pl-3 absolute" />
        <input class="inputs__input pl-10 py-3 border rounded-lg w-full border-gray-300 focus:ring-0" type="email"
          placeholder="Airspace@info.com">
        <eye class="inputs__icon w-7 right-2 absolute cursor-pointer" />
      </div>
    </div>
    <div class="inputs__remember flex gap-4 mt-6">
      <input class="inputs__checkbox w-5 h-5 border-gray-300 rounded-md focus:ring-white" type="checkbox">
      <div class="inputs__inner">
        <p class="inputs__text font-semibold">Remember Me</p>
        <p class="inputs__description opacity-30">Save my login details for next time.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Mail from '@/assets/img/mail.svg'
import Eye from '@/assets/img/eye.svg'
import Key from '@/assets/img/key.svg'

export default {
  components: {
    Mail,
    Eye,
    Key,
  },
}
</script>

<style lang="scss" scoped></style>