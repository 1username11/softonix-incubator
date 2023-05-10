<template>
  <img
    v-if="isVisible"
    :src="props.src"
    :alt="props.alt || props.src"
    @error="$emit('error')"
    @load="$emit('load')"
  >

  <div
    v-else
    ref="placeholderElRef"
    class="bg-red-300"
    :style="{ width: `${props.width || 300}px`, height: `${props.height || 300}px` }"
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watchEffect } from 'vue'

const props = defineProps<{
  src: string
  alt?: string
  width?: number
  height?: number
}>()

defineEmits(['error', 'load'])

const isVisible = ref(false)
const placeholderElRef = ref<HTMLDivElement>()

const observerOptions = {
  rootMargin: '300px'
}

const observerCallback = ([entry]: IntersectionObserverEntry[]) => {
  console.log(entry)
  const { isIntersecting, target } = entry
  if (isIntersecting) {
    console.log(props.alt || props.src, 'is intersecting')
    observer.unobserve(target)
    isVisible.value = true
  }
}

const observer = new IntersectionObserver(observerCallback, observerOptions)

watchEffect((onInvalidate) => {
  const placeholderEl = placeholderElRef.value
  if (!placeholderEl) return

  observer.observe(placeholderEl)
  onInvalidate(() => observer.unobserve(placeholderEl))
})
</script>
