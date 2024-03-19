<template>
  <div class="app-container">
    <RouterView v-if="!loading"/>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'

const loading = ref(true) 

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 4000)
})
</script>
  
<style scoped>
@import '@/style/app.css';
</style>
