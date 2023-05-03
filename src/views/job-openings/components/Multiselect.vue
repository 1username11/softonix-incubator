<template>
  <div
    class="inline-block relative text-sm text-gray"
  >
    <div
      class="flex items-center justify-between p-2 bg-white border
      border-gray rounded-lg cursor-pointer hover:bg-gray-ultra-light capitalize"
      @click="toggleOpen"
    >
      <span
        v-if="!selected.length"
        class="flex-1 min-w-[230px]"
      >
        Select department
      </span>
      <span
        v-else
        class="flex-1 min-w-[230px]"
      >{{ filterDepartmentsNamesFromSelected(selected) }}</span>
    </div>
    <div
      v-show="isOpen"
      class="absolute top-full left-0 z-50 w-full max-h-[200px]
      overflow-y-auto bg-white border border-gray-light rounded-lg shadow"
    >
      <div
        v-for="option in options"
        :key="option"
        :class="{ 'bg-[#e5e5e5]': selected.includes(option) }"
        class="flex items-center justify-between p-2.5 cursor-pointer hover:bg-[#f5f5f5] capitalize"
        @click="handleSelect(option)"
      >
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'

const props = defineProps<{
  options: IDepartment[]
  modelValue: IDepartment[]
}>()
const emits = defineEmits(['update:modelValue'])
const isOpen = ref(false)
const selected = ref<IDepartment[]>(props.modelValue)
const toggleOpen = () => {
  isOpen.value = !isOpen.value
}
const handleSelect = (option: IDepartment) => {
  const index = selected.value.indexOf(option)
  if (index === -1) {
    selected.value.push(option)
  } else {
    selected.value.splice(index, 1)
  }
}

function filterDepartmentsNamesFromSelected (selected: IDepartment[]) {
  const departmentsNames = ref<string[]>([])
  selected.forEach((item: IDepartment) => departmentsNames.value.push(item.name))
  return departmentsNames.value.join(', ')
}

watchEffect(() => {
  emits('update:modelValue', selected.value)
})
</script>
