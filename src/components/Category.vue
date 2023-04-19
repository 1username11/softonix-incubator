<template>
  <div class="flex flex-col items-center">
    <img class="mb-5" :src="category.url" alt="">
    <p class="font-inter text-2xl font-medium">{{ category.name }}</p>
  </div>
</template>

<script lang="ts" setup>
interface ICategory{
  url: string
  name: string
}

const props = defineProps<{
  category: ICategory
}>()
console.log(props.category)
</script>
