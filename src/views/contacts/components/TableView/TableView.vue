<template>
  <el-table
    :data="contacts"
    :cell-style="{ padding: '10px', cursor: 'pointer'}"
    @row-click="editContact($event.id)"
  >
    <TableContactItem
      v-for="colum in colums"
      :key="colum"
      :prop="colum"
      :label="colum"
    />
  </el-table>
</template>

<script setup lang="ts">
const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
const { editContact } = contactsStore
const colums = ['image', 'name', 'description', 'actions']
</script>
