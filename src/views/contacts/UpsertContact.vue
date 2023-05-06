<template>
  <div class="flex justify-center">
    <el-card :title="cardTitle" class="w-[350px] p-6">
      <div class="space-y-4">
        <el-form
          :model="contactForm"
          :rules="formRules"
        >
          <el-form-item prop="name">
            <el-input v-model.trim="contactForm.name" placeholder="Name" />
          </el-form-item>
          <el-form-item prop="description">
            <el-input v-model.trim="contactForm.description" placeholder="Description" />
          </el-form-item>
          <el-form-item prop="image">
            <el-input v-model.trim="contactForm.image" placeholder="Image Link" />
          </el-form-item>
        </el-form>
      </div>

      <div class="mt-2 flex gap-3">
        <el-button type="warning" class="flex-auto" @click="$router.back">
          Cancel
        </el-button>

        <el-button v-if="currentContact" type="danger" class="flex-auto" @click="onDelete">
          Delete
        </el-button>

        <el-button type="primary" class="flex-auto" :disabled="!isFormValid" @click="onSave">
          <template #icon>
            <IconPlus class="w-5 h-5" />
          </template>

          Save
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import type { FormRules } from 'element-plus'

const router = useRouter()
const route = useRoute()

const { $routeNames } = useGlobalProperties()

const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
const { addContact, updateContact, deleteContact } = contactsStore

const currentContact = computed(() => contacts.value.find(c => c.id === +route.params.contactId))

const cardTitle = computed(() => {
  return currentContact.value ? 'Edit Contact' : 'New Contact'
})

const contactForm = reactive<IContact>(currentContact.value
  ? { ...currentContact.value }
  : {
    id: contacts.value.length + 1,
    name: '',
    description: '',
    image: ''
  })

const isFormValid = computed(() => {
  const { image, ...contact } = contactForm
  return Object.values(contact).every(c => !!c)
})

function onDelete () {
  if (currentContact.value) {
    deleteContact(currentContact.value.id)
    router.replace({ name: $routeNames.contacts })
  }
}

function onSave () {
  if (currentContact.value) {
    updateContact(contactForm)
  } else {
    addContact(contactForm)
  }
  router.push({ name: $routeNames.contacts })
}

const formRules: FormRules = useElFormRules({
  name: [useRequiredRule()],
  description: [useRequiredRule()]
})

</script>
