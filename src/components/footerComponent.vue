<template>
  <div class="footer-container">
    <div class="footer-link-container">
      <RouterLink class="footer-link" :to="{ name: 'Home' }">Home</RouterLink>
        <RouterLink class="footer-link" :to="{ name: 'Support' }">Support</RouterLink>
        <RouterLink class="footer-link" :to="{ name: 'Policy' }">Policy</RouterLink>
        <RouterLink class="footer-link" :to="{ name: 'Disclaimer' }">Disclaimer</RouterLink>
        <RouterLink class="footer-link" :to="{ name: 'Terms' }">Terms and Conditions</RouterLink>
    </div>
    <div class="footer-info">copyright &copy; 2023 <span @click="goLogin()">.</span></div>
  </div>
</template>
<script setup>
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()

const goLogin = () => {
  router.push({ name: 'AdminLogin' })
}
</script>
<style>
@import '@/style/footer.css';
</style>
