<template>
  <div
    class="inline-block relative text-sm text-gray min-w-[100px]"
  >
    <div
      class="flex items-center justify-between p-2 bg-white border
      border-gray rounded-lg cursor-pointer hover:bg-gray-ultra-light capitalize"
      @click="toggleOpen"
    >
      <span
        class="flex-1"
      >{{ selected.join(', ') }}</span>
    </div>
    <div
      v-show="isOpen"
      class="absolute top-full left-0 z-50 w-full max-h-[200px]
      overflow-y-auto bg-white border border-gray-light rounded-lg shadow"
    >
      <div
        v-for="option in options"
        :key="option"
        class="flex items-center justify-between p-2.5 cursor-pointer hover:bg-[#f5f5f5] capitalize"
        :class="{ 'bg-[#e5e5e5]': selected.includes(option) }"
        @click="handleSelect(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watchEffect } from 'vue'

const props = defineProps<{
  options: string[]
  modelValue: string[]
}>()

const emits = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const selected = ref(props.modelValue)

const toggleOpen = () => {
  isOpen.value = !isOpen.value
}

const handleSelect = (option: string) => {
  if (option === 'all') {
    selected.value = ['all']
  } else {
    const allOptionIndex = selected.value.indexOf('all')
    if (allOptionIndex !== -1) {
      selected.value.splice(allOptionIndex, 1)
    }

    const index = selected.value.indexOf(option)
    if (index === -1) {
      selected.value.push(option)
    } else {
      selected.value.splice(index, 1)
      if (!selected.value.length) {
        selected.value = ['all']
      }
    }
  }
}

watchEffect(() => {
  emits('update:modelValue', selected.value)
})
</script>
