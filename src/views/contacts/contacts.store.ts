import { contactsService } from '@/views/contacts/contacts.service'

export const useContactsStore = defineStore('contactsStore', () => {
  const contacts = ref<IContact[]>([])

  const getContacts = () => {
    // if (contacts.value.length) return

    return contactsService.getContacts()
      .then(res => {
        contacts.value = res
      })
  }

  async function addContact (payload: IContact) {
    try {
      await contactsService.createContact(payload)
    } catch (e) {
      console.log(e)
    }
  }

  async function updateContact (contact: IContact) {
    try {
      await contactsService.updateContact(contact)
    } catch (e) {
      console.log(e)
    }
  }

  async function deleteContact (contact: IContact) {
    try {
      await contactsService.deleteContact(contact.id)
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
