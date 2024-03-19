<template>
  <div class="home-contain">
    <NavBar />
    <div class="home-main">
      <div class="gift-top">
        <h1>Gift Guide</h1>
      </div>
      <div class="gift-middle">
        <h1>
          Given that love is the essence of this day, your attendance is indispensable for our
          celebration. If you still believe in the value of giving, perhaps a gift is worth
          considering.
        </h1>
        <p>Erick:+254 798 604 169</p>
        <p>GOD BLESS YOU</p>
      </div>
    </div>
    <NavigationComponent />
  </div>
</template>

<script setup>
import NavigationComponent from '../components/NavigationComponent.vue'
import NavBar from '../components/NavBar.vue'
</script>

<style>
@import '@/style/main.css';
</style>
