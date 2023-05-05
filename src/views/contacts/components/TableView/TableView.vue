<template>
  <TableContactItem :contacts="contacts" />
</template>

<script lang="ts" setup>
const contactStore = useContactsStore()
const { contacts } = storeToRefs(contactStore)
const editMode = ref(false)
</script>
