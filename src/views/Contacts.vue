<template>
  <div>
    <div class="flex items-center gap-4">
      <h3 class="font-medium m-0">Contact list</h3>

      <AppButton @click="createNewContact">
        <template #icon>
          <IconPlus class="w-5 h-5" />
        </template>
        Create Contact
      </AppButton>

      <AppInput v-model="searchParam" placeholder="Search..." class="max-w-[400px]" />

      <MultiSelect
        v-model="selectedRoles"
        :options="roles"
        @update:modelValue="roleFilter"
      />

      <div class="rounded-md font-medium border border-gray-medium bg-white focus:border-gray-dark text-sm p-2  w-min">
        <select v-model="sortingType" class="bg-white">
          <option
            v-for="(sortingTypeItem, idx) in sortingTypes"
            :key="idx"
            class="text-gray font-semibold"
            :value="sortingTypeItem.value"
            :selected="sortingTypeItem.selected"
          >
            {{ sortingTypeItem.label }}
          </option>
        </select>
      </div>
    </div>

    <div class="contact-list grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
      <ContactItem
        v-for="contact in contacts"
        :key="contact.id"
        class="cursor-pointer"
        :contact="contact"
        @click="editContact(contact.id)"
        @delete="deleteContact(contact)"
        @save="updateContact($event)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useContactsStore } from '@/store'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import ContactItem from '@/components/ContactItem.vue'
import AppButton from '@/components/AppButton.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import AppInput from '@/components/AppInput.vue'
import MultiSelect from '@/components/MultiSelect.vue'

const contactsStore = useContactsStore()
const { contacts, searchParam, roles, sortingTypes } = storeToRefs(contactsStore)
const { deleteContact, updateContact, searchContacts, roleFilter, contactsSorting } = contactsStore
const router = useRouter()

const sortingType = ref('default')
const selectedRoles = ref(['all'])
function createNewContact () {
  router.push({ name: 'upsertContact', params: { contactId: 'new' } })
}
function editContact (contactId: number) {
  router.push({ name: 'upsertContact', params: { contactId } })
}

watch(searchParam, () => {
  searchContacts(searchParam.value)
})
watch(sortingType, () => {
  contactsSorting(sortingType.value)
})
</script>
