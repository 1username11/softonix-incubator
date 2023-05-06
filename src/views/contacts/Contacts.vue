<template class="w-full h-full">
  <el-tabs type="border-card" class="w-full h-full">
    <Header />
    <el-tab-pane label="Card View">
      <CardView />
    </el-tab-pane>
    <el-tab-pane class="mt-5" label="Table View">
      <TableView />
    </el-tab-pane>
  </el-tabs>
</template>
