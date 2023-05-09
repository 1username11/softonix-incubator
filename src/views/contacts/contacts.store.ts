export const useContactsStore = defineStore('contactsStore', () => {
  const contacts = ref<IContact[]>([])

  const getContacts = () => {
    if (contacts.value.length) return

    return contactsService.getContacts()
      .then(res => {
        contacts.value = res
      })
  }

  async function addContact (contact: IContact) {
    try {
      await contactsService.createContact(contact)
      contacts.value.push(contact)
    } catch (error) {
      console.error(error)
    }
  }

  async function updateContact (contact: IContact) {
    try {
      const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
      await contactsService.updateContact(contact)
      contacts.value[currentIndex] = { ...contact }
    } catch (err) {
      console.error(err)
    }
  }

  async function deleteContact (contact: IContact) {
    try {
      const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
      await contactsService.deleteContact(contact.id)
      contacts.value.splice(currentIndex, 1)
    } catch (err) {
      console.error(err)
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
