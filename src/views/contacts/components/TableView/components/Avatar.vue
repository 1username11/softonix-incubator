<template>
  <div
    v-if="imageHasError || !contact.image"
    class="flex justify-center items-center w-[80px] h-[80px] text-center m-auto
          border border-gray-medium bg-gray-ultra-light rounded-full uppercase"
  >
    {{ nameAbbrv() }}
  </div>

  <img
    v-else
    class="object-cover w-[80px] h-[80px] rounded-full mx-auto block"
    :src="contact.image"
    @error="imageHasError = true"
    @load="imageHasError = false"
  >
</template>
<script lang="ts" setup>
const props = defineProps<{
  contact: IContact
}>()

const imageHasError = ref(false)
const nameAbbrv = function () {
  return props.contact.name.split(' ').reduce((acc, cur) => {
    if (acc.length < 2) {
      acc = acc.concat(cur[0])
    }
    return acc
  }, '')
}
</script>
