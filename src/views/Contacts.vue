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

      <div class="rounded-md font-medium border border-gray-medium bg-white focus:border-gray-dark text-sm p-2  w-min">
        <select v-model="role" class="bg-white">
          <option
            v-for="(roleItem, idx) in roles"
            :key="idx"
            class="text-gray font-semibold"
            :value="roleItem.value"
          >
            {{ roleItem.label }}
          </option>
        </select>
      </div>

      <div class="rounded-md font-medium border border-gray-medium bg-white focus:border-gray-dark text-sm p-2  w-min">
        <select v-model="sortingType" class="bg-white">
          <option
            v-for="(sortingTypeItem, idx) in sortingTypeArr"
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

const contactsStore = useContactsStore()
const { contacts, searchParam, roles } = storeToRefs(contactsStore)
const { deleteContact, updateContact, searchContacts } = contactsStore
const router = useRouter()

const sortingType = ref('default')
const role = ref('')

const sortingTypeArr = [
  {
    label: 'Default',
    value: 'default',
    selected: true
  },
  {
    label: 'Ascending',
    value: 'ascending',
    selected: false
  },
  {
    label: 'Descending',
    value: 'descending',
    selected: false
  }
]
function createNewContact () {
  router.push({ name: 'upsertContact', params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  router.push({ name: 'upsertContact', params: { contactId } })
}

watch(searchParam, (query) => {
  console.log('searchParam', searchParam.value)
  console.log('query', query)
  searchContacts(query)
})

// const filteredArr = computed(() => filterArr(contacts.value, searchParam.value)
//   .filter((item) => {
//     if (item.role !== 'all') {
//       return item.role.includes(role.value)
//     } else {
//       return item.role.includes('')
//     }
//   })
//   .sort(
//     (a: IContact, b: IContact): any => {
//       if (sortingType.value === 'ascending') {
//         return a.name > b.name ? 1 : a.name < b.name ? -1 : 0
//       } else if (sortingType.value === 'descending') {
//         return a.name > b.name ? -1 : a.name < b.name ? 1 : 0
//       }
//     }
//   ))

</script>
