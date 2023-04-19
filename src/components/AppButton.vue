<template>
  <button
    :disabled="disabled"
    class="bg-blue-700 text-white
        text-sm font-medium rounded p-2 inline-flex
        items-center justify-center
        disabled:bg-gray-medium disabled:cursor-not-allowed"
  >
    <div v-if="$slots.icon" class="mr-2">
      <slot name="icon" />
    </div>
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  disabled?: boolean
}>()
</script>

<style scoped>

</style>
