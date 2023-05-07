<template>
  <el-table
    :data="contacts"
    :cell-style="{ padding: '10px', cursor: 'pointer'}"
    @row-click="editContact($event.id)"
  >
    <TableContactItem
      v-for="column in columns"
      :key="column"
      :prop="column"
      :label="column"
      header-align="center"
    />
  </el-table>
</template>

<script setup lang="ts">
const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
const { editContact } = contactsStore
const columns = ['image', 'name', 'description', 'actions']
</script>
