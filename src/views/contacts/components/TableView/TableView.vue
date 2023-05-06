<template>
  <TableContactItem :contacts="contacts" class="" @onCardClickEdit="editContact" />
</template>

<script lang="ts" setup>
const contactStore = useContactsStore()
const { contacts } = storeToRefs(contactStore)
const { editContact } = contactStore
</script>
