<template>
  <div class="navigation">
    <h1> Navigation menu </h1>
    <RouterLink :to="{ name: 'Home' }" class="navigation-link">Home</RouterLink>
    <RouterLink :to="{ name: 'Venue' }" class="navigation-link">Venue</RouterLink>
    <RouterLink :to="{ name: 'Program' }" class="navigation-link">Program</RouterLink>
    <RouterLink :to="{ name: 'Entourage' }" class="navigation-link">Entourage</RouterLink>
    <RouterLink :to="{ name: 'Gift' }" class="navigation-link">Gift guide</RouterLink>
  </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const routeName = ref('Home')
const route = useRoute()

onMounted(() => {
  watchEffect(() => {
    routeName.value = route.hash
  })
})
</script>

<style scoped>
@import '@/style/navigation.css';
</style>
