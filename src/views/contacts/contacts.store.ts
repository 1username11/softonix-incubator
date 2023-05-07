import { contactsService } from '@/views/contacts/contacts.service'

export const useContactsStore = defineStore('contactsStore', () => {
  const contacts = ref<IContact[]>([])

  const getContacts = () => {
    console.log(contacts.value)
    if (contacts.value.length) return

    return contactsService.getContacts()
      .then(res => {
        console.log('getContacts', res)
        contacts.value = res
      })
  }

  async function addContact (payload: IContact) {
    try {
      const contact = await contactsService.createContact(payload)
      contacts.value.push(contact)
    } catch (e) {
      console.log(e)
    }
  }

  async function updateContact (contact: IContact) {
    try {
      await contactsService.updateContact(contact)
      const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
      contacts.value[currentIndex] = { ...contact }
    } catch (e) {
      console.log(e)
    }
  }

  async function deleteContact (contact: IContact) {
    try {
      await contactsService.deleteContact(contact.id)
      const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
      contacts.value.splice(currentIndex, 1)
    } catch (e) {
      console.log(e)
    }
  }

  return {
    contacts,
    getContacts,
    addContact,
    deleteContact,
    updateContact
  }
})
