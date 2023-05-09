<template>
  <div class="flex justify-between items-center">
    <div class="flex gap-5 items-center">
      <h3 class="font-medium m-0">Contact list</h3>

      <el-button :type="$elComponentType.primary" @click="createNewContact">
        <template #icon>
          <IconPlus class="w-5 h-5" />
        </template>
        Add Contact
      </el-button>

      <el-button
        class="!ml-0"
        :type="$elComponentType.danger"
        @click="logout"
      >
        Logout
      </el-button>
    </div>
    <div class="font-medium text-gray">
      {{ jwtExpireIn }}
    </div>
  </div>

  <div class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
    <template
      v-for="contact in contacts"
      :key="contact.id"
    >
      <ContactItem
        v-if="contact"
        class="cursor-pointer"
        :contact="contact"
        @click="editContact(contact.id)"
        @delete="deleteContact"
        @save="updateContact"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
const { $routeNames } = useGlobalProperties()

const router = useRouter()
const { logout, decodedToken } = useAuthStore()
const contactsStore = useContactsStore()
const { getContacts, updateContact, deleteContact } = contactsStore
const { contacts } = storeToRefs(contactsStore)

function createNewContact () {
  router.push({ name: $routeNames.upsertContact, params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  router.push({ name: $routeNames.upsertContact, params: { contactId } })
}
const jwt = ref(localStorage.getItem('si-token'))
const jwtExpireIn = computed(() => {
  const jwtValue = jwt.value
  if (!jwtValue) return null
  const decodedJwt = JSON.parse(atob(jwtValue.split('.')[1]))
  const date = new Date(decodedJwt.exp * 1000)

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const daysOfWeek = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ]

  const monthName = months[date.getMonth()]
  const dayOfWeek = daysOfWeek[date.getDay()]
  const dayOfMonth = date.getDate()
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')

  const dateString = `expire in ${dayOfMonth} ${monthName} ${dayOfWeek}  ${hours}:${minutes}`
  return dateString
})

onMounted(() => {
  getContacts()
})

</script>
