<template>
  <div class="pt-[33px] mx-auto max-w-[1250px] pb-[79px]">
    <NavBar class="mb-20" />
    <RouterView />
    <Footer class="mt-32" />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import Footer from '@/views/Footer.vue'
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Poppins:wght@400;500&family=Sen:wght@700&display=swap');
.font-poppins{
    font-family: 'poppins', Poppins;
}
.font-sen{
    font-family: 'sen', Sen;
}
.font-inter{
    font-inter: 'inter', Inter;
}
.bg-image{
    background-image: url("./static/Intersect.png"), url("./static/Rectangle 4383.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
