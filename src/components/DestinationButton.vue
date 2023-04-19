<template>
  <button
    class="pl-5 pr-5 pt-[10px] pb-[10px] border border-black
    rounded-[30px] font-poppins text-sm active:bg-black active:text-white"
  >
    {{ city }}
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  city: string
}>()
</script>

<style scoped>

</style>
