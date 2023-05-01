<template>
  <div class="flex justify-center">
    <Card :title="cardTitle" class="w-[350px]">
      <div class="space-y-4 mt-4">
        <AppInput v-model="contactForm.name" placeholder="Name" />
        <AppInput v-model="contactForm.description" placeholder="Description" />
        <AppInput v-model="contactForm.image" placeholder="Image" />
        <select
          v-model="contactForm.role"
          class="rounded-md border border-gray-medium focus:border-gray-dark text-sm p-2  w-full bg-white"
        >
          <option value="" disabled selected>All</option>
          <option
            v-for="(roleItem, idx) in rolesForUpsertContact"
            :key="idx"
            :value="roleItem"
            selected
          >
            {{ roleItem }}
          </option>
        </select>
      </div>
      <template #footer>
        <div class="flex gap-3 px-6 pb-6 mt-2">
          <AppButton :disabled="!isFormValid" class="w-full flex-auto" @click="onSave">
            <template #icon>
              <IconPlus class="w-5 h-5" />
            </template>
            Save
          </AppButton>
          <AppButton class="w-full flex-auto" @click="$router.back">
            Cancel
          </AppButton>
          <AppButton v-if="currentContact" class="w-full flex-auto" @click="onDelete">
            Delete
          </AppButton>
        </div>
      </template>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import AppInput from '@/components/AppInput.vue'
import AppButton from '@/components/AppButton.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import Card from '@/components/Card.vue'
import { computed, reactive } from 'vue'
import { useContactsStore } from '@/store'
import { useRoute, useRouter } from 'vue-router'
import type { IContact } from '@/types'
import { storeToRefs } from 'pinia'

const contactsStore = useContactsStore()
const { contacts, rolesForUpsertContact } = storeToRefs(contactsStore)
const { addContact, deleteContact, updateContact } = contactsStore

const router = useRouter()
const route = useRoute()

const currentContact = computed(() => contacts.value.find(c => c.id === +route.params.contactId))

const cardTitle = computed(() => {
  return currentContact.value ? 'Edit Contact' : 'New Contact'
})

const isFormValid = computed(() => {
  const { id, image, ...contact } = contactForm
  return Object.values(contact).every(c => !!c)
})

const contactForm = reactive<IContact>(currentContact.value
  ? { ...currentContact.value }
  : {
    id: contacts.value.length + 1,
    name: '',
    description: '',
    image: null,
    role: ''
  })

function onSave () {
  if (currentContact.value) {
    updateContact(contactForm)
  } else {
    addContact(contactForm)
    router.push({ name: 'contacts' })
  }
}

function onDelete () {
  deleteContact(contactForm)
  router.replace({ name: 'contacts' })
}
</script>
