<template>
  <div class="home-contain">
    <NavBar />
    <div class="home-main">
      <div class="venue-top">
        <h1>The venue</h1>
        <a
          href="https://www.google.com/maps/dir//First+Love+Church+Nakuru+M52X%2BCV+Nakuru/@-0.3488861,36.1996828,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1829971bf824ea35:0x76d2955566e1b5ad!2m2!1d36.1996828!2d-0.3488861?entry=ttu"
          target="_blank"
          >Click here to navigate the map for directions!</a
        >
      </div>
      
      <div class="venue-middle">
        <h1>CEREMONY & RECEPTION</h1>
      <p>First Love Church, Nakuru Behind Roots Academy Junior Secondary 600m on Marura Road.</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d31917.95530409957!2d36.19982!3d-0.348743!3m2!1i1024!2i768!4f13.1!2m1!1sM52X%20CV%2C%20Nakuru%2C%20Kenya!5e0!3m2!1sen!2sus!4v1710769001981!5m2!1sen!2sus"
          width="100%"
          height="400"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
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
