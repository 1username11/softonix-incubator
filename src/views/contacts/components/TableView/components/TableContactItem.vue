
<template>
  <el-table-column v-if="prop === 'image'" :prop="prop" :label="label.charAt(0).toUpperCase() + label.slice(1)">
    <template #default="{ row }">
      <Avatar :contact="row" />
    </template>
  </el-table-column>

  <el-table-column v-else-if="prop === 'name'" :prop="prop" :label="label.charAt(0).toUpperCase() + label.slice(1)">
    <template #default="{ row }">
      <el-input
        v-if="contactIdBeingEdited === row.id" ref="inputRef"
        v-model="localContact.name"
        type="text"
        @click.stop
      />
      <p v-else class="text-center">{{ row.name }}</p>
    </template>
  </el-table-column>

  <el-table-column v-else-if="prop === 'description'" :prop="prop" :label="label.charAt(0).toUpperCase() + label.slice(1)">
    <template #default="{ row }">
      <el-input v-if="contactIdBeingEdited === row.id" v-model="localContact.description" type="text" @click.stop />
      <p v-else class="text-center truncate">{{ row.description }}</p>
    </template>
  </el-table-column>

  <el-table-column v-else :prop="prop" :label="label.charAt(0).toUpperCase() + label.slice(1)">
    <template #default="{ row }">
      <div v-if="contactIdBeingEdited === row.id" class="text-center">
        <el-button
          :type="$elComponentType.success"
          @click.stop="onUpdateContact(row)"
        >
          Save
        </el-button>
        <el-button
          :type="$elComponentType.warning"
          @click.stop="contactIdBeingEdited = null"
        >
          Cancel
        </el-button>
      </div>

      <div v-else class="text-center">
        <el-button :type="$elComponentType.primary" @click.stop="triggerEditMode(row)">Edit</el-button>
        <el-button :type="$elComponentType.danger" @click.stop="deleteContact(row.id)">Delete</el-button>
      </div>
    </template>
  </el-table-column>
</template>
<script setup lang="ts">
defineProps<{
  prop: string
  label: string
}>()

const contactsStore = useContactsStore()
const { deleteContact, updateContact } = contactsStore

const inputRef = ref<HTMLInputElement>()
const contactIdBeingEdited = ref()

const localContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: '',
  image: ''
})

const triggerEditMode = async ({ id, ...rest }: IContact) => {
  contactIdBeingEdited.value = id
  localContact.value = rest
  await nextTick()
  inputRef.value?.focus()
}
const onUpdateContact = (contact: IContact) => {
  updateContact({ ...localContact.value, id: contact.id })
  contactIdBeingEdited.value = null
}
</script>
