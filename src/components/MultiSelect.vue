<template>
  <div class="multiselect">
    <div class="multiselect__selected" @click="toggleOpen">
      <span v-if="selected.length > 0">{{ selected.join(', ') }}</span>
      <span v-else>Select options...</span>
      <i :class="['fas', isOpen ? 'fa-caret-up' : 'fa-caret-down']" />
    </div>
    <div v-show="isOpen" class="multiselect__options">
      <div
        v-for="option in options"
        :key="option"
        class="multiselect__option"
        :class="{ 'multiselect__option--selected': selected.includes(option) }"
        @click="handleSelect(option)"
      >
        {{ option }}
        <i v-if="selected.includes(option)" class="fas fa-check" />
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
  const index = selected.value.indexOf(option)
  if (index === -1) {
    selected.value.push(option)
  } else {
    selected.value.splice(index, 1)
  }
}

watchEffect(() => {
  emits('update:modelValue', selected.value)
})
</script>
