<template>
  <el-table
    :data="contacts"
    :cell-style="{ padding: '10px', cursor: 'pointer'}"
    @row-click="(e) => onCardClickEdit(e.id)"
  >
    <el-table-column prop="image" label="Image" @click="editContact">
      <template #default="{ row }">
        <div
          v-if="imageHasError || !row.image"
          class="flex justify-center items-center w-[80px] h-[80px] text-center m-auto
          border border-gray-medium bg-gray-ultra-light rounded-full uppercase"
        >
          <span>{{ nameAbbrv(contacts.length - 1) }}</span>
        </div>
        <img
          v-else
          class="object-cover w-[80px] h-[80px] rounded-full mx-auto block"
          :src="row.image"
          @error="imageHasError = true"
          @load="imageHasError = false"
        >
      </template>
    </el-table-column>
    <el-table-column prop="name" label="Name">
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
    <el-table-column prop="description" label="Description">
      <template #default="{ row }">
        <el-input v-if="contactIdBeingEdited === row.id" v-model="localContact.description" type="text" @click.stop />
        <p v-else class="text-center truncate">{{ row.description }}</p>
      </template>
    </el-table-column>
    <el-table-column label="Actions">
      <template #default="{ row }">
        <div v-if="contactIdBeingEdited === row.id" class="text-center">
          <el-button
            type="success"
            @click.stop="onUpdateContact(row)"
          >
            Save
          </el-button>
          <el-button
            type="warning"
            @click.stop="contactIdBeingEdited = null"
          >
            Cancel
          </el-button>
        </div>
        <div v-else class="text-center">
          <el-button type="primary" @click.stop="triggerEditMode(row)">Edit</el-button>
          <el-button type="danger" @click.stop="deleteContact(row)">Delete</el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
const emit = defineEmits<{ (e: 'onCardClickEdit', value: number): void }>()

const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
const { deleteContact, updateContact, editContact } = contactsStore

const inputRef = ref<HTMLInputElement>()
const contactIdBeingEdited = ref()
const localContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: '',
  image: ''
})

const nameAbbrv = function (id: number) {
  return contacts.value[id].name.split(' ').reduce((acc, cur) => {
    if (acc.length < 2) {
      acc = acc.concat(cur[0])
    }
    return acc
  }, '')
}

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

const onCardClickEdit = (id: number) => {
  emit('onCardClickEdit', id)
}

const imageHasError = ref(false)
</script>
