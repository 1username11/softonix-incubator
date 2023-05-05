<template>
  <el-table :data="contacts" style="width: 100%">
    <el-table-column prop="image" label="Image" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="description" label="Description" width="180" />
    <el-table-column fixed="right" label="Actions" width="180">
      <div class="flex justify-end my-2 gap-0.5 px-4">
        <template v-if="editMode">
          <el-button
            size="small"
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click.stop="editMode = false"
          >
            Cancel
          </el-button>

          <el-button
            size="small"
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click.stop="onSave"
          >
            Save
          </el-button>
        </template>

        <template v-else>
          <el-button
            size="small"
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click.stop="triggerEditMode"
          >
            Edit
          </el-button>

          <el-button
            size="small"
            class="text-red-500 font-medium text-xs cursor-pointer hover:underline"
            @click.stop="$emit('delete', contact)"
          >
            Delete
          </el-button>
        </template>
      </div>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import type { FormRules } from 'element-plus'
defineProps<{
  contacts: IContact[]
}>()

const formRules: FormRules = reactive({
  name: [useRequiredRule()],
  description: [useRequiredRule()]
})
const emit = defineEmits(['delete', 'save'])

const inputRef = ref<HTMLInputElement>()

const localContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: '',
  image: ''
})

const editMode = ref(false)

async function triggerEditMode () {
  editMode.value = true
  localContact.value = { ...props.contact }
  await nextTick()
  inputRef.value?.focus()
}

function onSave () {
  emit('save', localContact.value)
  editMode.value = false
}

const imageHasError = ref(false)
</script>
