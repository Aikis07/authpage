<template>
  <div class="sign-in flex justify-center gap-56 mt-7 lg:mt-28 w-full">
    <base-left class="left"/>
    <base-right v-if="$mq === 'lg'" class="right"/>
  </div>
</template>

<script>
import BaseLeft from '@/components/BaseLeft.vue';
import BaseRight from '@/components/BaseRight.vue'

  export default {
    components: {
      BaseLeft,
      BaseRight,
    },
  }
</script>

<style lang="scss" scoped>

</style>