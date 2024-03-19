<template>
    <div class="nav-container">
      <div class="nav-logo">
       <h1>Erick & Neema</h1>
      </div>
      <div class="nav-middle">
        <RouterLink :to="{ name: 'Home' }" class="nav-link">Home</RouterLink>
        <RouterLink :to="{ name: 'Venue' }" class="nav-link">Venue</RouterLink>
        <RouterLink :to="{ name: 'Program' }" class="nav-link">Program</RouterLink>
        <RouterLink :to="{ name: 'Entourage' }" class="nav-link">Entourage</RouterLink>
        <RouterLink :to="{ name: 'Gift' }" class="nav-link">Gift guide</RouterLink>
      </div>
      <div class="mobile-nav">
        <MenuIcon class="menu-icon" @click="toggleMenu" />
      </div>
    </div>
    <div class="mobile-nav-menu" v-if="mobileNavActive">
      <div class="nav-content-menu">
        <RouterLink :to="{ name: 'Home' }" class="nav-link">Home</RouterLink>
        <RouterLink :to="{ name: 'Venue' }" class="nav-link">Venue</RouterLink>
        <RouterLink :to="{ name: 'Program' }" class="nav-link">Program</RouterLink>
        <RouterLink :to="{ name: 'Entourage' }" class="nav-link">Entourage</RouterLink>
        <RouterLink :to="{ name: 'Gift' }" class="nav-link">Gift guide</RouterLink>
      </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import MenuIcon from '@/icons/MenuIcon.vue'

const mobileNavActive = ref(false)
const routeName = ref('Home')
const route = useRoute()

onMounted(() => {
  watchEffect(() => {
    routeName.value = route.hash
  })
})


const toggleMenu = () => {
  mobileNavActive.value = !mobileNavActive.value
}
</script>

<style scoped>
@import '@/style/navbar.css';
</style>
