<template>
  <TableContactItem :contacts="contacts" @onCardClickEdit="editContact" />
</template>

<script lang="ts" setup>
const contactStore = useContactsStore()
const { contacts } = storeToRefs(contactStore)
const { editContact } = contactStore
</script>
