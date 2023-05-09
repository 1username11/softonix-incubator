<template>
  <div ref="imageContainer">
    <div v-if="isLoading" class="skeleton-animation" />
    <img v-else-if="src" :src="src" :alt="alt" @error="handleImageError">
    <img v-else :src="placeholderImage" :alt="alt">
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'

interface ILazyImageProps {
  src: string
  alt?: string
  placeholder?: string
}
const props = defineProps<ILazyImageProps>()

const imageContainer = ref<HTMLElement | null>(null)
const isLoading = ref(true)
const placeholderImage = props.placeholder || 'https://via.placeholder.com/300'
const alt = props.alt || 'Image'

const handleImageError = () => {
  isLoading.value = false
}

const loadImage = () => {
  isLoading.value = true

  const img = new Image()
  img.onload = () => {
    isLoading.value = false
  }
  img.onerror = handleImageError
  img.src = props.src
}

watchEffect(() => {
  const imageRect = imageContainer.value?.getBoundingClientRect()
  if (imageRect && imageRect.top <= window.innerHeight - 300) {
    loadImage()
  }
})

</script>

<style scoped>
.skeleton-animation {
    width: 100%;
    height: 100%;
    background-color: #ddd;
    animation: skeleton-loading 1s ease-in-out infinite;
}

@keyframes skeleton-loading {
    0% {
        background-color: #ddd;
    }
    50% {
        background-color: #ccc;
    }
    100% {
        background-color: #ddd;
    }
}
</style>
