import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IContact } from '@/types'

export const useContactsStore = defineStore('contactsStore', () => {
  const contactsBase: IContact[] = [
    {
      id: 1,
      name: 'Esther Howard',
      description: 'Forward Response Developer',
      image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'admin'
    },
    {
      id: 2,
      name: 'Jane Cooper',
      description: 'Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'user'
    },
    {
      id: 3,
      name: 'Cody Fisher',
      description: 'Product Directives Officer',
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'user'
    }
  ]
  const contacts = ref<IContact[]>([...contactsBase])
  const roles = ref([
    {
      label: 'All',
      value: '',
      selected: true
    }, {
      label: 'Admin',
      value: 'admin',
      selected: false
    }, {
      label: 'User',
      value: 'user',
      selected: false
    }
  ])
  const rolesForUpsertContact = ref(roles.value.slice(1))
  const searchParam = ref('')

  function deleteContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value.splice(currentIndex, 1)
  }
  function updateContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value[currentIndex] = { ...contact }
  }

  function searchContacts (searchParam: string) {
    contacts.value = contactsBase.filter((item) => {
      return item.description.toUpperCase().includes(searchParam.toUpperCase()) ||
          item.name.toUpperCase().includes(searchParam.toUpperCase())
    })
  }

  function addContact (contact: IContact) {
    contacts.value.push(contact)
  }

  return {
    contacts,
    deleteContact,
    addContact,
    searchContacts,
    searchParam,
    updateContact,
    roles,
    rolesForUpsertContact
  }
})
